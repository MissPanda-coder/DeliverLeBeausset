export function displayForgot() {
  const forgot = document.querySelector("#forgotPassword");
  const loginForm = document.querySelector("#login");
  const register = document.querySelector("#register");

  if (forgot.style.display === "none" || forgot.style.display === "") {
    // Si le formulaire forgot est caché ou n'a pas de style défini (initialement caché)
    forgot.style.display = "block"; // Afficher le formulaire forgot
    loginForm.style.display = "none"; // Masquer le formulaire de connexion
    register.style.display = "none"; // Masquer le formulaire d'inscription
  } else {
    // Si le formulaire forgot est déjà affiché
    forgot.style.display = "none"; // Cacher le formulaire forgot
    loginForm.style.display = "none"; // Afficher à nouveau le formulaire de connexion
    register.style.display = "none"; // Afficher à nouveau le formulaire d'inscription
  }
}
