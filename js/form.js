
const form = document.querySelector("#registerForm")
const togglePassword = document.querySelector('#togglePassword');
const nameEl = document.forms.register.name
const firstNameEl = document.forms.register.first_name
const streetNumberEl = document.forms.register.street_number
const streetNameEl = document.forms.register.street_name
const postalCodeEl = document.forms.register.postal_code
const cityEl = document.forms.register.city
const phoneEl = document.forms.register.phone
const emailEl = document.forms.register.email
const passwordEl = document.forms.register.password
const confPassEl = document.forms.register.passwordconfirm
const cgvEl = document.forms.register.cgv




function isRequired(elementValue){
    if(elementValue == ""){
        return false
    }else{
        return true
    }
}

function isBetween(length, min, max){
    if(length < min || length > max){
        return false
    }else{
        return true
    }
}
// J'ai besoin d'une fonction qui interdit le mot "root"et qui n'autorise que la saisie de lettre
function isNameValid(name){
    const re = /^(?!.*\broot\b)[a-zA-Z]+$/;
    return re.test(name);
}

// Fonction qui interdit le mot "root" et n'autorise que la saisie de lettres
function isFirstNameValid(first_name){
    const re = /^(?!.*\broot\b)[a-zA-Z]+$/;
    return re.test(first_name);
}

// Fonction qui autorise entre 1 et 4 chiffres et n'autorise que la saisie de chiffres
function isStreetNbValid(street_number){
    const re = /^\d{1,4}$/;
    return re.test(street_number);
}

// Fonction qui n'autorise que le code postal 83330 et rien d'autre
function isPostalCodeValid(postal_code){
    return postal_code === '83330';
}

// Fonction qui n'autorise que la saisie de "LE BEAUSSET" et rien d'autre
function isCityValid(city){
    return city === 'LE BEAUSSET';
}

// Fonction qui n'autorise que la saisie de chiffres pour le numéro de téléphone, qui doit commencer par 0 et comporter 10 chiffres
function isPhoneValid(phone){
    const re = /^0\d{9}$/;
    return re.test(phone);
}

