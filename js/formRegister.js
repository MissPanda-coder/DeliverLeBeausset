const form = document.querySelector("#registerForm");
const togglePassword = document.querySelector("#togglePassword");
const nameEl = document.forms.register.name;
const firstNameEl = document.forms.register["first-name"];
const streetNumberEl = document.forms.register["street-num]"];
const streetNameEl = document.forms.register["street-name"];
const postalCodeEl = document.forms.register["postal-code"];
const cityEl = document.forms.register.city;
const phoneEl = document.forms.register.phone;
const emailEl = document.forms.register.email;
const passwordEl = document.forms.register.password;
const confPassEl = document.forms.register["password-confirm"];
const cgvEl = document.forms.register.cgv;

document.querySelectorAll(".toggle-password").forEach(function (element) {
  element.addEventListener("click", function () {
    this.classList.toggle("fa-eye-slash");
    this.classList.toggle("fa-eye");
    const input = document.querySelector("#password");
    if (input.getAttribute("type") === "password") {
      input.setAttribute("type", "text");
    } else {
      input.setAttribute("type", "password");
    }
  });
});

function isRequired(elementValue) {
  if (elementValue == "") {
    return false;
  } else {
    return true;
  }
}

function isBetween(length, min, max) {
  if (length < min || length > max) {
    return false;
  } else {
    return true;
  }
}
// J'ai besoin d'une fonction qui interdit le mot "root"et qui n'autorise que la saisie de lettre
function isNameValid(name) {
  const re = /^(?!.*\broot\b)[a-zA-Z]+$/;
  return re.test(name);
}

// Fonction qui interdit le mot "root" et n'autorise que la saisie de lettres
function isFirstNameValid(firstName) {
  const re = /^(?!.*\broot\b)[a-zA-Z]+$/;
  return re.test(firstName);
}

// Fonction qui autorise entre 1 et 4 chiffres et n'autorise que la saisie de chiffres
function isStreetNbValid(streetNb) {
  const re = /^\d{1,4}$/;
  return re.test(streetNb);
}

// Fonction qui n'autorise que le code postal 83330 et rien d'autre
function isPostalCodeValid(postalCode) {
  return postalCode === "83330";
}

// Fonction qui n'autorise que la saisie de "LE BEAUSSET" et rien d'autre
function isCityValid(city) {
  return city === "LE BEAUSSET";
}

// Fonction qui n'autorise que la saisie de chiffres pour le numéro de téléphone, qui doit commencer par 0 et comporter 10 chiffres
function isPhoneValid(phone) {
  const re = /^0\d{9}$/;
  return re.test(phone);
}

