const products = [{
    id: 1,
    title: 'Notebook',
    price: 20000,
    img: '../src/assets/imgs/notebook.jpg',
  },
  {
    id: 2,
    title: 'Mouse',
    price: 1500,
  },
  {
    id: 3,
    title: 'Keyboard',
    price: 5000,
  },
  {
    id: 4,
    title: 'Gamepad',
    price: 4500,
  },
];


// Сокращенная версия и без запятой

function renderProductMy(title, price, img = '../src/assets/imgs/error.png') { //если изображение отстутствует
  return `<div class="product-item">
              <img class="product-img" src = ${img}>
              <h3>${title}</h3>
              <p>${price}</p>
              <button class="by-btn">Добавить в корзину</button>
            </div>`;
}

const cartButton = document.querySelector('.btn-cart')
cartButton.addEventListener('click', () => {
  products.map(item => {
    document.querySelector('.som__products').innerHTML += renderProductMy(item.title, item.price, item.img);
  });
})
// renderProducts(products);
