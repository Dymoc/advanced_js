"use strict";

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
        ];
        console.log(items);
        resolve(items);
    }, 4000);

});

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

    _render(items) {
        items.forEach(item => {
            document.querySelector('.som__products').innerHTML += renderProductMy(item.title, item.price, item.img);
        });
    }

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

    _render() {
        return `<div class="product-item">
              <img class="product-img" src = ${img}>
              <h3>${title}</h3>
              <p>${price}</p>
              <button class="by-btn">Добавить в корзину</button>
            </div>`;
    }
}

const myCart = new Cart();

fillCart
    .then(
        items => {
            myCart._fillCart(items);
            myCart._render(items);
            myCart.showCart();
        }
    )

// let content = new Promise((resorve, reject) => {
//     myCart._fillCart(items);
// })

// myCart._fillCart(content(items));

myCart.showCart();


// myCart._addItem(new ItemCart(5, 'desk', 1500, 3));
// myCart.showCart();