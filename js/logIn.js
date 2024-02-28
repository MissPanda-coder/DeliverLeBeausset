export function displayLogin() {
  const logIn = document.querySelector("#login");
  const register = document.querySelector("#register");
  const forgot = document.querySelector("#forgotPassword");

  if (logIn.style.display === "none") {
    logIn.style.display = "block";
  } else {
    logIn.style.display = "none";
  }

  if (logIn.style.display === "none" || forgot.style.display === "") {
    logIn.style.display = "block";
    forgot.style.display = "none";
    register.style.display = "none";
  } else {
    logIn.style.display = "none";
    forgot.style.display = "none";
    register.style.display = "none";
  }
}
