const params = new URLSearchParams(window.location.search);
const jsonData = params.get("data");
const data = JSON.parse(decodeURIComponent(jsonData));
console.log(data);

function displayCart(products) {
  const container = document.querySelector(".product-container");

  products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card", "mb-3", "product-card");

    const imageColumn = document.createElement("div");
    imageColumn.classList.add("col-md-4");

    const image = document.createElement("img");
    image.classList.add("card-img-top", "product-image");
    image.src = `./public/img/products/${product.productsimg}`;
    image.alt = product.Productsname;
    image.style.maxWidth = "80px";
    imageColumn.appendChild(image);

    card.appendChild(imageColumn);

    // Colonne pour les détails du produit
    const productColumn = document.createElement("div");
    productColumn.classList.add("col-md-6", "product-details"); // Réduire la largeur de la colonne

    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = product.productsname;
    productColumn.appendChild(title);

    const shop = document.createElement("p");
    shop.textContent = `${product.shopsName}`;
    productColumn.appendChild(shop);

    const weight = document.createElement("p");
    weight.textContent = `${product.productsweight} ${product.unitsname}`;
    productColumn.appendChild(weight);

    const description = document.createElement("p");
    description.textContent = product.productsdescription;
    productColumn.appendChild(description);

    const price = document.createElement("p");
    price.textContent = `${product.productsprice} ${product.euros}`;
    productColumn.appendChild(price);

    card.appendChild(productColumn);

    const cartColumn = document.createElement("div");
    cartColumn.classList.add("col-md-2", "cart-container");
    const addToCartButton = document.createElement("button");
    addToCartButton.classList.add("btn-cart", "btn-primary");
    addToCartButton.textContent = "Ajouter au panier";
    addToCartButton.addEventListener("click", () => {});

    cartColumn.appendChild(addToCartButton);

    card.appendChild(cartColumn);

    container.appendChild(card);
  });
}

displayProducts(data);
