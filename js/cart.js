class Cart {
  constructor() {
    let cart = localStorage.getItem("cart);
    if (cart === null) {
      this.cart = [];
    } else {
      this.cart = JSON.parse(cart);
    }
  }

  saveCart() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  addToCart(product) {
    let foundProduct = this.cart.find((p) => p.id === product.id);
    if (foundProduct !== undefined) {
      foundProduct.quantity++;
    } else {
      product.quantity = 1;
      this.cart.push(product);
    }
    this.saveCart();
  }

  removeFromCart(product) {
    this.cart = this.cart.filter((p) => p.id !== product.id);
    this.saveCart();
  }

  changeQuantity(product, quantity) {
    let foundProduct = this.cart.find((p) => p.id === product.id);
    if (foundProduct !== undefined) {
      foundProduct.quantity += quantity;
      if (foundProduct.quantity <= 0) {
        this.removeFromCart(foundProduct);
      }
    }
    this.saveCart();
  }

  getNumberProduct() {
    let number = 0;
    for (let product of this.cart) {
      number += product.quantity;
    }
    return number;
  }

  getTotalPrice() {
    let total = 0;
    for (let product of this.cart) {
      total += product.quantity * product.price;
    }
    return total;
  }
}


function displayProductsCart(productsCart) {
  const containerCart = document.querySelector(".product-container-cart");

  productsCart.forEach((productCart) => {
    const cardCart = document.createElement("div");
    cardCart.classList.add("card", "mb-3", "product-card-cart");

    const imageColumnCart = document.createElement("div");
    imageColumnCart.classList.add("col-md-4");

    const imageCart = document.createElement("img");
    imageCart.classList.add("card-img-top", "product-image-cart");
    imageCart.src = `./public/img/products/${productCart.productsimg}`;
    imageCart.alt = productCart.Productsname;
    imageCart.style.maxWidth = "80px";
    imageColumnCart.appendChild(imageCart);

    cardCart.appendChild(imageColumnCart);

    const productColumnCart = document.createElement("div");
    productColumnCart.classList.add("col-md-6", "product-details-cart");

    const titleCart = document.createElement("h5");
    titleCart.classList.add("card-title");
    titleCart.textContent = productCart.productsname;
    productColumnCart.appendChild(titleCart);

    const shop = document.createElement("p");
    shop.textContent = `${productCart.shopsName}`;
    productColumnCart.appendChild(shop);

    const weightCart = document.createElement("p");
    weightCart.textContent = `${productCart.productsweight} ${productCart.unitsname}`;
    productColumnCart.appendChild(weightCart);

    const descriptionCart = document.createElement("p");
    descriptionCart.textContent = productCart.productsdescription;
    productColumnCart.appendChild(descriptionCart);

    const priceCart = document.createElement("p");
    priceCart.textContent = `${productCart.productsprice} ${productCart.euros}`;
    productColumnCart.appendChild(priceCart);

    cardCart.appendChild(productColumnCart);

    const cartColumnQty = document.createElement("div");
    cartColumnQty.classList.add("col-md-2", "cart-container");
    const qty = document.createElement("input");
    qty.classList.add("quantity");
    qty.value = `${productCart.quantity}`;
    const addPlus = document.createElement("button");
    addPlus.classList.add("plus");
    addPlus.textContent = "+";
    const addMinus = document.createElement("button");
    addMinus.classList.add("minus");
    addMinus.textContent = "-";

    cartColumnQty.appendChild(qty);
    cartColumnQty.appendChild(addPlus);
    cartColumnQty.appendChild(addMinus);
    cardCart.appendChild(cartColumnQty);
    containerCart.appendChild(cardCart);
  });
}
