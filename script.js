const burgerMenu = document.querySelector(".burger > .logo");
const navLinks = document.querySelector(".burger-links");

burgerMenu?.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
