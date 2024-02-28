
// HAMBURGER
import { toggleMenu } from './js/hamburger.js';
toggleMenu();

//EYE PASSWORD
document.querySelectorAll(".toggle-password").forEach(function(element) {
    element.addEventListener("click", function() {
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
import { displayLogin } from './js/login.js';
document.querySelector(".login_button").addEventListener("click", function() {
    displayLogin(); 
});


//FORGOT PASSWORD
import { displayForgot } from './js/forgot.js';
document.querySelector(".forgot_password").addEventListener("click", function() {
    displayForgot(); 
})


//REGISTER
import { displayRegister } from './js/register.js';
document.querySelector(".register_button").addEventListener("click", function() {
    displayRegister(); 
})

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
  
    iddepartmentLinks.forEach(e => {
        e.addEventListener('click', () => {
            let iddepartment = e.value;
            let url = `http://localhost:3003/get/products/${iddepartment}`;
            fetchProducts(url);
        });
    });

    function displayProducts(products) {
        const container = document.querySelector('.product-container');

        products.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('card', 'mb-3');

            const leftColumn = document.createElement('div');
            leftColumn.classList.add('col-md-3', 'text-center', 'd-flex', 'align-items-center');

            const image = document.createElement('img');
            image.classList.add('card-img-top');
            image.src = `./public/img/products/${product.productsimg}`;
            image.alt = product.Productsname;
            image.style.maxWidth = '80px'; 
            leftColumn.appendChild(image);

            const rightColumn = document.createElement('div');
            rightColumn.classList.add('col-md-9');

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const title = document.createElement('h5');
            title.classList.add('card-title');
            title.textContent = product.productsname;
            cardBody.appendChild(title);

            const shop = document.createElement('p');
            shop.classList.add('card-text');
            shop.textContent = `${product.shopsName}`;
            cardBody.appendChild(shop);

            const weight = document.createElement('p');
            weight.classList.add('card-text');
            weight.textContent =  `${product.productsweight} ${product.unitsname}`;
            cardBody.appendChild(weight);

            const description = document.createElement('p');
            description.classList.add('card-text');
            description.textContent = product.productsdescription;
            cardBody.appendChild(description);

            const price = document.createElement('p');
            price.classList.add('card-text');
            price.textContent = `${product.productsprice} ${product.euros}`;
            cardBody.appendChild(price);

            rightColumn.appendChild(cardBody);

            card.appendChild(leftColumn);
            card.appendChild(rightColumn);

            container.appendChild(card);
        });
    }

    function fetchProducts(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Affichage des produits récupérés
                displayProducts(data);
                // Redirection vers products.php avec les données récupérées en tant que paramètres de requête
                const jsonData = JSON.stringify(data);
                const encodedData = encodeURIComponent(jsonData);
                window.location.href = `products.php?data=${encodedData}`;
            })
            .catch(error => console.error("Error:", error));
    }
}

document.addEventListener('DOMContentLoaded', function() {
    init();
});
