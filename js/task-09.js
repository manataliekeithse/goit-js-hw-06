
  const colorSpan = document.querySelector('.color');
  const changeColorButton = document.querySelector('.change-color');
  const body = document.querySelector('body');

  changeColorButton.addEventListener('click', function() {
    const newColor = getRandomHexColor();
    body.style.backgroundColor = newColor;
    colorSpan.textContent = newColor;
  });
