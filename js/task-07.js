const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

// console.log(inputEl);

inputEl.addEventListener('input', (event) => {
    textEl.style.fontSize = event.currentTarget.value + 'px';
})
