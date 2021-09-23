const refs = {
    inputEl: document.querySelector('#name-input'),
    labelEl: document.querySelector('#name-output'),
}

refs.inputEl.addEventListener('input', (event) => {
    if (event.currentTarget.value !== '') {
        refs.labelEl.textContent = event.currentTarget.value;
    }
    
    else {
        refs.labelEl.textContent = 'незнакомец'
    };
});