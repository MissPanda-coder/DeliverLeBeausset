const params = new URLSearchParams(window.location.search);
const jsonData = params.get("data");
const data = JSON.parse(decodeURIComponent(jsonData));

// function displayProducts(products) {
//   const container = document.querySelector(".product-container");

//   products.forEach((product) => {
//     const card = document.createElement("div");
//     card.classList.add("card", "mb-3", "product-card");

//     const imageColumn = document.createElement("div");
//     imageColumn.classList.add("col-md-4");

//     const image = document.createElement("img");
//     image.classList.add("card-img-top", "product-image");
//     image.src = `./public/img/products/${product.productsimg}`;
//     image.alt = product.Productsname;
//     image.style.maxWidth = "80px";
//     imageColumn.appendChild(image);

//     card.appendChild(imageColumn);

//     // Colonne pour les détails du produit
//     const productColumn = document.createElement("div");
//     productColumn.classList.add("col-md-6", "product-details"); // Réduire la largeur de la colonne

//     const title = document.createElement("h5");
//     title.classList.add("card-title");
//     title.textContent = product.productsname;
//     productColumn.appendChild(title);

//     const shop = document.createElement("p");
//     shop.textContent = `${product.shopsName}`;
//     productColumn.appendChild(shop);

//     const weight = document.createElement("p");
//     weight.textContent = `${product.productsweight} ${product.unitsname}`;
//     productColumn.appendChild(weight);

//     const description = document.createElement("p");
//     description.textContent = product.productsdescription;
//     productColumn.appendChild(description);

//     const price = document.createElement("p");
//     price.textContent = `${product.productsprice} ${product.euros}`;
//     productColumn.appendChild(price);

//     card.appendChild(productColumn);

//     const cartColumn = document.createElement("div");
//     cartColumn.classList.add("col-md-2", "cart-container");
//     const addToCartButton = document.createElement("button");
//     addToCartButton.classList.add("btn-cart", "btn-primary");
//     addToCartButton.textContent = "Ajouter au panier";

//     cartColumn.appendChild(addToCartButton);
//     card.appendChild(cartColumn);
//     container.appendChild(card);
//   });
// }

// displayProducts(data);

// Fonction pour afficher les produits
function displayProducts(products) {
  const container = document.querySelector(".row");
  let cardCount = 0; // Compteur de cartes dans la rangée actuelle

  products.forEach((product) => {
    if (cardCount % 6 === 0) {
      // Crée une nouvelle rangée toutes les 6 cartes
      const row = document.createElement("div");
      row.classList.add("row");
      container.appendChild(row);
    }

    // Création de la carte de produit
    const card = document.createElement("div");
    card.classList.add("product-card", "mb-3", "col-md-1");

    // Titre du produit
    const titleDiv = document.createElement("div");
    titleDiv.id = "card-div-title";
    titleDiv.classList.add("text-secondary");
    const titleText = document.createTextNode(
      `${product.shopsName} - ${product.productsname}`
    );
    titleDiv.appendChild(titleText);
    card.appendChild(titleDiv);

    // Image du produit
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("card-div-img");
    const image = document.createElement("img");
    image.src = `./public/img/products/${product.productsimg}`;
    image.alt = product.Productsname;
    imageDiv.appendChild(image);
    card.appendChild(imageDiv);

    // Poids du produit
    const weightDiv = document.createElement("div");
    weightDiv.id = "card-div-weight"; 
    weightDiv.classList.add("text-secondary");
    const weightText = document.createTextNode(
      `Poids: ${product.productsweight} ${product.unitsname}`
    );
    weightDiv.appendChild(weightText);
    card.appendChild(weightDiv);

    // Prix du produit
    const priceDiv = document.createElement("div");
    priceDiv.id = "card-div-price";
    priceDiv.classList.add("text-secondary");
    const priceText = document.createTextNode(
      `${product.productsprice} ${product.euros}`
    );
    priceDiv.appendChild(priceText);
    card.appendChild(priceDiv);

    // Bouton
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("card-div-button");
    const button = document.createElement("button");
    button.classList.add("cart-button");
    const img = document.createElement("img");
    img.src = "./public/img/outils/panierb.png"; 
    img.alt = "Bouton panier pour ajouter l'article au panier"; 
    button.appendChild(img);
    buttonDiv.appendChild(button);
    card.appendChild(buttonDiv);

    // Ajout de la carte à la rangée actuelle
    const currentRow = container.lastChild;
    currentRow.appendChild(card);

    cardCount++;
  });
}

displayProducts(data);
