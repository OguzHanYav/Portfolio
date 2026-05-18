import { whyHighlights } from "../data/whyHighlights.js";
import { getTranslation, wait } from "../utils/helpers.js";
import { whyHighlight, whyHighlightIcon, whyHighlightText, reducedMotionQuery } from "../utils/domElements.js";

let whyHighlightRunId = 0;
let currentLanguageForHighlight = "en";

export function setWhyHighlightLanguage(language) {
  currentLanguageForHighlight = language;
}

function getWhyHighlightItems() {
  return whyHighlights.map((item) => ({
    icon: item.icon,
    text: getTranslation(item.textKey, currentLanguageForHighlight) || ""
  }));
}

function getWhyHighlightPrefix() {
  const prefixes = { en: "I am", de: "Ich bin" };
  return prefixes[currentLanguageForHighlight] || "";
}

function initWhyHighlightSpans() {
  if (!whyHighlightText) return;
  let prefixSpan = whyHighlightText.querySelector(".why-highlight-prefix");
  let spaceSpan = whyHighlightText.querySelector(".why-highlight-space");
  let restSpan = whyHighlightText.querySelector(".why-highlight-rest");

  if (!prefixSpan || !spaceSpan || !restSpan) {
    whyHighlightText.innerHTML = "";
    prefixSpan = document.createElement("span");
    prefixSpan.className = "why-highlight-prefix";
    spaceSpan = document.createElement("span");
    spaceSpan.className = "why-highlight-space";
    spaceSpan.textContent = " ";
    restSpan = document.createElement("span");
    restSpan.className = "why-highlight-rest";
    whyHighlightText.appendChild(prefixSpan);
    whyHighlightText.appendChild(spaceSpan);
    whyHighlightText.appendChild(restSpan);
  }
  return { prefixSpan, spaceSpan, restSpan };
}

function clearWhyHighlightText() {
  const spans = initWhyHighlightSpans();
  if (!spans) return;
  spans.prefixSpan.textContent = "";
  spans.spaceSpan.textContent = "";
  spans.restSpan.textContent = "";
}

function setWhyHighlightPrefix() {
  const spans = initWhyHighlightSpans();
  if (!spans) return;
  const prefix = getWhyHighlightPrefix();
  spans.prefixSpan.textContent = prefix;
  spans.spaceSpan.textContent = " ";
  spans.restSpan.textContent = "";
}

function setWhyHighlightText(text = "") {
  const spans = initWhyHighlightSpans();
  if (!spans) return;
  spans.restSpan.textContent = text;
}

function renderWhyHighlightStatic() {
  const firstItem = getWhyHighlightItems()[0];
  if (!whyHighlight || !whyHighlightIcon || !whyHighlightText || !firstItem) return;
  whyHighlightIcon.src = firstItem.icon;
  whyHighlightIcon.classList.add("is-visible");
  setWhyHighlightText(firstItem.text);
  whyHighlight.setAttribute("aria-label", firstItem.text);
}

async function runWhyHighlightLoop(runId) {
  if (!whyHighlight || !whyHighlightIcon || !whyHighlightText) return;
  while (runId === whyHighlightRunId) {
    const items = getWhyHighlightItems();
    for (const item of items) {
      whyHighlightIcon.classList.remove("is-visible");
      whyHighlightIcon.src = item.icon;
      clearWhyHighlightText();
      whyHighlight.setAttribute("aria-label", item.text);
      await wait(140);
      if (runId !== whyHighlightRunId) return;
      whyHighlightIcon.classList.add("is-visible");
      await wait(240);
      if (runId !== whyHighlightRunId) return;
      setWhyHighlightPrefix();
      for (let index = 1; index <= item.text.length; index += 1) {
        setWhyHighlightText(item.text.slice(0, index));
        await wait(48);
        if (runId !== whyHighlightRunId) return;
      }
      await wait(1200);
      if (runId !== whyHighlightRunId) return;
      for (let index = item.text.length - 1; index >= 0; index -= 1) {
        setWhyHighlightText(item.text.slice(0, index));
        await wait(28);
        if (runId !== whyHighlightRunId) return;
      }
      clearWhyHighlightText();
      whyHighlightIcon.classList.remove("is-visible");
      await wait(280);
      if (runId !== whyHighlightRunId) return;
    }
  }
}

export function startWhyHighlightLoop() {
  if (!whyHighlight || !whyHighlightIcon || !whyHighlightText) return;
  whyHighlightRunId += 1;
  setWhyHighlightText("");
  whyHighlightIcon.classList.remove("is-visible");
  if (reducedMotionQuery.matches) {
    renderWhyHighlightStatic();
    return;
  }
  runWhyHighlightLoop(whyHighlightRunId);
}