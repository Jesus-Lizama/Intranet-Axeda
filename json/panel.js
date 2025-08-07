document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById("form-ticket");

  // Crear notificación si no existe
  let noti = document.getElementById('noti-panel');
  if (!noti) {
    noti = document.createElement('div');
    noti.id = 'noti-panel';
    noti.style.position = 'fixed';
    noti.style.top = '30px';
    noti.style.right = '30px';
    noti.style.background = '#4f8cff';
    noti.style.color = '#fff';
    noti.style.padding = '16px 28px';
    noti.style.borderRadius = '8px';
    noti.style.fontSize = '1.1rem';
    noti.style.boxShadow = '0 2px 12px rgba(0,0,0,0.10)';
    noti.style.zIndex = '1000';
    noti.style.opacity = '0';
    noti.style.transition = 'opacity 0.4s';
    document.body.appendChild(noti);
  }

  async function cargarTickets() {
    const res = await fetch("/api/tickets");
    const tickets = await res.json();
    const container = document.getElementById("tickets");
    container.innerHTML = "";
    tickets.forEach((t, i) => {
      const div = document.createElement("div");
      div.className = "ticket";
      div.innerHTML = `
        <h3>${t.nombre}</h3>
        <p><strong>Departamento:</strong> ${t.departamento}</p>
        <p><strong>Equipo:</strong> ${t.equipo ? t.equipo : '-'}</p>
        <p><strong>Tipo de solicitud:</strong> ${t.tipo ? t.tipo : '-'}</p>
        <p><strong>Descripción:</strong> ${t.descripcion}</p>
        <p><em>${t.fecha ? t.fecha : ''}</em></p>
      `;
      container.appendChild(div);
    });
  }

  if (form) {
    form.addEventListener("submit", async function(e) {
      e.preventDefault();
      const data = {
        nombre: form.nombre.value,
        departamento: form.departamento.value,
        equipo: form.equipo ? form.equipo.value : '',
        tipo: form['Selecciona un problema'] ? form['Selecciona un problema'].value : '',
        descripcion: form.descripcion.value
      };
      await fetch("/api/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      form.reset();
      mostrarNotificacion("¡Ticket creado exitosamente!");
      cargarTickets();
    });
  }

  function mostrarNotificacion(msg) {
    noti.textContent = msg;
    noti.style.opacity = '1';
    setTimeout(() => { noti.style.opacity = '0'; }, 2000);
     }

  cargarTickets();
});