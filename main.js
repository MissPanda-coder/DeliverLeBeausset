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
  let iddepartmentLinks = document.querySelectorAll(".categories_button");
  
  iddepartmentLinks.forEach(e => {
      e.addEventListener('click', () => {
        let iddepartment = e.value
        console.log(iddepartment)
          
          let url = `http://localhost:3003/get/products/${iddepartment}`;
          fetchProducts(url);
      });
  });
}

function fetchProducts(url) {
  fetch(url)
      .then(response => response.json())
      .then(data =>{  
      const jsonData = JSON.stringify(data);
      const encodedData = encodeURIComponent(jsonData);
      window.location.href = `products?data=${encodedData}`;})
      .catch(error => console.error("Error:", error));
}


init();

// document.addEventListener("DOMContentLoaded", function () {
//   const pageName = document.getElementsByTagName("main")[0].id;
//   if (pageName == "products") {
//     init();
//   }
// });
