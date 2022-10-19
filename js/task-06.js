const inputEl = document.querySelector('#validation-input');
console.log(inputEl);

inputEl.addEventListener('blur', () => {
    if (inputEl.value.length = inputEl.dataset.length) {
        return inputEl.classList.add('valid');
    }
    return inputEl.classList.add('invalid');
})

console.log('123456'.length);
console.log('123dsmfdas,mnckecEMW,DC 456'.length);
console.log(inputEl.value.length);
