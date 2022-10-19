const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = [];

for (const ingredient of ingredients) {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add('item');
  elements.push(ingredientEl);
}

// console.log(elements);

const ingredientsEl = document.querySelector('#ingredients');
// console.log(ingredientsEl);
ingredientsEl.append(...elements);