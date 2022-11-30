const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsListEl = document.querySelector("#ingredients");

const makeIngredientsList = elements => {
    return elements.map(element => {
        const itemEl = document.createElement("li");
        itemEl.classList.add('item');
        itemEl.textContent = element;
        return itemEl;
    });
}
const elements = makeIngredientsList(ingredients);
ingredientsListEl.append(...elements);

console.log(ingredientsListEl);
