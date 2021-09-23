const counter = {
    counterValue: 0,
    increment() {
        this.counterValue += 1;
    },
    decrement() {
        this.counterValue -= 1;
    },
};

const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const currentValueEl = document.querySelector('#value');

decrementBtnEl.addEventListener('click', () => {
    counter.decrement();
    currentValueEl.textContent = counter.counterValue;
});
incrementBtnEl.addEventListener('click', () => {
    counter.increment();
    currentValueEl.textContent = counter.counterValue;
});
