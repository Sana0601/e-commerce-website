const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 1499,
        image: "🎧"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 1999,
        image: "⌚"
    },
    {
        id: 3,
        name: "Running Shoes",
        price: 2499,
        image: "👟"
    },
    {
        id: 4,
        name: "Backpack",
        price: 999,
        image: "🎒"
    },
    {
        id: 5,
        name: "Sunglasses",
        price: 799,
        image: "🕶️"
    },
    {
        id: 6,
        name: "Camera",
        price: 3499,
        image: "📷"
    },
    {
        id: 7,
        name: "Laptop",
        price: 49999,
        image: "💻"
    },
    {
        id: 8,
        name: "Mobile Phone",
        price: 24999,
        image: "📱"
    }
];

let cart = [];

// Display products
function displayProducts() {

    const productList = document.getElementById("product-list");

    productList.innerHTML = "";

    products.forEach(product => {

        productList.innerHTML += `
            <div class="product">

                <div class="product-image">
                    ${product.image}
                </div>

                <div class="product-info">

                    <h3>${product.name}</h3>

                    <p class="price">
                        ₹${product.price}
                    </p>

                    <button class="add-btn"
                        onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>

                </div>

            </div>
        `;
    });
}

// Add product
function addToCart(id) {

    const product = products.find(p => p.id === id);

    cart.push(product);

    updateCart();

    openCart();
}

// Update cart
function updateCart() {

    const cartItems = document.getElementById("cart-items");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        cartItems.innerHTML += `
            <div class="cart-item">

                <div>
                    <strong>${item.name}</strong>
                    <p>₹${item.price}</p>
                </div>

                <button class="remove"
                    onclick="removeItem(${index})">
                    Remove
                </button>

            </div>
        `;
    });

    document.getElementById("cart-total").textContent = total;
    document.getElementById("cart-count").textContent = cart.length;
}

// Remove item
function removeItem(index) {

    cart.splice(index, 1);

    updateCart();
}

// Open cart
function openCart() {

    document.getElementById("cart").classList.add("active");
    document.getElementById("overlay").classList.add("active");
}

// Close cart
function closeCart() {

    document.getElementById("cart").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}

// Checkout
function checkout() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Order placed successfully!");

    cart = [];

    updateCart();

    closeCart();
}

displayProducts();