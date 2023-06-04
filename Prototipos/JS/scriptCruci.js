function checkAnswers() {
    // Obtiene todos los elementos de entrada del crucigrama
    var inputBoxes = document.getElementsByClassName('input-box');
    var correctCount = 0;

    // Recorre cada elemento de entrada y verifica si coincide con el valor correcto
    for (var i = 0; i < inputBoxes.length; i++) {
      var input = inputBoxes[i];
      var inputValue = input.value.toUpperCase();
      var correctValue = input.getAttribute('data-word');

      if (inputValue === correctValue) {
        correctCount++;
        input.classList.add('correct');
      } else {
        input.classList.add('incorrect');
      }
    }

    // Muestra el resultado de la calificación
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Correct answers: ' + correctCount + '/' + inputBoxes.length+"<br>Contesta la encuesta: <a href='https://forms.gle/5miAj3xvDodtmTaG7'>Encuesta</a>";
	resultElement.style.display="block";
  }
