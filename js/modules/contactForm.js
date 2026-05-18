import { CONTACT_API_ENDPOINT } from "../config/constants.js";
import { nameInput, emailInput, messageInput, privacyCheckbox, submitBtn, feedback } from "../utils/domElements.js";
import { getTranslation } from "../utils/helpers.js";

let formSubmitted = false;
let currentLanguageForForm = "en";
const contactTouched = { name: false, email: false, message: false, privacy: false };

export function setContactFormLanguage(language) {
  currentLanguageForForm = language;
}

function isNameValid() {
  return nameInput?.value.trim().length >= 2;
}

function isEmailValid() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailRegex.test(emailInput?.value.trim() || "");
}

function isMessageValid() {
  return messageInput?.value.trim().length >= 10;
}

function isPrivacyValid() {
  return Boolean(privacyCheckbox?.checked);
}

function validateName(showError = false) {
  const error = document.getElementById("name-error");
  if (!nameInput || !error) return false;
  if (!isNameValid()) {
    error.textContent = showError ? getTranslation("validation.name", currentLanguageForForm) : "";
    return false;
  }
  error.textContent = "";
  return true;
}

function validateEmail(showError = false) {
  const error = document.getElementById("email-error");
  if (!emailInput || !error) return false;
  if (!isEmailValid()) {
    error.textContent = showError ? getTranslation("validation.email", currentLanguageForForm) : "";
    return false;
  }
  error.textContent = "";
  return true;
}

function validateMessage(showError = false) {
  const error = document.getElementById("message-error");
  if (!messageInput || !error) return false;
  if (!isMessageValid()) {
    error.textContent = showError ? getTranslation("validation.message", currentLanguageForForm) : "";
    return false;
  }
  error.textContent = "";
  return true;
}

function validatePrivacy(showError = false) {
  const error = document.getElementById("privacy-error");
  if (!privacyCheckbox || !error) return false;
  if (!isPrivacyValid()) {
    privacyCheckbox.classList.toggle("is-invalid", showError);
    error.textContent = showError ? getTranslation("validation.privacy", currentLanguageForForm) : "";
    return false;
  }
  privacyCheckbox.classList.remove("is-invalid");
  error.textContent = "";
  return true;
}

function validateContactForm(showErrors = false) {
  const nameValid = validateName(showErrors || contactTouched.name || formSubmitted);
  const emailValid = validateEmail(showErrors || contactTouched.email || formSubmitted);
  const messageValid = validateMessage(showErrors || contactTouched.message || formSubmitted);
  const privacyValid = validatePrivacy(showErrors || contactTouched.privacy || formSubmitted);
  return nameValid && emailValid && messageValid && privacyValid;
}

function areRequiredTextFieldsValid() {
  return isNameValid() && isEmailValid() && isMessageValid();
}

function shouldShowPrivacyErrorBeforeSubmit() {
  return areRequiredTextFieldsValid() && !isPrivacyValid();
}

export function updateSubmitState() {
  if (!submitBtn) return;
  submitBtn.disabled = !(areRequiredTextFieldsValid() && isPrivacyValid());
  if (shouldShowPrivacyErrorBeforeSubmit()) {
    contactTouched.privacy = true;
    validatePrivacy(true);
  } else if (isPrivacyValid()) {
    validatePrivacy(false);
  }
}

function handleContactInput(field) {
  contactTouched[field] = true;
  saveDraft();
  if (field === "name") validateName(true);
  if (field === "email") validateEmail(true);
  if (field === "message") validateMessage(true);
  updateSubmitState();
}

function saveDraft() {
  const form = document.getElementById("contact-form");
  if (!form || typeof localStorage === "undefined") return;
  const draft = {
    name: document.getElementById("name")?.value || "",
    email: document.getElementById("email")?.value || "",
    message: document.getElementById("message")?.value || "",
    privacy: Boolean(document.getElementById("privacy")?.checked)
  };
  localStorage.setItem("portfolio-contact-draft", JSON.stringify(draft));
}

function clearDraft() {
  if (typeof localStorage === "undefined") return;
  localStorage.removeItem("portfolio-contact-draft");
}

async function submitContactRequest() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  const isLocalStaticPreview = ["localhost", "127.0.0.1", "0.0.0.0"].includes(window.location.hostname);
  if (isLocalStaticPreview) return;
  const payload = {
    name: document.getElementById("name")?.value.trim() || "",
    email: document.getElementById("email")?.value.trim() || "",
    message: document.getElementById("message")?.value.trim() || ""
  };
  const response = await fetch(CONTACT_API_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!response.ok) throw new Error("Contact request failed");
}

export function initContactForm() {
  nameInput?.addEventListener("input", () => handleContactInput("name"));
  emailInput?.addEventListener("input", () => handleContactInput("email"));
  messageInput?.addEventListener("input", () => handleContactInput("message"));

  nameInput?.addEventListener("blur", () => {
    contactTouched.name = true;
    validateName(true);
    updateSubmitState();
  });

  emailInput?.addEventListener("blur", () => {
    contactTouched.email = true;
    validateEmail(true);
    updateSubmitState();
  });

  messageInput?.addEventListener("blur", () => {
    contactTouched.message = true;
    validateMessage(true);
    updateSubmitState();
  });

  privacyCheckbox?.addEventListener("change", () => {
    contactTouched.privacy = true;
    saveDraft();
    validatePrivacy(true);
    updateSubmitState();
  });

  document.getElementById("contact-form")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    formSubmitted = true;
    const valid = validateContactForm(true);
    if (!submitBtn || !feedback || !valid) return;
    feedback.textContent = "";
    submitBtn.disabled = true;
    try {
      await submitContactRequest();
      feedback.className = "form-feedback success";
      feedback.dataset.state = "success";
      feedback.textContent = getTranslation("form.success", currentLanguageForForm);
      event.target.reset();
      clearDraft();
      formSubmitted = false;
      contactTouched.name = false;
      contactTouched.email = false;
      contactTouched.message = false;
      contactTouched.privacy = false;
      updateSubmitState();
      setTimeout(() => {
        feedback.textContent = "";
        feedback.className = "form-feedback";
        feedback.removeAttribute("data-state");
      }, 7000);
    } catch (error) {
      feedback.className = "form-feedback error";
      feedback.dataset.state = "error";
      feedback.textContent = getTranslation("form.error", currentLanguageForForm);
      updateSubmitState();
    }
  });
}