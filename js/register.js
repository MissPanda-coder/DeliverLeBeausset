export function displayRegister() {
    const register = document.querySelector("#register");
    const loginForm = document.querySelector("#login");
    const forgot = document.querySelector("#forgotPassword");

    if (register.style.display === "none") {
        register.style.display = "block";
    } else {
        register.style.display = "none";
    }


    if (register.style.display === "none" || register.style.display === "") {
   
        register.style.display = "block"; 
        loginForm.style.display = "none"; 
        forgot.style.display = "none"; 
    } else {
        
        register.style.display = "none"; 
        loginForm.style.display = "none"; 
        forgot.style.display = "none"; 
    }
}