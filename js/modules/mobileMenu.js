import { burger, mobileMenu } from "../utils/domElements.js";

function positionMobileMenuOverHeroImage() {
  // Mobile menu is positioned inside .hero-image-wrap and scrolls with the hero.
}

export function closeMobileMenu() {
  if (!burger || !mobileMenu) return;
  mobileMenu.classList.remove("open");
  document.body.classList.remove("mobile-menu-open");
  burger.classList.remove("open");
  burger.setAttribute("aria-expanded", "false");
}

export function initMobileMenu() {
  if (!burger || !mobileMenu) return;

  burger.addEventListener("click", () => {
    const isOpen = !mobileMenu.classList.contains("open");
    if (isOpen) {
      positionMobileMenuOverHeroImage();
    }
    mobileMenu.classList.toggle("open", isOpen);
    document.body.classList.toggle("mobile-menu-open", isOpen);
    burger.classList.toggle("open", isOpen);
    burger.setAttribute("aria-expanded", String(isOpen));
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });

  document.addEventListener("click", (event) => {
    if (!mobileMenu.classList.contains("open")) return;
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (mobileMenu.contains(target) || burger.contains(target)) return;
    closeMobileMenu();
  });

  window.addEventListener("resize", () => {
    if (mobileMenu.classList.contains("open")) {
      positionMobileMenuOverHeroImage();
    }
  });
}