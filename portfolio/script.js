const skills = [
  {
    label: "Angular",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2 4 5l1.3 10.2L12 22l6.7-6.8L20 5Z" />
        <path d="M12 6.5 8.8 15h1.9l.65-1.85h3.32L15.3 15h1.9Z" />
      </svg>
    `
  },
  {
    label: "TypeScript",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
        <path d="M8 9.5h8" />
        <path d="M11 9.5v7" />
        <path d="M14.7 13.4c.3-.5.8-.8 1.5-.8.9 0 1.6.5 1.6 1.3 0 1-.8 1.2-1.7 1.5-.8.3-1.5.5-1.5 1.4 0 .8.7 1.3 1.6 1.3.8 0 1.4-.3 1.8-.8" />
      </svg>
    `
  },
  {
    label: "JavaScript",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
        <path d="M10 9.5v5.2c0 1-.5 1.8-1.6 1.8-.7 0-1.2-.3-1.5-.8" />
        <path d="M13.2 15.2c.3.8 1 1.3 2 1.3 1 0 1.8-.5 1.8-1.3 0-.9-.7-1.2-1.8-1.7-1-.4-1.7-.9-1.7-1.8 0-.8.7-1.5 1.8-1.5.9 0 1.4.3 1.8 1" />
      </svg>
    `
  },
  {
    label: "HTML",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 3.5h14l-1.3 15-5.7 2-5.7-2Z" />
        <path d="m8.4 7.8.3 2.1h6.4l-.2 2.4H9l.3 2h3.6l-.2 2.2" />
      </svg>
    `
  },
  {
    label: "CSS",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 3.5h14l-1.3 15-5.7 2-5.7-2Z" />
        <path d="m8.5 7.8-.2 2.2h6.1l-.2 2.3H8.7l-.2 2h3.9l-.2 2.2" />
      </svg>
    `
  },
  {
    label: "REST-API",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="6" width="16" height="12" rx="4" />
        <path d="M9 10h1.5" />
        <path d="M7.5 14h3" />
        <path d="M14 10h2.5" />
        <path d="M14 14h2.5" />
      </svg>
    `
  },
  {
    label: "Firebase",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 17.5 11.2 4.5 13.6 9l-4.2 8.5Z" />
        <path d="M11.2 4.5 18 11.3l-7 8.2Z" />
        <path d="m8.2 13.4 3.2-4.4" />
      </svg>
    `
  },
  {
    label: "Git",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m12 3 9 9-9 9-9-9Z" />
        <path d="M9 10.5a1.5 1.5 0 1 0 0 3" />
        <path d="M12 7.5v9" />
        <path d="M12 12h3a1.5 1.5 0 1 1 0 3" />
      </svg>
    `
  },
  {
    label: "Material Design",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 3.5v17" />
        <path d="M3.5 12h17" />
        <path d="m5.8 6 12.4 12" />
      </svg>
    `
  },
  {
    label: "Scrum",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 12a7 7 0 0 1 12.3-4.5" />
        <path d="M19 12a7 7 0 0 1-12.3 4.5" />
        <path d="M18 5v3.8h-3.8" />
        <path d="M6 19v-3.8h3.8" />
      </svg>
    `
  }
];

const techIcons = {
  angular: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2 4 5l1.3 10.2L12 22l6.7-6.8L20 5Z" />
      <path d="M12 6.5 8.8 15h1.9l.65-1.85h3.32L15.3 15h1.9Z" />
    </svg>
  `,
  ts: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <path d="M8 9.5h8" />
      <path d="M11 9.5v7" />
    </svg>
  `,
  firebase: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 17.5 11.2 4.5 13.6 9l-4.2 8.5Z" />
      <path d="M11.2 4.5 18 11.3l-7 8.2Z" />
    </svg>
  `,
  js: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <path d="M10 9.5v5.2c0 1-.5 1.8-1.6 1.8" />
      <path d="M13.2 15.2c.3.8 1 1.3 2 1.3" />
    </svg>
  `,
  html: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 3.5h14l-1.3 15-5.7 2-5.7-2Z" />
      <path d="m8.4 7.8.3 2.1h6.4" />
    </svg>
  `,
  css: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 3.5h14l-1.3 15-5.7 2-5.7-2Z" />
      <path d="m8.5 7.8-.2 2.2h6.1" />
    </svg>
  `,
  api: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="6" width="16" height="12" rx="4" />
      <path d="M7.5 14h9" />
    </svg>
  `,
  git: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 3 9 9-9 9-9-9Z" />
      <path d="M12 7.5v9" />
    </svg>
  `
};

