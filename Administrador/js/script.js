function cambiarContenido() {
  const contenido1 = document.getElementById("cont-alta");
  const contenido2 = document.getElementById("cont-baja");

  if (contenido1.style.display === "none") {
    contenido1.style.display = "block";
    contenido2.style.display = "none";
  } else {
    contenido1.style.display = "none";
    contenido2.style.display = "block";
  }
}
