import { skills } from "../data/skills.js";
import { projects } from "../data/projects.js";
import { techIcons, techLabels } from "../data/techIcons.js";
import { escapeHtml, getLocalizedValue, getTranslation } from "../utils/helpers.js";
import { currentLanguage } from "./language.js";

export let currentProjectIndex = 0;

export function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container) return;
  container.innerHTML = skills
    .map((skill) => `
      <article class="skill-card">
        <span class="skill-icon-shell" aria-hidden="true">
          <img src="${skill.iconPath}" alt="" class="skill-icon-image" loading="lazy" />
        </span>
        <span class="skill-label">${escapeHtml(skill.label)}</span>
      </article>
    `)
    .join("");
}

export function renderProjectTabs() {
  const tabsContainer = document.getElementById("project-tabs");
  if (!tabsContainer) return;
  tabsContainer.innerHTML = projects
    .map((project, index) => {
      const tabLabel = window.matchMedia("(max-width: 991px)").matches
        ? `${index + 1}. Project`
        : getLocalizedValue(project.tab, currentLanguage);
      const activeClass = index === currentProjectIndex ? "active" : "";
      return `<button type="button" class="project-tab ${activeClass}" data-index="${index}">${tabLabel}</button>`;
    })
    .join("");
  tabsContainer.querySelectorAll(".project-tab").forEach((button) => {
    button.addEventListener("click", () => {
      currentProjectIndex = Number(button.dataset.index);
      renderProjectTabs();
      renderProjectCard();
    });
  });
}

export function renderProjectCard() {
  const project = projects[currentProjectIndex];
  if (!project) return;
  
  document.querySelector(".project-preview")?.classList.toggle("is-coming-soon", project.key === "ongoing");
  
  const description = document.getElementById("project-description");
  const process = document.getElementById("project-process");
  const team = document.getElementById("project-team");
  const image = document.getElementById("project-image");
  const live = document.getElementById("project-live");
  const github = document.getElementById("project-github");
  const techRow = document.getElementById("project-tech");
  const durationDesktop = document.getElementById("project-duration-desktop");
  const titleMobile = document.getElementById("project-title-mobile");
  const techLineMobile = document.getElementById("project-techline-mobile");
  const durationMobile = document.getElementById("project-duration-mobile");

  if (!description || !process || !team || !image || !live || !github || !techRow ||
      !durationDesktop || !titleMobile || !techLineMobile || !durationMobile) return;

  const localizedTitle = getLocalizedValue(project.title, currentLanguage);
  const localizedDuration = getLocalizedValue(project.duration, currentLanguage);
  const localizedTechnologies = project.tech.map((tech) => getLocalizedValue(techLabels[tech], currentLanguage) || tech).join(", ");

  description.textContent = getLocalizedValue(project.description, currentLanguage);
  process.textContent = getLocalizedValue(project.process, currentLanguage);
  team.textContent = getLocalizedValue(project.team, currentLanguage);
  image.src = project.image;
  image.style.display = "";

  const comingSoonEl = document.getElementById("project-coming-soon");
  if (comingSoonEl) comingSoonEl.remove();

  image.alt = `${localizedTitle} ${getTranslation("projects.previewAltSuffix", currentLanguage)}`;
  
  if (project.live && project.live !== "#") {
    live.href = project.live;
    live.style.display = "";
  } else {
    live.style.display = "none";
  }

  if (project.key === "dabubble" || project.key === "ongoing") {
    github.style.display = "none";
  } else if (project.github && project.github !== "#") {
    github.href = project.github;
    github.style.display = "";
  } else {
    github.style.display = "none";
  }

  durationDesktop.textContent = localizedDuration;
  titleMobile.textContent = localizedTitle;
  techLineMobile.textContent = `${getTranslation("projects.technologies", currentLanguage)}: ${localizedTechnologies}`;
  durationMobile.textContent = localizedDuration;

  techRow.innerHTML = project.tech.map((tech) => {
    const src = techIcons[tech];
    const label = getLocalizedValue(techLabels[tech], currentLanguage) || tech;
    return src ? `<span class="tech-badge"><img src="${src}" alt="${label}" class="tech-icon-image" /></span>` : `<span class="tech-badge">${label}</span>`;
  }).join("");
}