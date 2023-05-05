const contenido1 = document.getElementById("cont-alta");
const contenido2 = document.getElementById("cont-baja");
const contenido3 = document.getElementById("cont-modi");
const contenido4 = document.getElementById("cont-edit");

const opc_1 = document.getElementById("opc-1");
const opc_2 = document.getElementById("opc-2");
const opc_3 = document.getElementById("opc-3");
const opc_4 = document.getElementById("opc-4");

opc_1.addEventListener('click', function(e) {
    opc_1.className = "li-opc seleccionado";
    opc_2.className = "li-opc";
    opc_3.className = "li-opc";
    opc_4.className = "li-opc";

    contenido1.className = "cont-div mostrar";
    contenido2.className = "cont-div ocultar";
    contenido3.className = "cont-div ocultar";
    contenido4.className = "cont-div ocultar";
});

opc_2.addEventListener('click', function(e) {
    opc_1.className = "li-opc";
    opc_2.className = "li-opc seleccionado";
    opc_3.className = "li-opc";
    opc_4.className = "li-opc";

    contenido1.className = "cont-div ocultar";
    contenido2.className = "cont-div mostrar";
    contenido3.className = "cont-div ocultar";
    contenido4.className = "cont-div ocultar";
});

opc_3.addEventListener('click', function(e) {
    opc_1.className = "li-opc";
    opc_2.className = "li-opc";
    opc_3.className = "li-opc seleccionado";
    opc_4.className = "li-opc";

    contenido1.className = "cont-div ocultar";
    contenido2.className = "cont-div ocultar";
    contenido3.className = "cont-div mostrar";
    contenido4.className = "cont-div ocultar";
});

opc_4.addEventListener('click', function(e) {
    opc_1.className = "li-opc";
    opc_2.className = "li-opc";
    opc_3.className = "li-opc";
    opc_4.className = "li-opc seleccionado";

    contenido1.className = "cont-div ocultar";
    contenido2.className = "cont-div ocultar";
    contenido3.className = "cont-div ocultar";
    contenido4.className = "cont-div mostrar";
});

function cambiarContenido(elem) {
  if (contenido1.style.display === "none") {
    contenido1.style.display = "block";
    contenido2.style.display = "none";
  } else {
    contenido1.style.display = "none";
    contenido2.style.display = "block";
  }
}
