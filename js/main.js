import { setLanguage, currentLanguage, initLanguageButtons } from "./modules/language.js";
import { renderSkills, renderProjectTabs } from "./modules/ui.js";
import { setWhyHighlightLanguage, startWhyHighlightLoop } from "./modules/whyHighlight.js";
import { initMobileMenu } from "./modules/mobileMenu.js";
import { initContactForm, updateSubmitState, setContactFormLanguage } from "./modules/contactForm.js";
import { initScrollEffects } from "./modules/scrollEffects.js";
import { initMobileScrollFix } from "./modules/mobileScrollFix.js";

// Initialisierung
function init() {
  // Language für abhängige Module setzen
  setWhyHighlightLanguage(currentLanguage);
  setContactFormLanguage(currentLanguage);
  
  // Module initialisieren
  initMobileMenu();
  initContactForm();
  initScrollEffects();
  initMobileScrollFix();
  initLanguageButtons();
  
  // UI rendern
  updateSubmitState();
  renderSkills();
  
  // Sprache initial setzen (macht setLanguage intern)
  setLanguage(currentLanguage);
  
  // Why Highlight starten
  startWhyHighlightLoop();
  
  // Media Query für Project Tabs
  const projectTabsMediaQuery = window.matchMedia("(max-width: 991px)");
  projectTabsMediaQuery.addEventListener("change", () => {
    renderProjectTabs();
  });
}

// Starte alles wenn DOM geladen ist
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}