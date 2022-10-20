const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');
const headEl = document.querySelector('head');
// console.log(headEl)

const elements = images.map(image => {
  return `<li class="gallery-item"><img src=${image.url} alt=${image.alt} width="500"></li> `
}).join('')

galleryEl.insertAdjacentHTML('afterbegin', elements);
headEl.insertAdjacentHTML('beforeend', '<style>.gallery {display: flex;justify-content:center;align-items:baseline;gap:30px;list-style:none}</style>');

// const elements = images.map(image => {
//   const galleryItem = document.createElement('li');
//   const galleryImage = document.createElement('img');

//   galleryItem.append(galleryImage);

//   galleryImage.setAttribute('src', image.url);
//   galleryImage.setAttribute('alt', image.alt);
//   galleryImage.setAttribute('width', '500');

//   return galleryItem;
// })

// console.log(elements);
// galleryEl.append(...elements);
