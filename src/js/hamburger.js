class Hamburger {
    constructor(size) {
        this.size = size;
    }

    addStuffing(stuffing) {
        this.stuffing = stuffing;
    }

    removeStuffing(stuffing) {}

    addTopping(topping) {
        this.topping = topping;
    }

    removeTopping(topping) {}

    totalSum(){

    }
}

let cart = [];
const buttonNew = document.querySelector('.new-humburger');
const buttonStuffing = document.querySelectorAll('.stuffing');
const buttonTopping = document.querySelectorAll('.topping');

buttonStuffing.forEach(button => {
    button.addEventListener('click', () => {
        cart.addStuffing(button.dataset.stuffing);
    });
});

buttonTopping.forEach(button => {
    button.addEventListener('click', () => {
        cart.addStuffing(button.dataset.topping);
    });
});

buttonTopping.addEventListener('click', () => {
    cart.addTopping(buttonTopping.dataset.topping)
});

buttonNew.addEventListener('click', () => {
    cart = new Hamburger(prompt('Какой гамбургер большой (Б) или маленький (М)?'));
    buttonNew.style.display = 'none';

    buttonStuffing.forEach(button => {
        button.style.display = 'inline-block';
    });

    buttonTopping.style.display = 'block';

    console.log(cart);
}); 