const projects = [
  {
    key: "dabubble",
    tab: "1. DA Bubble",
    title: "DA Bubble",
    techLine: "Technologies Angular TypeScript Firebase",
    duration: "Duration: 3 weeks",
    description:
      "This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.",
    process:
      "How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.",
    team:
      "How many people were in the team and what was your role? Describe your tasks in 1-2 sentences. For example: login form, dashboard or chat functionality. What technologies did you use? It is nice to mention good teamwork and cooperation.",
    live: "#",
    github: "#",
    image: "./assets/img/project-dabubble.svg",
    tech: ["angular", "ts", "firebase"]
  },
  {
    key: "sharkie",
    tab: "2. Sharkie",
    title: "Sharkie",
    techLine: "Technologies JavaScript HTML CSS",
    duration: "Duration: 5 weeks",
    description:
      "A browser game with playful animations, collectible elements and a clear focus on smooth interaction and visual feedback.",
    process:
      "The work process was organized in reusable scenes, separated game logic and structured asset handling. Documentation and testing helped keep the codebase maintainable.",
    team:
      "This project strengthened collaboration around animation reviews, bug fixing and planning gameplay features step by step.",
    live: "#",
    github: "#",
    image: "./assets/img/project-sharkie.svg",
    tech: ["js", "html", "css"]
  },
  {
    key: "join",
    tab: "3. Join",
    title: "Join",
    techLine: "Technologies JavaScript REST-API Firebase",
    duration: "Duration: 6 weeks",
    description:
      "A task management board for structured workflows, assignments and progress tracking with a clean dashboard layout.",
    process:
      "Features were broken into reusable components and clear modules. I focused on documentation, naming conventions and maintainable styling.",
    team:
      "Working as part of a team improved communication, code review routines and the ability to split ownership across features.",
    live: "#",
    github: "#",
    image: "./assets/img/project-join.svg",
    tech: ["js", "api", "firebase"]
  },
  {
    key: "ongoing",
    tab: "4. Ongoing Project",
    title: "Ongoing Project",
    techLine: "Technologies TypeScript Git",
    duration: "Duration: ongoing",
    description:
      "A current learning project where modern frontend patterns, accessibility and component structure continue to be refined.",
    process:
      "The process is centered around continuous iteration, prototyping and polishing the interaction design for desktop and mobile.",
    team:
      "It supports stronger collaboration habits, planning and sharing progress with clarity.",
    live: "#",
    github: "#",
    image: "./assets/img/project-ongoing.svg",
    tech: ["ts", "git"]
  }
];

let currentProjectIndex = 0;

function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container) return;

  container.innerHTML = skills
    .map(
      (skill) => `
        <article class="skill-card">
          <div class="skill-icon">${skill.icon}</div>
          <p>${skill.label}</p>
        </article>
      `
    )
    .join("");
}

function renderProjectTabs() {
  const tabsContainer = document.getElementById("project-tabs");
  if (!tabsContainer) return;

  tabsContainer.innerHTML = projects
    .map(
      (project, index) => `
        <button type="button" class="project-tab ${index === currentProjectIndex ? "active" : ""}" data-index="${index}">
          ${project.tab}
        </button>
      `
    )
    .join("");

  tabsContainer.querySelectorAll(".project-tab").forEach((button) => {
    button.addEventListener("click", () => {
      currentProjectIndex = Number(button.dataset.index);
      renderProjectTabs();
      renderProjectCard();
    });
  });
}

function renderProjectCard() {
  const project = projects[currentProjectIndex];

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

  if (
    !description ||
    !process ||
    !team ||
    !image ||
    !live ||
    !github ||
    !techRow ||
    !durationDesktop ||
    !titleMobile ||
    !techLineMobile ||
    !durationMobile
  ) {
    return;
  }

  description.textContent = project.description;
  process.textContent = project.process;
  team.textContent = project.team;
  image.src = project.image;
  image.alt = `${project.title} preview`;
  live.href = project.live;
  github.href = project.github;
  durationDesktop.textContent = project.duration;
  titleMobile.textContent = project.title;
  techLineMobile.textContent = project.techLine;
  durationMobile.textContent = project.duration;

  techRow.innerHTML = project.tech
    .map((tech) => `<span class="tech-badge">${techIcons[tech] || ""}</span>`)
    .join("");
}

const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

if (burger && mobileMenu) {
  burger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    burger.classList.toggle("open", isOpen);
    burger.setAttribute("aria-expanded", String(isOpen));
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      burger.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const privacyCheckbox = document.getElementById("privacy");
const submitBtn = document.getElementById("submit-btn");
const feedback = document.getElementById("form-feedback");

function validateName() {
  const error = document.getElementById("name-error");
  if (!nameInput || !error) return false;

  if (nameInput.value.trim().length < 2) {
    error.textContent = "Please enter your name.";
    return false;
  }

  error.textContent = "";
  return true;
}

function validateEmail() {
  const error = document.getElementById("email-error");
  if (!emailInput || !error) return false;

  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());
  if (!valid) {
    error.textContent = "Please enter a valid email.";
    return false;
  }

  error.textContent = "";
  return true;
}

function validateMessage() {
  const error = document.getElementById("message-error");
  if (!messageInput || !error) return false;

  if (messageInput.value.trim().length < 10) {
    error.textContent = "Please write a slightly longer message.";
    return false;
  }

  error.textContent = "";
  return true;
}

function validatePrivacy() {
  const error = document.getElementById("privacy-error");
  if (!privacyCheckbox || !error) return false;

  if (!privacyCheckbox.checked) {
    error.textContent = "Please accept the privacy policy.";
    return false;
  }

  error.textContent = "";
  return true;
}

function updateSubmitState() {
  if (!submitBtn) return;

  const isValid = validateName() && validateEmail() && validateMessage() && validatePrivacy();
  submitBtn.disabled = !isValid;
}

nameInput?.addEventListener("blur", updateSubmitState);
emailInput?.addEventListener("blur", updateSubmitState);
messageInput?.addEventListener("blur", updateSubmitState);
privacyCheckbox?.addEventListener("change", updateSubmitState);
nameInput?.addEventListener("input", updateSubmitState);
emailInput?.addEventListener("input", updateSubmitState);
messageInput?.addEventListener("input", updateSubmitState);

document.getElementById("contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const valid = validateName() && validateEmail() && validateMessage() && validatePrivacy();
  if (!submitBtn || !feedback) return;

  submitBtn.disabled = !valid;
  if (!valid) return;

  feedback.textContent = "Message sent successfully.";
  event.target.reset();
  submitBtn.disabled = true;
});

renderSkills();
renderProjectTabs();
renderProjectCard();
