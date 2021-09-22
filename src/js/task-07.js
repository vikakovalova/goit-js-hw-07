const rangeInputEl = document.querySelector('#font-size-control');
const labelEl = document.querySelector('#text');

rangeInputEl.addEventListener('input', (event) => {
    labelEl.style.fontSize = `${event.currentTarget.value}px`;
})