const categoriesEl = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesEl.children.length}`);

const categoryItemsEl = document.querySelectorAll('.item');
// console.log(categoryItemsEl);

categoryItemsEl.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
})