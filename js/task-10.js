  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  }

  const input = document.querySelector('input');
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const boxesContainer = document.getElementById('boxes');

  createButton.addEventListener('click', function() {
    createBoxes(parseInt(input.value));
  });

  destroyButton.addEventListener('click', function() {
    destroyBoxes();
  });

  function createBoxes(amount) {
    for (let i = 0; i < amount; i++) {
      const div = document.createElement('div');
      const size = 30 + i * 10;
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = getRandomHexColor();

      boxesContainer.appendChild(div);
    }
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }
