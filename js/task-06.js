const inputEl = document.querySelector('#validation-input');
// console.log(inputEl);

inputEl.addEventListener('blur', () => {
    if (inputEl.value.length == inputEl.dataset.length) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
        return;
    }
    return inputEl.classList.add('invalid');
})

