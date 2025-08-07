document.addEventListener('DOMContentLoaded', () => {
  // Datos dinámicos
  const empleadoMes = {
    nombre: "Ana Martínez",
    puesto: "Analista de Datos",
    edad: "29",
    imagen: "/img/empleado-mes.jpg",
    mensaje: "¡Felicidades por tu dedicación y excelente desempeño!"
  };

  const eventosProximos = [
    { fecha: "15 de agosto", evento: "Taller de Innovación Digital" },
    { fecha: "22 de agosto", evento: "Capacitación en Seguridad Informática" },
    { fecha: "29 de agosto", evento: "Convivio mensual en la terraza" }
  ];

  const cumpleaniosMes = [
    { fecha: "2 de agosto", nombre: "Juan Pérez" },
    { fecha: "10 de agosto", nombre: "María López" },
    { fecha: "18 de agosto", nombre: "Carlos Ramírez" },
    { fecha: "25 de agosto", nombre: "Lucía Torres" }
  ];

  const eventosImportantes = [
    { titulo: "Nuevo Proyecto", detalle: "Lanzamiento de la plataforma AxedaCloud el 1 de septiembre." },
    { titulo: "Reconocimiento", detalle: "Grupo Axeda fue premiado como \"Mejor Lugar para Trabajar 2025\"." },
    { titulo: "Expansión", detalle: "Apertura de la nueva oficina en Monterrey." }
  ];

  // Renderizado dinámico
  const contenedor = document.getElementById('noticias-colaboradores');
  contenedor.innerHTML = `
    <h2>Noticias para Colaboradores</h2>
    <div class="noticia-destacada empleado-mes">
      <h3>🎉 Empleado del Mes</h3>
      <div class="empleado-info">
        <img src="${empleadoMes.imagen}" alt="Empleado del Mes" class="foto-empleado">
        <div>
          <p><strong>Nombre:</strong> ${empleadoMes.nombre}</p>
          <p><strong>Puesto:</strong> ${empleadoMes.puesto}</p>
          <p><strong>Edad:</strong> ${empleadoMes.edad} años</p>
          <p><em>${empleadoMes.mensaje}</em></p>
        </div>
      </div>
    </div>
    <div class="noticia-destacada eventos-proximos">
      <h3>📅 Próximos Eventos</h3>
      <ul>
        ${eventosProximos.map(ev => `<li><strong>${ev.fecha}:</strong> ${ev.evento}</li>`).join('')}
      </ul>
    </div>
    <div class="noticia-destacada cumpleanios-mes">
      <h3>🎂 Cumpleaños del Mes</h3>
      <ul>
        ${cumpleaniosMes.map(c => `<li>${c.fecha} - <strong>${c.nombre}</strong></li>`).join('')}
      </ul>
    </div>
    <div class="noticia-destacada eventos-importantes">
      <h3>⭐ Eventos Importantes de la Empresa</h3>
      <ul>
        ${eventosImportantes.map(e => `<li><strong>${e.titulo}:</strong> ${e.detalle}</li>`).join('')}
      </ul>
    </div>
    <div class="noticias-footer">
      <p>Para más información, visita la sección de Recursos Humanos.</p>
      <a href="recursos-humanos.html" class="btn-ver-mas">Ver Más Noticias</a>
      <a href="index.html" class="btn-ver-mas">Volver al inicio</a>
    </div>

  `;
});