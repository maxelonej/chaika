const burgerMenu = document.querySelector(".burger > .logo");
const navLinks = document.querySelector(".burger-links");

burgerMenu?.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Фильтрация категорий
document.querySelectorAll("#categoryFilters .btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelector("#categoryFilters .active")
      .classList.remove("active");
    btn.classList.add("active");

    const category = btn.dataset.category;
    document.querySelectorAll(".menu-category").forEach((section) => {
      section.style.display =
        category === "all" || section.dataset.category === category
          ? "block"
          : "none";
    });
  });
});
