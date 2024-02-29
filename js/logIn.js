export function displayLogin() {
  const logIn = document.querySelector("#login");
  const register = document.querySelector("#register");
  const forgot = document.querySelector("#forgotPassword");

  if (logIn.style.display === "none") {
    logIn.style.display = "block";
  } else {
    logIn.style.display = "none";
  }

}