// J'ai besoin d'une fonction pour valider le format email ainsi qu'interdire les entrées de type "@yopmail.com"
function isValidEmail(email) {
    const regex = /^(?!.*@yopmail\.com$)[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function isPasswordValid(password) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    return re.test(password);
}

//j'ai besoin d'une fonction qui permette de vérifier que la case cgv est cochée
function isCgvValid(cgvCheckbox){
    return cgvCheckbox.checked;
}


// J'ai besoin d'une fonction qui permette d'afficher les erreurs en rouge
function showError(input,message){
    const formField = input.parentElement;
    formField.classList.remove("success")// class css
    formField.classList.add("error")// class css
    const errorEl = formField.querySelector("small")
    errorEl.textContent = message
}
// J'ai besoin d'une fonction qui permette d'afficher l'element valide en vert
function showSuccess(input){
    const formField = input.parentElement;
    formField.classList.remove("error")// class css
    formField.classList.add("success")// class css
    const errorEl = formField.querySelector("small")
    errorEl.textContent = ""
}

const checkName = () => {
    let valid = false
    const min = 2,
    max = 25
    const name = nameEl.value.trim()// permet de supprimer les espaces
    if (!isRequired(name)) {
        showError(nameEl, "Le champ ne peut pas être vide");
    } else if (!isBetween(name.length, min, max)) {
        showError(
            nameEl,
            `Le nom doit avoir entre ${min} et ${max} caractères.`
        )
    }else if (!isNameValid(name)){
        showError(
            nameEl,
            `Le nom d'utilisateur ne doit contenir que des lettres et ne peut être "root".`
        )
    } else {
        showSuccess(nameEl);
        valid = true;
    }
    return valid; 

}
const checkFirstName = () => {
    let valid = false
    const min = 2,
    max = 25
    const firstName = firstNameEl.value.trim()
    if (!isRequired(firstName)) {
        showError(firstNameEl, "Le prénom ne peut pas être vide");
    } else if (!isBetween(firstName.length, min, max)) {
        showError(
            firstNameEl,
            `Le prénom doit avoir entre ${min} et ${max} caractères.`
        )
    }else if (!isFirstNameValid(firstName)){
        showError(
            firstNameEl,
            `Le prénom ne doit contenir que des lettres et ne peut être "root".`
        )
    } else {
        showSuccess(firstNameEl);
        valid = true;
    }
    return valid; 

}

const checkStreetNb = () => {
    let valid = false
    const min = 2,
    max = 4
    const street_number = streetNumberEl.value.trim()
    if (!isRequired(street_number)) {
        showError(streetNumberEl, "Le champ ne peut pas être vide");
    } else if (!isBetween(street_number.length, min, max)) {
        showError(
            streetNumberEl,
            `Le numéro de rue doit avoir entre ${min} et ${max} caractères.`
        )
    }else if (!isStreetNbValid(street_number)){
        showError(
            streetNumberEl,
            `Le nunméro de rue ne doit contenir que des chiffres".`
        )
    } else {
        showSuccess(streetNumberEl);
        valid = true;
    }
    return valid; 
}

const checkStreetName = () => {
    const street = streetNameEl.value.trim(); 
    if (!isRequired(street)) {
        showError(streetNameEl, "Le champ ne peut pas être vide");
        return false; 
    } else {
        showSuccess(streetNameEl);
        return true; 
    }
}

const checkPostalCode = () => {
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

const checkCity = () => {
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

const checkPhone = () => {
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
}

const checkEmail = () => {
    let valid = false
    const email = emailEl.value.trim()
    if(!isRequired(email)){
        showError(
            emailEl,
            `L'email ne peut être vide.`
        )
    }else if(!isValidEmail(email)){
        showError(
            emailEl,
            `L'email doit respecter le format email et ne peut un yopmail.com.`
        )
    } else {
        showSuccess(email);
        valid = true;
    }
    return valid;
}
const checkDob = () => {
    let valid = false
    const dobval = dobEl.value;
    const dob = new Date(dobval);
    const today = new Date();
    const twentyOneBirthday = new Date(dob.getFullYear() + 18, dob.getMonth(), dob.getDate());
    if(!isRequired(dobval)){
        showError(dobEl, "Vous devez renseigner votre âge")
    }
    else if (twentyOneBirthday > today) {
        showError(dobEl, "Vous devez avoir 18 ans pour vous inscrire");
    } else {
        showSuccess(dobEl);
        valid = true; 
    }
    return valid;
}
const checkPass = () => {
    let valid = false
    const pass = passwordEl.value.trim()
    if(!isRequired(pass)){
        showError(passwordEl, 'Le mot de passe ne peut être vide')
    }else if(!isPasswordValid(pass)){
        showError(passwordEl, 'Le mot de passe doit comprendre au moins une majuscule un chiffre et un caratére spécial situé dans cette liste : (!@#$%^&*)')
    }else{
        showSuccess(passwordEl)
        valid = true
    }
    return valid
}
const confPass = () => {
    let valid = false
    const pass = passwordEl.value.trim();
    const conf = confPassEl.value.trim();
    if(!isRequired(conf)){
        showError(confPassEl, "La confirmation du mot de passe ne peut être vide")
    }else if(pass !== conf){
        showError(confPassEl, "Les mots de passes ne correspondent pas")
    }else{
        showSuccess(confPassEl)
        valid = true
    }
    return valid
}
const checkCgv = () => {
    const cgvCheckbox = cgvEl; 
    if (!isCgvValid(cgvCheckbox)) {
        showError(cgvEl, "Vous devez confirmer que vous avez lu les CGV et que vous les acceptez");
        return false; 
    } else {
        showSuccess(cgvEl);
        return true; 
    }
}

form.addEventListener('submit',(e) => {
    e.preventDefault()
    
    let nameOk = checkName(),
    firstNameOk = checkFirstName(),
    streetNumberOk = checkStreetNb(),
    streetNameOk = checkStreetName(),
    postalCodeOk = checkPostalCode(),
    cityOk = checkCity(),
    phoneOk = checkPhone(),
    emailOk = checkEmail(),
    isAgeOk = checkDob(),
    isPassOk = checkPass(),
    isConfOk = confPass(),
    iscgvOk = checkCgv();
    
    let isFormValid = nameOk && firstNameOk && streetNumberOk && streetNameOk && postalCodeOk && cityOk && phoneOk && emailOk &&isAgeOk && isPassOk && isConfOk && iscgvOk;
    if(isFormValid){
        console.log('Tout est Ok pour l\'envoi')
    }
    }) 

    // Techniquement, vous attendrez que les utilisateurs
    // suspendent la saisie pendant un petit laps de temps ou arrêtent de taper avant de valider la saisie.
    const debounce = (fn, delay = 500) => {
        let timeoutId;
        return (...args) => {
            // cancel the previous timer
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            // setup a new timer
            timeoutId = setTimeout(() => {
                fn.apply(null, args);
            }, delay);
        };
    };


    form.addEventListener(
        "input",
        debounce(function (e) {
            switch (e.target.id) {
                case "name":
                    checkName();
                    break;
                case "first_name":
                    checkFirstName();
                    break;
                case "street_number":
                    checkStreetNb();
                    break;
                case "street_name":
                    checkStreetName();
                    break;
                case "postal_code":
                    checkPostalCode();
                    break;
                case "city":
                    checkCity();
                    break;
                case "phone":
                    checkPhone();
                    break;
                case "email":
                    checkEmail();
                    break;
                case "dob":
                    checkDob();
                    break;
                case "password":
                    checkPass();
                    break;
                case "passwordconfirm":
                    confPass();
                    break;
                case "cgv":
                    checkCgv();
                    break;
            }
        })
    );
    
