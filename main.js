const button = document.querySelector('button');

button.addEventListener('click', function() {
  let min = +document.getElementById('min').value;

  let max = +document.getElementById('max').value;

  let result = Math.floor(min + Math.random() * (max + 1 - min));
  textResult = result;
   document.getElementById('text-result').textContent = result;

})
