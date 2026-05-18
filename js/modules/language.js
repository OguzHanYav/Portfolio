import { LANGUAGE_STORAGE_KEY } from "../config/constants.js";
import { translations } from "../data/translations.js";
import { getTranslation } from "../utils/helpers.js";
import { startWhyHighlightLoop } from "./whyHighlight.js";
import { renderProjectTabs, renderProjectCard } from "./ui.js";
import { updateSubmitState } from "./contactForm.js";
import { closeMobileMenu } from "./mobileMenu.js";

export let currentLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) || "en";

export function updateDocumentLanguage() {
  document.documentElement.lang = currentLanguage;
  const titleKey = `title${currentLanguage.charAt(0).toUpperCase()}${currentLanguage.slice(1)}`;
  const pageTitle = document.body?.dataset?.[titleKey];
  if (pageTitle) {
    document.title = pageTitle;
  }
}

export function updateLanguageButtons() {
  document.querySelectorAll(".lang-btn[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === currentLanguage);
    button.setAttribute("aria-pressed", String(button.dataset.lang === currentLanguage));
  });
}

export function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getTranslation(element.dataset.i18n, currentLanguage);
    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = getTranslation(element.dataset.i18nHtml, currentLanguage);
    if (typeof value === "string") {
      const privacyLink = '<a href="./privacy-policy.html" class="privacy-link">' +
        (currentLanguage === 'de' ? 'Datenschutzerklärung' : 'privacy policy') +
        '</a>';
      element.innerHTML = value.replace(/\[(.*?)\]/g, privacyLink);
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = getTranslation(element.dataset.i18nPlaceholder, currentLanguage);
    if (typeof value === "string") {
      element.setAttribute("placeholder", value);
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = getTranslation(element.dataset.i18nAriaLabel, currentLanguage);
    if (typeof value === "string") {
      element.setAttribute("aria-label", value);
    }
  });
}

export function updateNavActiveLink(activeLink = null) {
  const targetHash = activeLink?.getAttribute("href")?.split("#")[1];
  document.querySelectorAll(".desktop-nav a").forEach((link) => {
    const linkHash = link.getAttribute("href")?.split("#")[1];
    link.classList.toggle("active", Boolean(targetHash && linkHash === targetHash));
  });
}

export function setLanguage(language) {
  if (!translations[language]) {
    language = "en";
  }

  currentLanguage = language;
  localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);

  updateDocumentLanguage();
  updateLanguageButtons();
  applyTranslations();
  startWhyHighlightLoop();
  renderProjectTabs();
  renderProjectCard();

  const submitBtn = document.getElementById("submit-btn");
  const feedback = document.getElementById("form-feedback");
  
  if (submitBtn) {
    updateSubmitState();
  }

  if (feedback?.textContent.trim()) {
    const feedbackKey = feedback.dataset.state === "error" ? "form.error" : "form.success";
    feedback.textContent = getTranslation(feedbackKey, currentLanguage);
  }
}

// Event Listener für Language Buttons
export function initLanguageButtons() {
  document.querySelectorAll(".lang-btn[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.lang);
      closeMobileMenu();
    });
  });
  
  document.querySelectorAll(".desktop-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      updateNavActiveLink(link);
    });
  });
  
  document.querySelectorAll(".mobile-nav .mobile-link").forEach((link) => {
    link.addEventListener("click", () => {
      updateNavActiveLink(link);
    });
  });
}