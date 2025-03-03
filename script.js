const nav = document.querySelector(".nav");
const openNav = document.getElementById("open-menu");
const closeNav = document.getElementById("close-icon");

openNav.addEventListener("click", () => {
  nav.classList.add("nav-open");
  nav.attributes.removeNamedItem("aria-hidden");
});

closeNav.addEventListener("click", () => {
  nav.classList.remove("nav-open");
  nav.attributes.setNamedItem("aria-hidden", true);
});
