const contenido1 = document.getElementById("cont-alta");
const contenido2 = document.getElementById("cont-baja");
const contenido3 = document.getElementById("cont-modi");
const contenido4 = document.getElementById("cont-edit");

const opc_1 = document.getElementById("opc-1");
const opc_2 = document.getElementById("opc-2");
const opc_3 = document.getElementById("opc-3");
const opc_4 = document.getElementById("opc-4");

let contadorReactivos = 0;

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

function agregar(){
    if(contadorReactivos == 0){
        const paso1= document.getElementById("paso_1");
        paso1.className += " ocultar";
    }
    const contenedorP = document.getElementById("contenedorReactivos");
    const selectTipo = document.getElementById("tipo");
    switch (selectTipo.value) {
        case "1":
        contenedorP.innerHTML += '<div class="Reactivo1">'+
        '<p>Escribe la pregunta</p>'+
        '<label for="ipt-pregunta'+contadorReactivos+'" class="etiqueta">Pregunta: </label>'+
        '<input type="text" id="ipt-pregunta-'+contadorReactivos+'" name="ipt-pregunta'+contadorReactivos+'" class="texto" placeholder="Ingresa la pregunta..." required></div>';
            break;
        case "2":
        contenedorP.innerHTML += '<div class="Reactivo2">'+
        '<p>Escribe la pregunta</p>'+
        '<label for="ipt-pregunta'+contadorReactivos+'" class="etiqueta">Pregunta: </label>'+
        '<input type="text" id="ipt-pregunta-'+contadorReactivos+'" name="ipt-pregunta'+contadorReactivos+'" class="texto" placeholder="Ingresa la pregunta..." required>'+
        '<p>Escribe las respuestas de la pregunta y marca la que sea correcta</p>'+
        '<input type="radio" name="pregunta'+contadorReactivos+'" id="pregunta'+contadorReactivos+'" value="">'+
        '<input type="text" id="respuesta1'+contadorReactivos+'" value="" required>'+
        '<input type="radio" name="pregunta'+contadorReactivos+'" id="pregunta'+contadorReactivos+'" value="">'+
        '<input type="text" id="respuesta2'+contadorReactivos+'" value="" required>'+
        '<input type="radio" name="pregunta'+contadorReactivos+'" id="pregunta'+contadorReactivos+'" value="">'+
        '<input type="text" id="respuesta3'+contadorReactivos+'" value="" required>'+
        '<input type="radio" name="pregunta'+contadorReactivos+'" id="pregunta'+contadorReactivos+'" value="">'+
        '<input type="text" id="respuesta4'+contadorReactivos+'" value="" required></div>';
            break;
        default:
        contenedorP.innerHTML += '<div class="Reactivo3">'+
        '<p>Escribe la pregunta</p>'+
        '<label for="ipt-pregunta'+contadorReactivos+'" class="etiqueta">Pregunta: </label>'+
        '<input type="text" id="ipt-pregunta-'+contadorReactivos+'" name="ipt-pregunta'+contadorReactivos+'" class="texto" placeholder="Ingresa la pregunta..." required>'+
        '<input type="text" id="respuesta'+contadorReactivos+'" placeholder="Ingresa la respuesta..." value="" required></div>';
    }
    contadorReactivos++;
}

function crear(){
    const contenedorP = document.getElementById("contenedorReactivos");
    const selectTipo = document.getElementById("tipo");
    switch (selectTipo.value) {
        case "1":

            let pregunta="";
            for(i=0; i++; i<contadorReactivos){
                pregunta = document.getElementById("ipt-pregunta-"+i);
                if (str.length == 0) {
                    document.getElementById("txtHint").innerHTML = "";
                    return;
                  } else {
                    var xmlhttp = new XMLHttpRequest();

                    xmlhttp.open("GET", "gethint.php?q=" + str, true);
                    xmlhttp.send();
                  }
            }
            break;
        case "2":
            break;
        default:
    }
    contadorReactivos++;
}

function generaClave(){
    return ;
}
