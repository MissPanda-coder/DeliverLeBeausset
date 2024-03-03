const params = new URLSearchParams(window.location.search);
const jsonData = params.get("data");
const data = JSON.parse(decodeURIComponent(jsonData));

function displayProducts(products) {
  const productContainer = document.getElementById("product-container");

  for (let i = 0; i < products.length; i += 4) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = i; j < Math.min(i + 4, products.length); j++) {
      const product = products[j];
      const card = createProductCard(product);
      row.appendChild(card);
    }

    productContainer.appendChild(row);
  }
}

function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("product-card", "mb-5", "col-md-3");

  card.innerHTML = `
    
      <div id="card-div-title">
          <p class="text-secondary">${product.shopsName} - ${product.productsname}</p>
      </div>
          <div class="card-div-img">
              <img src="./public/img/products/${product.productsimg}" alt="${product.productsname}">
          </div>
          <div id = "card-div-weight">
          <p class="text-secondary">${product.productsweight} ${product.unitsname}</p>
          </div>
          <div id = "card-div-price">
          <p class="text-secondary">${product.productsprice} ${product.euros}</p>
          </div>
          <div id = "card-div-button">
          <button class="btn-card">Ajouter au panier</button>
          </div>
      
  `;
  const addToCartButton = card.querySelector(".btn-card");
  addToCartButton.addEventListener("click", function () {
    addToCart(product.idproducts);
  });

  return card;
}

displayProducts(data);

let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

function addToCart(idproducts) {
  console.log("Data:", data);

  const product = data.find((product) => product.idproducts === idproducts);

  if (product) {
    const existingItem = cart.find((item) => item.id === idproducts);

    if (existingItem) {
      changeNumberOfUnits("plus", idproducts);
    } else {
      cart.push({
        id: product.idproducts,
        shop: product.shopsName,
        name: product.productsname,
        price: product.productsprice,
        unitprice: product.euros,
        img: `./public/img/products/${product.productsimg}`,
        weight: product.productsweight,
        unitsname: product.unitsname,
        numberOfUnits: 1,
      });
    }

    updateCart();
  } else {
    console.error("Product not found");
  }
}

function updateCart() {
  renderCartItems();
  renderSubtotal();

  localStorage.setItem("CART", JSON.stringify(cart));
}

function renderSubtotal() {
  let totalPrice = 0,
    totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });

  const totalEl = document.querySelector(".total");
  totalEl.innerHTML = `Total (${totalItems} items): $${totalPrice.toFixed(2)}`;
}

function renderCartItems() {
  const cartContainer = document.getElementById("cart-container");
  const cartItemsEl = document.createElement("div");
  cartItemsEl.classList.add("cart-items");

  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsEl.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cart.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");

      cartItem.innerHTML = `
        <div class="item-info" onclick="removeItemFromCart(${item.id})">
            <img src="./public/img/products/${item.img}" alt="${item.name}">
            <h4>${item.name}</h4>
           
        </div>
        <div class="unit-price">
            <small>$</small>${item.price}
        </div>
        <div class="units">
            <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
            <div class="number">${item.numberOfUnits}</div>
            <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>           
        </div>
      `;

      cartItemsEl.appendChild(cartItem);
    });
  }

  cartContainer.appendChild(cartItemsEl);
}

function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);

  updateCart();
}

function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.instock) {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });

  updateCart();
}
