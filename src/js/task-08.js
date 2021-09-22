const refs = {
    wrapperEl: document.querySelector('#boxes'),
    inputEl: document.querySelector('input'),
    renderBtnEl: document.querySelector('[data-action="render"]'),
    destroyBtnEl: document.querySelector('[data-action="destroy"]'),
};

refs.renderBtnEl.addEventListener('click', () => {
    const createBoxes = (amount) => {
    if (amount === number) {
        amount.forEach(element => {
            const boxEl = document.createElement('div');
            boxEl[0].style.width = '30px';
            boxEl[0].style.height = '30px';
            console.log(boxEl);
        });
    }
    };
    
})