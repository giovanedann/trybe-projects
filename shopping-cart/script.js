// Selectors
const cartItemClass = '.cart__items';
const totalPriceClass = '.total-price';
const itemSection = document.querySelector('.items');
const cartItems = document.querySelector(cartItemClass);
const emptyCart = document.querySelector('.empty-cart');

// Project built-in codes
function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

// Function to update the cart items
const updateCartItems = () => saveCartItems(document.querySelector(cartItemClass).innerHTML);

// Function to update the cart value on item add or remove
const updateCartValue = () => {
  const priceContainer = document.querySelector('.price-container');
  localStorage.setItem('cartPrice', priceContainer.innerHTML);
};

// Function to remove item and change the tototal price - Implemented by me
function cartItemClickListener(event) {
  const totalPrice = document.querySelector(totalPriceClass);
  const itemPrice = event.target.innerText.split('$').pop();
  totalPrice.innerText = parseFloat((Number(totalPrice.innerText) - Number(itemPrice)).toFixed(2));
  event.target.remove();
  updateCartItems();
}

function createCartItemElement({ sku, name, salePrice, image }) {
  const img = createProductImageElement(image);
  const div = document.createElement('div');
  div.className = 'cart__item';
  div.innerText = `${sku} \n${name} \nR$${salePrice}`;
  div.addEventListener('click', cartItemClickListener);
  div.appendChild(img);
  return div;
}

// Function to create cart item - Implemented by me
const createCartItem = async (productId) => {
  cartItems.appendChild(createCustomElement('p', 'loading', 'Carregando...'));
  const item = await fetchItem(productId);
  cartItems.querySelector('.loading').remove();
  const [sku, name, salePrice, image] = [item.id, item.title, Number(item.price), item.thumbnail];
  const cartElement = createCartItemElement({ sku, name, salePrice, image });
  cartItems.appendChild(cartElement);
  updateCartItems();
  updateCartValue();

  const totalPrice = document.querySelector(totalPriceClass);
  totalPrice.innerText = parseFloat((Number(totalPrice.innerText) + salePrice).toFixed(2));
};

// Functions to add the event listener of the buttons and list items on window load - Implemented by me

// Button listeners
const addButtonListeners = () => {
  document.querySelectorAll('.item__add').forEach((item) => item.addEventListener('click', (e) => {
    const id = getSkuFromProductItem(e.target.parentNode);
    createCartItem(id);
    updateCartValue();
  }));
};

// List item listeners
const addListItemListeners = () => {
  document.querySelectorAll('.cart__item').forEach((listItem) => {
    listItem.addEventListener('click', cartItemClickListener);
  });
};

// Function to clear the cart
emptyCart.addEventListener('click', () => {
  cartItems.innerHTML = '';
  document.querySelector(totalPriceClass).innerText = 0;
  updateCartItems();
  updateCartValue();
});

// Function to fill the items section - Implemented by me
const fillItemsSection = async (product) => {
  itemSection.appendChild(createCustomElement('h2', 'loading', 'Carregando...'));
  const products = await fetchProducts(product);
  itemSection.querySelector('.loading').remove();
  products.results.forEach((item) => {
    const [sku, name, image] = [item.id, item.title, item.thumbnail];
    itemSection.appendChild(createProductItemElement({ sku, name, image }));
  });

  addButtonListeners();
};

// Function to load the price of the local storage cart
const getCartPrice = () => {
  const cartPrice = document.querySelector('.total-price');
  const updatedCartItems = document.querySelector(cartItemClass);
  updatedCartItems.innerHTML = localStorage.getItem('cartItems');

  const cartSavedPrice = Array.from(cartItems.children).reduce((totalPrice, listItem) => {
    const returnedPrice = totalPrice;
    const price = Number(listItem.innerText.split('$').pop());
    return returnedPrice + price;
  }, 0);

  cartPrice.innerText = parseFloat(cartSavedPrice.toFixed(2));
};

window.onload = async () => {
  fillItemsSection('computador');
  const localStorageCart = getSavedCartItems();
  cartItems.innerHTML = localStorageCart;
  getCartPrice();
  addButtonListeners();
  addListItemListeners();
};
