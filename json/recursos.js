const noticias = [
  {
    titulo: "Nuevo Reglamento Interno",
    contenido: "A partir del 1 de agosto entra en vigor el nuevo reglamento de la empresa. Consulta el PDF en la intranet."
  },
  {
    titulo: "Jornada de Bienestar 2025",
    contenido: "El próximo viernes habrá actividades de salud física y emocional. ¡No te lo pierdas!"
  },
  {
    titulo: "Convocatoria de Vacantes Internas",
    contenido: "RH ha publicado nuevas oportunidades laborales internas. Postúlate desde tu perfil."
  }
];

// Cargar noticias dinámicamente
window.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("lista-noticias");
  noticias.forEach(noticia => {
    const div = document.createElement("div");
    div.className = "noticia";
    div.innerHTML = `
      <h3>${noticia.titulo}</h3>
      <p>${noticia.contenido}</p>
    `;
    contenedor.appendChild(div);
  });
});

// Botón de solicitud
document.getElementById("btnVacaciones").addEventListener("click", () => {
  window.location.href = "vacaciones.html"; // Enlace al formulario real
});