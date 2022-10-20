function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// console.log(getRandomHexColor());

const btnEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const spanColorEl = document.querySelector('.color');

btnEl.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanColorEl.textContent = getRandomHexColor();
  // console.log(getRandomHexColor());
}

