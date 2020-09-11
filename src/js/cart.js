"use strict";

function renderProductMy(title, price, img = '../src/assets/imgs/error.png') { //если изображение отстутствует
    return `<div class="product-item">
                <img class="product-img" src = ${img}>
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить в корзину</button>
              </div>`;
}


class Cart {
    constructor() {
        this.items = [];
    }

    _fillCart(items) {
        items.forEach(item => {
            this.items.push(new ItemCart(item.id, item.title, item.price, item.quantity));
        });
    };

    _render(items) {
        items.forEach(item => {
            document.querySelector('.som__products').innerHTML += renderProductMy(item.title, item.price, item.img);
        });
    }

    _addItem(item) {
        this.items.push(item);
    }

    get totalPrice() {
        let totalPrice = null;
        this.items.forEach(item => {
            totalPrice += item.price * item.quantity;
        });
        return totalPrice;
    };

    get totalQuantity() {
        let totalQuantity = null;
        this.items.forEach(item => {
            totalQuantity += item.quantity;
        });
        return totalQuantity;
    };

    showCart() {
        console.log(`${myCart.totalPrice} за ${myCart.totalQuantity} товара`);
    }
}

class ItemCart {
    constructor(id, title, price, quantity = +prompt('Сколько товара?')) {
        // this.img = item.img;
        this.id = id;
        this.title = title;
        this.price = price;
        this.quantity = quantity;
    }

    render(item) {
        return `<div class="product-item">
              <img class="product-img" src = ${item.img}>
              <h3>${item.title}</h3>
              <p>${item.price}</p>
              <button class="by-btn">Добавить в корзину</button>
            </div>`;
    }
}

const myCart = new Cart();

let fillCart = new Promise((resolve, reject) => {
    setTimeout(() => {
        const items = [{
                id: 1,
                title: 'Notebook',
                price: 20000,
                img: '../src/assets/imgs/notebook.jpg',
                quantity: 1,
            },
            {
                id: 2,
                title: 'Mouse',
                price: 1500,
                quantity: 1,
            },
            {
                id: 3,
                title: 'Keyboard',
                price: 5000,
                quantity: 1,
            },
            {
                id: 4,
                title: 'Gamepad',
                price: 4500,
                quantity: 1,
            },
        ];
        console.log(items);
        resolve(items);
    }, 4000);

});

fillCart
    .then(
        items => {
            myCart._fillCart(items);
            myCart._render(items);
            myCart.showCart();
        }
    )
   





// myCart._addItem(new ItemCart(5, 'desk', 1500, 3));
// myCart.showCart();