const nav = document.querySelector(".nav");
const openNav = document.getElementById("open-menu");
const closeNav = document.getElementById("close-icon");
const body = document.body;

window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    nav.hidden = true;
  } else {
    nav.hidden = false;
  }
});

openNav.addEventListener("click", () => {
  nav.classList.add("nav-open");
  nav.hidden = false;
  setTimeout(() => {
    createOverlay();
    trapFocus();
  }, 100);
});

closeNav.addEventListener("click", () => {
  nav.classList.remove("nav-open");
  removeOverlay();
  setTimeout(() => (nav.hidden = true), 100);
});

// Create overlay function
function createOverlay() {
  const overlay = document.createElement("div");
  overlay.className = "overlay active";
  overlay.addEventListener("click", () => {
    closeNav.click();
  });
  body.appendChild(overlay);
}

// Remove overlay function
function removeOverlay() {
  const overlay = document.querySelector(".overlay");
  if (overlay) {
    overlay.remove();
  }
}

// Trap focus within modal for accessibility
function trapFocus() {
  const navLinks = nav.querySelectorAll("a");
  const firstFocusableElement = closeNav;
  const lastFocusableElement = navLinks[navLinks.length - 1];

  firstFocusableElement.focus();

  nav.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeNav.click();
    }

    if (e.key === "Tab") {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus();
          e.preventDefault();
        }
      }
    }
  });
}
