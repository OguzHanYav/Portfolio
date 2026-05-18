import { translations } from "../data/translations.js";

// currentLanguage wird als Parameter übergeben, nicht importiert
export function getTranslation(path, language) {
  return path.split(".").reduce((value, segment) => value?.[segment], translations[language]);
}

export function getLocalizedValue(value, language) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[language] ?? value.en ?? Object.values(value)[0];
  }
  return value;
}

export function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

export function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}