// J'ai besoin d'une fonction pour valider le format email ainsi qu'interdire les entrées de type "@yopmail.com"
function isValidEmail(email) {
  const regex =
    /^(?!.*@yopmail\.com$)[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

function isPasswordValid(password) {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
  return re.test(password);
}

//j'ai besoin d'une fonction qui permette de vérifier que la case cgv est cochée
function isCgvValid(cgvCheckbox) {
  return cgvCheckbox.checked;
}

// J'ai besoin d'une fonction qui permette d'afficher les erreurs en rouge
function showError(input, message) {
  const formField = input.parentElement;
  formField.classList.remove("success"); 
  formField.classList.add("error"); 
  const errorEl = formField.querySelector("small");
  errorEl.textContent = message;
}
// J'ai besoin d'une fonction qui permette d'afficher l'element valide en vert
function showSuccess(input) {
  const formField = input.parentElement;
  formField.classList.remove("error"); // class css
  formField.classList.add("success"); // class css
  const errorEl = formField.querySelector("small");
  errorEl.textContent = "";
}

export function checkName() {
  let valid = false;
  const min = 2,
    max = 25;
  const name = nameEl.value.trim(); // permet de supprimer les espaces
  if (!isRequired(name)) {
    showError(nameEl, "Le champ ne peut pas être vide");
  } else if (!isBetween(name.length, min, max)) {
    showError(nameEl, `Le nom doit avoir entre ${min} et ${max} caractères.`);
  } else if (!isNameValid(name)) {
    showError(
      nameEl,
      `Le nom d'utilisateur ne doit contenir que des lettres et ne peut être "root".`
    );
  } else {
    showSuccess(nameEl);
    valid = true;
  }
  return valid;
}
export function checkFirstName() {
  let valid = false;
  const min = 2,
    max = 25;
  const firstName = firstNameEl.value.trim();
  if (!isRequired(firstName)) {
    showError(firstNameEl, "Le prénom ne peut pas être vide");
  } else if (!isBetween(firstName.length, min, max)) {
    showError(
      firstNameEl,
      `Le prénom doit avoir entre ${min} et ${max} caractères.`
    );
  } else if (!isFirstNameValid(firstName)) {
    showError(
      firstNameEl,
      `Le prénom ne doit contenir que des lettres et ne peut être "root".`
    );
  } else {
    showSuccess(firstNameEl);
    valid = true;
  }
  return valid;
}

export function checkStreetNb() {
  let valid = false;
  const min = 2,
    max = 4;
  const streetNb = streetNumberEl.value.trim();
  if (!isRequired(streetNb)) {
    showError(streetNumberEl, "Le champ ne peut pas être vide");
  } else if (!isBetween(streetNb.length, min, max)) {
    showError(
      streetNumberEl,
      `Le numéro de rue doit avoir entre ${min} et ${max} caractères.`
    );
  } else if (!isStreetNbValid(streetNb)) {
    showError(
      streetNumberEl,
      `Le numéro de rue ne doit contenir que des chiffres.`
    );
  } else {
    showSuccess(streetNumberEl);
    valid = true;
  }
  return valid;
}

export function checkStreetName() {
  const street = streetNameEl.value.trim();
  if (!isRequired(street)) {
    showError(streetNameEl, "Le champ ne peut pas être vide");
    return false;
  } else {
    showSuccess(streetNameEl);
    return true;
  }
}

export function checkPostalCode() {
  const postalCode = postalCodeEl.value.trim();
  if (!isRequired(postalCode)) {
    showError(postalCodeEl, "Le champ ne peut pas être vide");
    return false;
  } else if (!isPostalCodeValid(postalCode)) {
    showError(postalCodeEl, "Le code postal doit être 83330");
    return false;
  } else {
    showSuccess(postalCodeEl);
    return true;
  }
}

export function checkCity() {
  const city = cityEl.value.trim();
  if (!isRequired(city)) {
    showError(cityEl, "Le champ ne peut pas être vide");
    return false;
  } else if (!isCityValid(city)) {
    showError(cityEl, "La ville n'est pas valide");
    return false;
  } else {
    showSuccess(cityEl);
    return true;
  }
}

export function checkPhone() {
  const phone = phoneEl.value.trim();
  if (!isRequired(phone)) {
    showError(phoneEl, "Le champ ne peut pas être vide");
    return false;
  } else if (!isPhoneValid(phone)) {
    showError(phoneEl, "Le numéro de téléphone n'est pas valide");
    return false;
  } else {
    showSuccess(phoneEl);
    return true;
  }
};

export function checkEmail(){
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, `L'email ne peut être vide.`);
  } else if (!isValidEmail(email)) {
    showError(
      emailEl,
      `L'email doit respecter le format email et ne peut un yopmail.com.`
    );
  } else {
    showSuccess(email);
    valid = true;
  }
  return valid;
};
export function checkDob() {
  let valid = false;
  const dobval = dobEl.value;
  const dob = new Date(dobval);
  const today = new Date();
  const twentyOneBirthday = new Date(
    dob.getFullYear() + 18,
    dob.getMonth(),
    dob.getDate()
  );
  if (!isRequired(dobval)) {
    showError(dobEl, "Vous devez renseigner votre âge");
  } else if (twentyOneBirthday > today) {
    showError(dobEl, "Vous devez avoir 18 ans pour vous inscrire");
  } else {
    showSuccess(dobEl);
    valid = true;
  }
  return valid;
};
export function checkPass() {
  let valid = false;
  const pass = passwordEl.value.trim();
  if (!isRequired(pass)) {
    showError(passwordEl, "Le mot de passe ne peut être vide");
  } else if (!isPasswordValid(pass)) {
    showError(
      passwordEl,
      "Le mot de passe doit comprendre au moins une majuscule un chiffre et un caratére spécial situé dans cette liste : (!@#$%^&*)"
    );
  } else {
    showSuccess(passwordEl);
    valid = true;
  }
  return valid;
};
export function confPass() {
  let valid = false;
  const pass = passwordEl.value.trim();
  const conf = confPassEl.value.trim();
  if (!isRequired(conf)) {
    showError(confPassEl, "La confirmation du mot de passe ne peut être vide");
  } else if (pass !== conf) {
    showError(confPassEl, "Les mots de passes ne correspondent pas");
  } else {
    showSuccess(confPassEl);
    valid = true;
  }
  return valid;
};
export function checkCgv() {
  const cgvCheckbox = cgvEl;
  if (!isCgvValid(cgvCheckbox)) {
    showError(
      cgvEl,
      "Vous devez confirmer que vous avez lu les CGV et que vous les acceptez"
    );
    return false;
  } else {
    showSuccess(cgvEl);
    return true;
  }
};

