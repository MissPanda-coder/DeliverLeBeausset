// HAMBURGER
import { toggleMenu } from "./js/hamburger.js";
toggleMenu();

//EYE PASSWORD
document.querySelectorAll(".toggle-password").forEach(function (element) {
  element.addEventListener("click", function () {
    this.classList.toggle("fa-eye-slash");
    this.classList.toggle("fa-eye");
    const input = document.querySelector(".password_eye");
    if (input.getAttribute("type") === "password") {
      input.setAttribute("type", "text");
    } else {
      input.setAttribute("type", "password");
    }
  });
});

// LOG IN
import { displayLogin } from "./js/logIn.js";
document.querySelector(".login_button").addEventListener("click", function () {
  displayLogin();
});

//FORGOT PASSWORD
import { displayForgot } from "./js/forgot.js";
document
  .querySelector(".forgot_password")
  .addEventListener("click", function () {
    displayForgot();
  });

//REGISTER
import { displayRegister } from "./js/register.js";
document
  .querySelector(".register_button")
  .addEventListener("click", function () {
    displayRegister();
  });

//PRODUCTS

function init() {
  // Récupération des données passées en paramètre dans l'URL
  const params = new URLSearchParams(window.location.search);
  const jsonData = params.get("data");
  const data = JSON.parse(decodeURIComponent(jsonData));
  console.log(data);
  // Appel de la fonction pour afficher les produits
  displayProducts(data);

  // Ajout des événements aux boutons
  let iddepartmentLinks = document.querySelectorAll("button");

  iddepartmentLinks.forEach((e) => {
    e.addEventListener("click", () => {
      let iddepartment = e.value;
      let url = `http://localhost:3003/get/products/${iddepartment}`;
      fetchProducts(url);
    });
  });

  function displayProducts(products) {
    const container = document.querySelector(".product-container");

    products.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("card", "mb-3");

      const leftColumn = document.createElement("div");
      leftColumn.classList.add(
        "col-md-3",
        "text-center",
        "d-flex",
        "align-items-center"
      );

      const image = document.createElement("img");
      image.classList.add("card-img-top");
      image.src = `./public/img/products/${product.productsimg}`;
      image.alt = product.Productsname;
      image.style.maxWidth = "80px";
      leftColumn.appendChild(image);

      const otherColumn = document.createElement("div");
      otherColumn.classList.add("col-md-9");

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const title = document.createElement("h5");
      title.classList.add("card-title");
      title.textContent = product.productsname;
      cardBody.appendChild(title);

      const shop = document.createElement("p");
      shop.classList.add("card-text");
      shop.textContent = `${product.shopsName}`;
      cardBody.appendChild(shop);

      const weight = document.createElement("p");
      weight.classList.add("card-text");
      weight.textContent = `${product.productsweight} ${product.unitsname}`;
      cardBody.appendChild(weight);

      const description = document.createElement("p");
      description.classList.add("card-text");
      description.textContent = product.productsdescription;
      cardBody.appendChild(description);

      const price = document.createElement("p");
      price.classList.add("card-text");
      price.textContent = `${product.productsprice} ${product.euros}`;
      cardBody.appendChild(price);

      rightColumn.appendChild(cardBody);

      card.appendChild(leftColumn);
      card.appendChild(rightColumn);

      container.appendChild(card);

      // Création de la colonne pour le panier
      const rightColumn = document.createElement("div");
      rightColumn.classList.add("col-md-3", "cart-container");

      // Création de la div du panier
      const cart = document.createElement("div");
      cart.classList.add("cart");

      const cartIcon = document.createElement("button");
      cartIcon.classList.add("cart-icon");
      cartIcon.innerHTML = '<img src="./public/img/panier.png"></i>';
      cart.appendChild(cartIcon);

      const cartActions = document.createElement("div");
      cartActions.classList.add("cart-actions", "hidden");

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-icon");
      deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
      cartActions.appendChild(deleteButton);

      const itemQuantity = document.createElement("input");
      itemQuantity.classList.add("item-quantity");
      itemQuantity.type = "number";
      itemQuantity.value = "1";
      itemQuantity.min = "1";
      cartActions.appendChild(itemQuantity);

      const plusButton = document.createElement("button");
      plusButton.classList.add("plus-icon");
      plusButton.innerHTML = '<i class="fa fa-plus"></i>';
      cartActions.appendChild(plusButton);

      const minusButton = document.createElement("button");
      minusButton.classList.add("minus-icon", "hidden");
      minusButton.innerHTML = '<i class="fa fa-minus"></i>';
      cartActions.appendChild(minusButton);

      cart.appendChild(cartActions);
      rightColumn.appendChild(cart);

      // Ajout des colonnes à la carte
      card.appendChild(leftColumn);
      card.appendChild(middleColumn);
      card.appendChild(rightColumn);

      // Ajout de la carte au conteneur
      container.appendChild(card);
    });
  }
}

function fetchProducts(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Affichage des produits récupérés
      displayProducts(data);
      // Redirection vers products.php avec les données récupérées en tant que paramètres de requête
      const jsonData = JSON.stringify(data);
      const encodedData = encodeURIComponent(jsonData);
      window.location.href = `products.php?data=${encodedData}`;
    })
    .catch((error) => console.error("Error:", error));
}

document.addEventListener("DOMContentLoaded", function () {
  const pageName = document.getElementsByTagName("main")[0].id;
  if (pageName == "products") {
    init();
  }
});
