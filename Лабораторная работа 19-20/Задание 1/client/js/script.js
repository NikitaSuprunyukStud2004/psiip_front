const productsPath = './json/products.json';

document.addEventListener('DOMContentLoaded', () => {
    fetch(productsPath)
      .then(response => response.json())
      .then(products => {
        displayProducts(products);
      });
  });
  
  const cart = [];
  
  function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = products.map(product => `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>Цена: $${product.price}</p>
        <button onclick="addToCart(${product.id})">Добавить в корзину</button>
      </div>
    `).join('');
  }
  
  function addToCart(productId) {
    fetch(productsPath)
      .then(response => response.json())
      .then(products => {
        const product = products.find(p => p.id === productId);
        const cartItem = cart.find(item => item.id === productId);
  
        if (cartItem) {
          cartItem.quantity++;
        } else {
          cart.push({ ...product, quantity: 1 });
        }
  
        updateCartDisplay();
      });
  }
  
  function updateCartDisplay() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
  
    cartItemsDiv.innerHTML = cart.map(item => `
      <div>
        ${item.name} - ${item.quantity} x $${item.price} = $${(item.quantity * item.price).toFixed(2)}
        <button onclick="removeFromCart(${item.id})">Удалить</button>
      </div>
    `).join('');
  
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotal.textContent = `Итого: $${total.toFixed(2)}`;
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  }
  
  function removeFromCart(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex !== -1) {
      cart.splice(itemIndex, 1);
    }
    updateCartDisplay();
  }  