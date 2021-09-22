const categoriesListEl = document.querySelector('#categories');
const categoriesListItemEl = categoriesListEl.querySelectorAll('.item');
const titleEl = document.querySelectorAll('h2');


const numberOfListItems = () => {
    console.log(`В списке ${categoriesListItemEl.length} категории.`)
} 

numberOfListItems();

const CategoryNameAndNumberOfItem = () => {
    for (let i = 0; i < titleEl.length; i += 1) {
        console.log(`Категория: ${titleEl[i].textContent}`);
        console.log(`Количество элементов: ${categoriesListItemEl[i].querySelectorAll('li').length}`)
    }
}

CategoryNameAndNumberOfItem();

