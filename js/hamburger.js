export function toggleMenu() {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".nav_links");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("toggle");
    menu.classList.toggle("open", this.classList.contains("toggle"));
  });
}
