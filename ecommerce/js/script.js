// Product Data
const products = [
  {
    id: 1,
    name: "Classic Jacket",
    price: 1999,
    img: "https://picsum.photos/300/400?1"
  },
  {
    id: 2,
    name: "Denim Shirt",
    price: 1499,
    img: "https://picsum.photos/300/400?2"
  },
  {
    id: 3,
    name: "Sneakers",
    price: 2499,
    img: "https://picsum.photos/300/400?3"
  },
  {
    id: 4,
    name: "Women Dress",
    price: 1799,
    img: "https://picsum.photos/300/400?4"
  },
  {
    id: 5,
    name: "Casual Hoodie",
    price: 1599,
    img: "https://picsum.photos/300/400?5"
  },
  {
    id: 6,
    name: "Leather Bag",
    price: 2299,
    img: "https://picsum.photos/300/400?6"
  }
];

// Render Products
function renderProducts() {
  const productList = document.getElementById("product-list");

  if (!productList) return;

  productList.innerHTML = products.map(product => `
    <div class="card">
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button class="btn" onclick="addToCart(${product.id})">
        Add to Cart
      </button>
    </div>
  `).join("");
}

// Add to Cart
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const selectedProduct = products.find(product => product.id === id);

  cart.push(selectedProduct);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product added to cart!");
}

// Render Cart
function renderCart() {
  const cartItems = document.getElementById("cart-items");
  const totalPrice = document.getElementById("total");

  if (!cartItems) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
    totalPrice.innerText = "";
    return;
  }

  cartItems.innerHTML = cart.map((item, index) => `
    <div class="item">
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
      <button class="btn" onclick="removeFromCart(${index})">
        Remove
      </button>
    </div>
  `).join("");

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  totalPrice.innerText = "Total: ₹" + total;
}

// Remove from Cart
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));

  renderCart();
}

// Run Functions
renderProducts();
renderCart();