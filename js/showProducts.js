const params = new URLSearchParams(window.location.search);
const jsonData = params.get("data");
const data = JSON.parse(decodeURIComponent(jsonData));


// Fonction pour afficher les produits
function displayProducts(products) {
  const row = document.getElementById("product-row");
  let cardCount = 0; // Compteur de cartes dans la rangée actuelle

  products.forEach((product) => {
    if (cardCount % 6 === 0) {
      // Crée une nouvelle rangée toutes les 6 cartes
      const newrow = document.createElement("div");
      newrow.classList.add("row", "align-items-center");
      row.appendChild(newrow);
    }

    // Création de la carte de produit
    const card = document.createElement("div");
    card.classList.add("product-card", "mb-5", "col-md-1");

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
    const currentRow = row.lastChild;
    currentRow.appendChild(card);

    cardCount++;
  });
}

displayProducts(data);
