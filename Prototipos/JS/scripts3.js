    function checkAnswers() {
      var inputs = document.getElementsByTagName('input');
      var correctAnswers = ["beautifuly", "parking", "collection", "friendship", "understandeable", "possibility", "refusal", "decoration", "sensitive", "arrival"];
      var correctCount = 0;
	  var totalInputs = inputs.length;

      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.toLowerCase() === correctAnswers[i]) {
          inputs[i].style.backgroundColor = 'green';
          correctCount++;
        } else if (inputs[i].value === '') {
          inputs[i].style.backgroundColor = 'yellow';
        } else {
          inputs[i].style.backgroundColor = 'red';
        }
      }
	  
	var resultContainer = document.getElementById('result-container');
    resultContainer.style.display = 'block';

    var calificacion = (correctCount / totalInputs) * 100;

    var resultText = 'Respuestas correctas: ' + correctCount + '/' + totalInputs + '<br>Calificación: ' + calificacion + '%';
	
    resultContainer.innerHTML = resultText;
    }
	
	function revisarRespuestas() {
      var preguntas = document.getElementsByClassName("question");
      var totalPreguntas = preguntas.length;
      var respuestasCorrectas = 0;

      for (var i = 0; i < totalPreguntas; i++) {
        var pregunta = preguntas[i];
        var opciones = pregunta.getElementsByTagName("input");
        var totalOpciones = opciones.length;
        var respuestaCorrecta = false;

        for (var j = 0; j < totalOpciones; j++) {
          var opcion = opciones[j];

          if (opcion.checked && opcion.value === "correcta") {
            respuestaCorrecta = true;
            break;
          }
        }

        if (respuestaCorrecta) {
          respuestasCorrectas++;
          pregunta.style.backgroundColor = "green";
        } else {
          pregunta.style.backgroundColor = "red";
        }
      }

      var calificacion = (respuestasCorrectas / totalPreguntas) * 100;
      var resultadoDiv = document.getElementById("result");
      resultadoDiv.innerHTML = "Respuestas correctas: " + respuestasCorrectas + "/" + totalPreguntas + "<br>Calificación: " + calificacion + "%";
      resultadoDiv.style.display = "block";
    }
	