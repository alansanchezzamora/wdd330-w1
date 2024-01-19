//used to populate cart/index.html data

import { getLocalStorage, renderCartCount } from './utils.mjs';

//gets local storage, maps it to the template then populates the htm using the template literal
function renderCartContents() {
  const cartItems = getLocalStorage('so-cart');
  //fixing the error on cart page when cart is empty so so-cart is null
  if (cartItems !== null && cartItems !== undefined) {
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    document.querySelector('.product-list').innerHTML = htmlItems.join('');
  }
}

//template literal
function cartItemTemplate(item) {
  const newItem = `<li class='cart-card divider'>
  <a href='#' class='cart-card__image'>
    <img
      src='${item.Image}'
      alt='${item.Name}'
    />
  </a>
  <a href='#'>
    <h2 class='card__name'>${item.Name}</h2>
  </a>
  <p class='cart-card__color'>${item.Colors[0].ColorName}</p>
  <p class='cart-card__quantity'>qty: 1</p>
  <p class='cart-card__price'>$${item.FinalPrice}</p>
</li>`;

  return newItem;
}
//populate the cart info on cart page
renderCartContents();
//gets the Cart Count for the backpack superscript
renderCartCount();
