const valueEl = document.querySelector('#value');
// console.log(valueEl);
const btnIncr = document.querySelector('[data-action="increment"]');
// console.log(btnIncr);
const btnDecr = document.querySelector('[data-action="decrement"]');
// console.log(btnDecr);

const counterValue = {
    value: 0,

    increment() {
        this.value += 1;
    },

    decrement() {
        this.value -= 1;
    },
};

btnIncr.addEventListener('click', () => {
    console.log('Клікнули на збільшення');
    counterValue.increment();
    console.log(counterValue);
    valueEl.textContent = counterValue.value;
})

btnDecr.addEventListener('click', () => {
    console.log('Клікнули на зменшення');
    counterValue.decrement();
    console.log(counterValue);
    valueEl.textContent = counterValue.value;
})


