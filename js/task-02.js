const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');

let ingredientsItems = [];

for (let i = 0; i < ingredients.length; i += 1) {
  ingredientsItems.push(document.createElement('li'));
  ingredientsItems[i].textContent = ingredients[i];
  console.log(ingredientsItems[i]);
  ingredientsEl.append(ingredientsItems[i]);
}




