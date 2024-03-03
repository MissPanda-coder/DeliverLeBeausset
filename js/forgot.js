export function displayForgot() {
  const forgot = document.querySelector("#forgotPassword");
  const loginForm = document.querySelector("#login");
  const register = document.querySelector("#register");

  if (forgot.style.display === "none" || forgot.style.display === "") {
    forgot.style.display = "block";
    loginForm.style.display = "none";
    register.style.display = "none";
  }
}
