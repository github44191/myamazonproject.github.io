
export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
  cart = [
    {
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1'
    },
    {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1,
      deliveryOptionId: '2'
    }
  ];
}

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addCartQuantity(productId,select) {
  
  let itemQuantity = Number(select.value);
  select.value = 1;
  let matchingItem;
  cart.forEach((item) => {
    if (productId === item.productId) {
      matchingItem = item;
    }
  });
  if (matchingItem) {
    matchingItem.quantity += itemQuantity;
  }
  else {
    cart.push({
    productId: productId,
    quantity: itemQuantity,
    deliveryOptionId: '1'
    });
  }
  saveToStorage();
}

export function removeFromCart(productId) {
  let newArray = [];

  cart.forEach(cartItem => {
    if (cartItem.productId !== productId) {
      newArray.push(cartItem);
    }
  });
  cart = newArray;

  saveToStorage();
}

export function updateCartQuantity() {

  let cartQuantity = 0;
    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });

  return cartQuantity;   
}

export function updateQuantity(productId,newQuantity) {
  cart.forEach(cartItem => {
    if (cartItem.productId === productId) {
      cartItem.quantity = newQuantity;
    }
  });

  saveToStorage();
  return newQuantity;
}

export function updateDeliveryOptions(productId,deliveryOptionId) {

  let matchingItem;

  cart.forEach(cartItem => {
    if (cartItem.productId === productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
}