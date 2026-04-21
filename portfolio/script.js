const LANGUAGE_STORAGE_KEY = "portfolio-language";
const CONTACT_API_ENDPOINT = "/api/contact";

const skills = [
  {
    label: "Angular",
    iconPath: "./assets/img/figma-assets/skills/angular.svg"
  },
  {
    label: "TypeScript",
    iconPath: "./assets/img/figma-assets/skills/typescript.svg"
  },
  {
    label: "JavaScript",
    iconPath: "./assets/img/figma-assets/skills/javascript.svg"
  },
  {
    label: "HTML",
    iconPath: "./assets/img/figma-assets/skills/html.svg"
  },
  {
    label: "CSS",
    iconPath: "./assets/img/figma-assets/skills/css.svg"
  },
  {
    label: "REST-API",
    iconPath: "./assets/img/figma-assets/skills/rest-api.svg"
  },
  {
    label: "Firebase",
    iconPath: "./assets/img/figma-assets/skills/firebase.svg"
  },
  {
    label: "Git",
    iconPath: "./assets/img/figma-assets/skills/git.svg"
  },
  {
    label: "Material Design",
    iconPath: "./assets/img/figma-assets/skills/material-design.svg"
  },
  {
    label: "Scrum",
    iconPath: "./assets/img/figma-assets/skills/scrum.svg"
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

const translations = {
  en: {
    nav: {
      whyMe: "Why me",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      role: "FRONTEND DEVELOPER",
      scrollDown: "Scroll down"
    },
    why: {
      title: "Why me",
      location: "I am located in Munich...",
      remote: "I am open to remote work...",
      relocate: "I am open to relocating...",
      copy:
        "Why are you passionate about coding? You can include some key traits like analytical thinking, creativity, persistence and collaboration. A problem-solving mindset is always nice to have."
    },
    shared: {
      letsTalk: "Let's talk"
    },
    skills: {
      title: "My Skills",
      learningTitle: "I am currently learning",
      learningText:
        "Show that you are motivated to continuously improve your skills, implement innovative solutions and stay abreast of new technologies."
    },
    projects: {
      title: "My Projects",
      aboutHeading: "About the project",
      processHeading: "How I have organised my work process",
      teamHeading: "My group work experience",
      technologies: "Technologies",
      liveTest: "Live Test",
      github: "GitHub",
      previewAltSuffix: "preview"
    },
    testimonials: {
      title: "Need a teamplayer? Here's what my colleagues say about me",
      linkedin: "Linked In Profile",
      sahra: {
        role: "Project DA Bubble",
        quote:
          '"Oguz Han had to develop, format and deliver content in collaboration with the team members. She is a reliable and friendly person."'
      },
      james: {
        role: "Project Join",
        quote:
          '"Oguz Han is a reliable and friendly person. Works in a structured way and writes a clear code. I recommend her as a colleague."'
      },
      evelyn: {
        role: "Project El Pollo Loco",
        quote:
          '"She is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clean code."'
      }
    },
    contact: {
      title: "Contact me",
      backToTop: "Back to top",
      copy:
        "Encourage people to contact you and describe what you are interested in. Show that you will add value to their projects through your work. Example: Feel free to get in touch with job offers or opportunities such as...",
      cta: "Let us work together!"
    },
    form: {
      nameLabel: "Your name",
      namePlaceholder: "Your name",
      emailLabel: "Your Email",
      emailPlaceholder: "Your Email",
      messageLabel: "Your Message",
      messagePlaceholder: "Your message",
      privacy: "I've read the privacy policy and agree to the processing of my data as outlined.",
      send: "Send",
      success: "Message sent successfully.",
      error: "Something went wrong. Please try again."
    },
    validation: {
      name: "Please enter your name.",
      email: "Please enter a valid email.",
      message: "Please write a slightly longer message.",
      privacy: "Please accept the privacy policy."
    },
    footer: {
      legalNotice: "Legal notice"
    },
    legal: {
      backToPortfolio: "Back to portfolio",
      title: "Legal Notice",
      imprintTitle: "Imprint",
      imprintItem1: "Oguz Han Yavuz",
      imprintItem2: "Ernst-Heiss-Gasse 1/2/5, 1110 Wien",
      imprintItem3: "1110 Wien",
      boardTitle: "Exploring the Board",
      boardEmail: "Email: office@oguzhan-yavuz.com",
      acceptanceTitle: "Acceptance of terms",
      acceptanceText:
        "By accessing and using this Portfolio [Product], you acknowledge and agree to the following terms and conditions, and any policies, guidelines, or amendments thereto that may be presented to you from time to time. We, the listed students, may update or change the terms and conditions from time to time without notice.",
      scopeTitle: "Scope and ownership of the product",
      scopeText1:
        "Portfolio has been developed as part of a student group project in a web development bootcamp at the Developer Akademie GmbH. It has an educational purpose and is not intended for extensive personal or business usage. As such, we cannot guarantee consistent availability, reliability, accuracy, or any other aspect of quality regarding this Product.",
      scopeText2:
        "The design of Portfolio is used by the Developer Akademie GmbH. Unauthorised reproduction, modification, distribution, or replication of the design is strictly prohibited.",
      rightsTitle: "Proprietary rights",
      rightsText:
        "Aside from the design owned by the Developer Akademie GmbH, we, the listed students, retain all proprietary rights in Portfolio, including any associated copyrighted material, trademarks, and other proprietary information.",
      useTitle: "Use of the product",
      useText:
        "Portfolio is intended to be used for lawful purposes only, in accordance with all applicable laws and regulations. Any use of Portfolio for illegal activities, or to harass, harm, threaten, or intimidate another person, is strictly prohibited. You are solely responsible for your interactions with other users of Portfolio.",
      disclaimerTitle: "Disclaimer of warranties and limitation of liability",
      disclaimerText:
        'Portfolio is provided "as is" without warranty of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event will we, the listed students, or the Developer Akademie, be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses, even if we have been advised of the possibility of such damages, arising from or in connection with the use or performance of Portfolio.',
      indemnityTitle: "Indemnity",
      indemnityText:
        "You agree to indemnify, defend and hold harmless us, the listed students, the Developer Akademie, and our affiliates, partners, officers, directors, agents, and employees, from and against any claim, demand, loss, damage, cost, or liability (including reasonable legal fees) arising out of or relating to your use of Portfolio and/or your breach of this Legal Notice.",
      contactText: "For any questions or notices, please contact us at office@oguzhan-yavuz.com",
      dateText: "Date: July 26, 2025"
    }
  },
  de: {
    nav: {
      whyMe: "Warum ich",
      skills: "Skills",
      projects: "Projekte",
      contact: "Kontakt"
    },
    hero: {
      role: "FRONTEND ENTWICKLER",
      scrollDown: "Nach unten scrollen"
    },
    why: {
      title: "Warum ich",
      location: "Ich bin in Wien ansässig.",
      remote: "Ich bin offen für Remote-Arbeit.",
      relocate: "Ich bin offen für einen Umzug.",
      copy:
        "Warum begeistere ich mich fürs Programmieren? Hier kannst du Eigenschaften wie analytisches Denken, Kreativität, Ausdauer und Zusammenarbeit hervorheben. Eine lösungsorientierte Denkweise ist dabei immer ein Plus."
    },
    shared: {
      letsTalk: "Lass uns sprechen"
    },
    skills: {
      title: "Meine Skills",
      learningTitle: "Ich lerne aktuell",
      learningText:
        "Zeige, dass du motiviert bist, deine Fähigkeiten stetig zu verbessern, innovative Lösungen umzusetzen und mit neuen Technologien Schritt zu halten."
    },
    projects: {
      title: "Meine Projekte",
      aboutHeading: "Über das Projekt",
      processHeading: "Wie ich meinen Arbeitsprozess organisiert habe",
      teamHeading: "Meine Erfahrung in der Teamarbeit",
      technologies: "Technologien",
      liveTest: "Live Test",
      github: "GitHub",
      previewAltSuffix: "Vorschau"
    },
    testimonials: {
      title: "Brauchst du einen Teamplayer? Das sagen meine Kolleginnen und Kollegen über mich",
      linkedin: "LinkedIn Profil",
      sahra: {
        role: "Projekt DA Bubble",
        quote:
          '"Oguz Han hat Inhalte gemeinsam mit dem Team entwickelt, aufbereitet und umgesetzt. Sie ist eine zuverlässige und freundliche Person."'
      },
      james: {
        role: "Projekt Join",
        quote:
          '"Oguz Han ist eine zuverlässige und freundliche Person. Er arbeitet strukturiert und schreibt klaren Code. Ich empfehle sie als Kollegin weiter."'
      },
      evelyn: {
        role: "Projekt El Pollo Loco",
        quote:
          '"Sie ist ein vertrauenswürdiger Teamplayer und kann gut mit dem Druck von Deadlines umgehen. Strukturiertes Arbeiten und sauberer Code."'
      }
    },
    contact: {
      title: "Kontakt",
      backToTop: "Zurück nach oben",
      copy:
        "Ermutige Menschen, dich zu kontaktieren, und beschreibe, wofür du dich interessierst. Zeige, welchen Mehrwert du mit deiner Arbeit in Projekte einbringst. Beispiel: Melde dich gerne bei Jobangeboten oder spannenden Möglichkeiten...",
      cta: "Lass uns zusammenarbeiten!"
    },
    form: {
      nameLabel: "Dein Name",
      namePlaceholder: "Dein Name",
      emailLabel: "Deine E-Mail",
      emailPlaceholder: "Deine E-Mail",
      messageLabel: "Deine Nachricht",
      messagePlaceholder: "Deine Nachricht",
      privacy: "Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.",
      send: "Senden",
      success: "Nachricht erfolgreich gesendet.",
      error: "Etwas ist schiefgelaufen. Bitte versuche es erneut."
    },
    validation: {
      name: "Bitte gib deinen Namen ein.",
      email: "Bitte gib eine gültige E-Mail-Adresse ein.",
      message: "Bitte schreibe eine etwas längere Nachricht.",
      privacy: "Bitte akzeptiere die Datenschutzerklärung."
    },
    footer: {
      legalNotice: "Impressum"
    },
    legal: {
      backToPortfolio: "Zurück zum Portfolio",
      title: "Impressum",
      imprintTitle: "Impressum",
      imprintItem1: "Oguz Han Yavuz",
      imprintItem2: "Ernst-Heiss-Gasse 1/2/5, 1110 Wien",
      imprintItem3: "1110 Wien",
      boardTitle: "Board erkunden",
      boardEmail: "E-Mail: office@oguzhan-yavuz.com",
      acceptanceTitle: "Akzeptanz der Bedingungen",
      acceptanceText:
        "Durch den Zugriff auf und die Nutzung dieses Portfolios [Produkt] bestätigst du, dass du die folgenden Bedingungen sowie alle Richtlinien, Leitfäden oder Änderungen akzeptierst, die dir von Zeit zu Zeit präsentiert werden. Wir, die aufgeführten Studierenden, können die Bedingungen jederzeit ohne vorherige Ankündigung aktualisieren oder ändern.",
      scopeTitle: "Umfang und Eigentum am Produkt",
      scopeText1:
        "Das Portfolio wurde im Rahmen eines studentischen Gruppenprojekts in einem Webentwicklungs-Bootcamp der Developer Akademie GmbH erstellt. Es dient ausschließlich Bildungszwecken und ist nicht für eine umfangreiche persönliche oder geschäftliche Nutzung vorgesehen. Daher können wir keine durchgehende Verfügbarkeit, Zuverlässigkeit, Genauigkeit oder andere Qualitätsmerkmale dieses Produkts garantieren.",
      scopeText2:
        "Das Design des Portfolios wird von der Developer Akademie GmbH genutzt. Eine unbefugte Vervielfältigung, Veränderung, Verbreitung oder Nachbildung des Designs ist streng untersagt.",
      rightsTitle: "Eigentumsrechte",
      rightsText:
        "Abgesehen vom Design, das der Developer Akademie GmbH gehört, behalten wir, die aufgeführten Studierenden, alle Eigentumsrechte am Portfolio, einschließlich sämtlicher urheberrechtlich geschützten Materialien, Marken und sonstiger proprietärer Informationen.",
      useTitle: "Nutzung des Produkts",
      useText:
        "Das Portfolio darf ausschließlich für rechtmäßige Zwecke und in Übereinstimmung mit allen geltenden Gesetzen und Vorschriften genutzt werden. Jede Nutzung für illegale Aktivitäten oder um andere Personen zu belästigen, zu schädigen, zu bedrohen oder einzuschüchtern, ist strengstens untersagt. Du bist allein für deine Interaktionen mit anderen Nutzern des Portfolios verantwortlich.",
      disclaimerTitle: "Gewährleistungsausschluss und Haftungsbeschränkung",
      disclaimerText:
        'Das Portfolio wird "wie gesehen" ohne jegliche ausdrückliche oder stillschweigende Gewährleistung bereitgestellt, einschließlich, aber nicht beschränkt auf, die stillschweigenden Gewährleistungen der Marktgängigkeit, Eignung für einen bestimmten Zweck und Nichtverletzung von Rechten Dritter. In keinem Fall haften wir, die aufgeführten Studierenden, oder die Developer Akademie für direkte, indirekte, zufällige, besondere, Folge- oder Beispielschäden, einschließlich, aber nicht beschränkt auf entgangene Gewinne, Goodwill, Nutzungsausfälle, Datenverluste oder sonstige immaterielle Schäden, selbst wenn wir auf die Möglichkeit solcher Schäden hingewiesen wurden, die aus der Nutzung oder Leistung des Portfolios entstehen.',
      indemnityTitle: "Freistellung",
      indemnityText:
        "Du verpflichtest dich, uns, die aufgeführten Studierenden, die Developer Akademie sowie unsere verbundenen Unternehmen, Partner, leitenden Angestellten, Direktoren, Vertreter und Mitarbeitenden von allen Ansprüchen, Forderungen, Verlusten, Schäden, Kosten oder Verbindlichkeiten (einschließlich angemessener Anwaltskosten) freizustellen, die sich aus deiner Nutzung des Portfolios und/oder deinem Verstoß gegen dieses Impressum ergeben.",
      contactText: "Bei Fragen oder Hinweisen kontaktiere uns bitte unter office@oguzhan-yavuz.com.",
      dateText: "Datum: 26. Juli 2025"
    }
  }
};

const projects = [
  {
    key: "dabubble",
    tab: { en: "1. DA Bubble", de: "1. DA Bubble" },
    title: { en: "DA Bubble", de: "DA Bubble" },
    techLine: {
      en: "Technologies Angular TypeScript Firebase",
      de: "Technologien Angular TypeScript Firebase"
    },
    duration: { en: "Duration: 3 weeks", de: "Dauer: 3 Wochen" },
    description: {
      en:
        "This app is a Slack clone. It improves team communication and collaboration with an intuitive interface, real-time messaging and clearly structured channels.",
      de:
        "Diese App ist ein Slack-Klon. Sie verbessert Teamkommunikation und Zusammenarbeit durch eine intuitive Oberflaeche, Echtzeit-Nachrichten und klar strukturierte Kanaele."
    },
    process: {
      en:
        "The project was split into reusable modules and components. Clear naming, documentation and testing helped keep the code base clean and maintainable.",
      de:
        "Das Projekt wurde in wiederverwendbare Module und Komponenten aufgeteilt. Klare Benennung, Dokumentation und Tests haben geholfen, die Codebasis sauber und wartbar zu halten."
    },
    team: {
      en:
        "In the team, I contributed to core features, coordinated implementation details and supported smooth collaboration across the project.",
      de:
        "Im Team habe ich an zentralen Features gearbeitet, die Umsetzung abgestimmt und zu einer reibungslosen Zusammenarbeit im Projekt beigetragen."
    },
    live: "https://join.oguzhan-yavuz.com",
    github: "https://github.com/OguzHanYav/Join-portfolio",
    image: "./assets/img/project-dabubble.svg",
    tech: ["angular", "ts", "firebase"]
  },
  {
    key: "elpolloloco",
    tab: { en: "2. El Pollo Loco", de: "2. El Pollo Loco" },
    title: { en: "El Pollo Loco", de: "El Pollo Loco" },
    techLine: {
      en: "Technologies JavaScript HTML CSS",
      de: "Technologien JavaScript HTML CSS"
    },
    duration: { en: "Duration: 5 weeks", de: "Dauer: 5 Wochen" },
    description: {
      en:
        "A browser side-scroller game with character animations, collectable items and boss fights, focused on smooth controls and playful visual feedback.",
      de:
        "Ein Browser-Side-Scroller mit Charakter-Animationen, sammelbaren Elementen und Bosskämpfen, mit Fokus auf flüssige Steuerung und verspieltes visuelles Feedback."
    },
    process: {
      en:
        "The work process was organised with reusable classes, separated game logic and structured asset handling. Iterative testing ensured stable gameplay and maintainability.",
      de:
        "Der Arbeitsprozess wurde mit wiederverwendbaren Klassen, getrennter Spiellogik und strukturierter Asset-Verwaltung aufgebaut. Iterative Tests sorgten für stabiles Gameplay und Wartbarkeit."
    },
    team: {
      en:
        "This project strengthened collaboration through feature planning, animation reviews and bug fixing in short iterative cycles.",
      de:
        "Dieses Projekt hat die Zusammenarbeit durch Feature-Planung, Animations-Reviews und Bugfixing in kurzen Iterationen gestärkt."
    },
    live: "https://elpolloloco.oguzhan-yavuz.com",
    github: "https://github.com/OguzHanYav/elPolloLoco",
    image: "./assets/img/project-sharkie.svg",
    tech: ["js", "html", "css"]
  },
  {
    key: "join",
    tab: { en: "3. Join", de: "3. Join" },
    title: { en: "Join", de: "Join" },
    techLine: {
      en: "Technologies JavaScript REST-API Firebase",
      de: "Technologien JavaScript REST-API Firebase"
    },
    duration: { en: "Duration: 6 weeks", de: "Dauer: 6 Wochen" },
    description: {
      en:
        "A task management board for structured workflows, assignments and progress tracking with a clean dashboard layout.",
      de:
        "Ein Task-Management-Board für strukturierte Workflows, Zuweisungen und Fortschrittsverfolgung mit einem klaren Dashboard-Layout."
    },
    process: {
      en:
        "Features were broken into reusable components and clear modules. I focused on documentation, naming conventions and maintainable styling.",
      de:
        "Features wurden in wiederverwendbare Komponenten und klare Module aufgeteilt. Mein Fokus lag auf Dokumentation, Benennungen und wartbaren Styles."
    },
    team: {
      en:
        "Working as part of a team improved communication, code review routines and the ability to split ownership across features.",
      de:
        "Die Arbeit im Team hat Kommunikation, Code-Review-Routinen und die Aufteilung von Verantwortung über mehrere Features hinweg verbessert."
    },
    live: "https://join.oguzhan-yavuz.com",
    github: "https://github.com/OguzHanYav/Join-portfolio",
    image: "./assets/img/project-join.svg",
    tech: ["js", "api", "firebase"]
  },
  {
    key: "ongoing",
    tab: { en: "4. Ongoing Project", de: "4. Laufendes Projekt" },
    title: { en: "Ongoing Project", de: "Laufendes Projekt" },
    techLine: {
      en: "Technologies TypeScript Git",
      de: "Technologien TypeScript Git"
    },
    duration: { en: "Duration: ongoing", de: "Dauer: fortlaufend" },
    description: {
      en:
        "A current learning project where modern frontend patterns, accessibility and component structure continue to be refined.",
      de:
        "Ein aktuelles Lernprojekt, in dem moderne Frontend-Muster, Barrierefreiheit und Komponentenstrukturen weiter verfeinert werden."
    },
    process: {
      en:
        "The process is centred around continuous iteration, prototyping and polishing the interaction design for desktop and mobile.",
      de:
        "Der Prozess ist auf kontinuierliche Iteration, Prototyping und die Verfeinerung des Interaktionsdesigns für Desktop und Mobile ausgerichtet."
    },
    team: {
      en:
        "It supports stronger collaboration habits, clearer planning and better communication of progress.",
      de:
        "Es unterstützt stärkere Kollaborationsgewohnheiten, klarere Planung und eine bessere Kommunikation von Fortschritten."
    },
    live: "#",
    github: "#",
    image: "./assets/img/project-ongoing.svg",
    tech: ["ts", "git"]
  }
];

const whyHighlights = [
  {
    icon: "./assets/img/figma-web/Group 60.svg",
    textKey: "why.location"
  },
  {
    icon: "./assets/img/figma-web/Icon Remote.svg",
    textKey: "why.remote"
  },
  {
    icon: "./assets/img/figma-web/Group 26.svg",
    textKey: "why.relocate"
  }
];

let currentLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) || "en";
let currentProjectIndex = 0;
let whyHighlightRunId = 0;

const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const privacyCheckbox = document.getElementById("privacy");
const submitBtn = document.getElementById("submit-btn");
const feedback = document.getElementById("form-feedback");
const whyHighlight = document.getElementById("why-highlight");
const whyHighlightIcon = document.getElementById("why-highlight-icon");
const whyHighlightText = document.getElementById("why-highlight-text");
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

function getTranslation(path, language = currentLanguage) {
  return path.split(".").reduce((value, segment) => value?.[segment], translations[language]);
}

function getLocalizedValue(value) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[currentLanguage] ?? value.en ?? Object.values(value)[0];
  }

  return value;
}

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function getWhyHighlightItems() {
  return whyHighlights.map((item) => ({
    icon: item.icon,
    text: getTranslation(item.textKey) || ""
  }));
}

function getWhyHighlightTextParts(text) {
  const suffix = text.endsWith("...") ? "..." : "";
  const coreText = suffix ? text.slice(0, -suffix.length) : text;

  return { coreText, suffix };
}

function setWhyHighlightText(text = "", suffix = "") {
  if (!whyHighlightText) return;

  whyHighlightText.textContent = `${text}${suffix}`;
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
      const { coreText, suffix } = getWhyHighlightTextParts(item.text);

      whyHighlightIcon.classList.remove("is-visible");
      whyHighlightIcon.src = item.icon;
      setWhyHighlightText("", suffix);
      whyHighlight.setAttribute("aria-label", item.text);

      await wait(140);
      if (runId !== whyHighlightRunId) return;

      whyHighlightIcon.classList.add("is-visible");

      await wait(240);
      if (runId !== whyHighlightRunId) return;

      for (let index = 1; index <= coreText.length; index += 1) {
        setWhyHighlightText(coreText.slice(0, index), suffix);
        await wait(48);
        if (runId !== whyHighlightRunId) return;
      }

      await wait(1200);
      if (runId !== whyHighlightRunId) return;

      for (let index = coreText.length - 1; index >= 0; index -= 1) {
        setWhyHighlightText(coreText.slice(0, index), suffix);
        await wait(28);
        if (runId !== whyHighlightRunId) return;
      }

      whyHighlightIcon.classList.remove("is-visible");

      await wait(280);
      if (runId !== whyHighlightRunId) return;
    }
  }
}

function startWhyHighlightLoop() {
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

function updateDocumentLanguage() {
  document.documentElement.lang = currentLanguage;

  const titleKey = `title${currentLanguage.charAt(0).toUpperCase()}${currentLanguage.slice(1)}`;
  const pageTitle = document.body?.dataset?.[titleKey];
  if (pageTitle) {
    document.title = pageTitle;
  }
}

function updateLanguageButtons() {
  document.querySelectorAll(".lang-btn[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === currentLanguage);
    button.setAttribute("aria-pressed", String(button.dataset.lang === currentLanguage));
  });
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getTranslation(element.dataset.i18n);
    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = getTranslation(element.dataset.i18nPlaceholder);
    if (typeof value === "string") {
      element.setAttribute("placeholder", value);
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = getTranslation(element.dataset.i18nAriaLabel);
    if (typeof value === "string") {
      element.setAttribute("aria-label", value);
    }
  });
}

function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container) return;

  container.innerHTML = skills
    .map(
      (skill) => `
        <article class="skill-card">
          <img src="${skill.iconPath}" alt="${skill.label}" class="skill-icon-image" loading="lazy" />
        </article>
      `
    )
    .join("");
}

function renderProjectTabs() {
  const tabsContainer = document.getElementById("project-tabs");
  if (!tabsContainer) return;

  tabsContainer.innerHTML = projects
    .map((project, index) => {
      const tabLabel = getLocalizedValue(project.tab);
      const activeClass = index === currentProjectIndex ? "active" : "";

      return `
        <button type="button" class="project-tab ${activeClass}" data-index="${index}">
          ${tabLabel}
        </button>
      `;
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

function renderProjectCard() {
  const project = projects[currentProjectIndex];
  if (!project) return;

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

  const localizedTitle = getLocalizedValue(project.title);
  const localizedDuration = getLocalizedValue(project.duration);

  description.textContent = getLocalizedValue(project.description);
  process.textContent = getLocalizedValue(project.process);
  team.textContent = getLocalizedValue(project.team);
  image.src = project.image;
  image.alt = `${localizedTitle} ${getTranslation("projects.previewAltSuffix")}`;
  live.href = project.live;
  github.href = project.github;
  durationDesktop.textContent = localizedDuration;
  titleMobile.textContent = localizedTitle;
  techLineMobile.textContent = getLocalizedValue(project.techLine);
  durationMobile.textContent = localizedDuration;

  techRow.innerHTML = project.tech
    .map((tech) => `<span class="tech-badge">${techIcons[tech] || ""}</span>`)
    .join("");
}

function setLanguage(language) {
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

  if (submitBtn) {
    updateSubmitState();
  }

  if (feedback?.textContent.trim()) {
    const feedbackKey = feedback.dataset.state === "error" ? "form.error" : "form.success";
    feedback.textContent = getTranslation(feedbackKey);
  }
}

function closeMobileMenu() {
  if (!burger || !mobileMenu) return;

  mobileMenu.classList.remove("open");
  burger.classList.remove("open");
  burger.setAttribute("aria-expanded", "false");
}

if (burger && mobileMenu) {
  burger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    burger.classList.toggle("open", isOpen);
    burger.setAttribute("aria-expanded", String(isOpen));
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });
}

document.querySelectorAll(".lang-btn[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
    closeMobileMenu();
  });
});

function validateName() {
  const error = document.getElementById("name-error");
  if (!nameInput || !error) return false;

  if (nameInput.value.trim().length < 2) {
    error.textContent = getTranslation("validation.name");
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
    error.textContent = getTranslation("validation.email");
    return false;
  }

  error.textContent = "";
  return true;
}

function validateMessage() {
  const error = document.getElementById("message-error");
  if (!messageInput || !error) return false;

  if (messageInput.value.trim().length < 10) {
    error.textContent = getTranslation("validation.message");
    return false;
  }

  error.textContent = "";
  return true;
}

function validatePrivacy() {
  const error = document.getElementById("privacy-error");
  if (!privacyCheckbox || !error) return false;

  if (!privacyCheckbox.checked) {
    privacyCheckbox.classList.add("is-invalid");
    error.textContent = getTranslation("validation.privacy");
    return false;
  }

  privacyCheckbox.classList.remove("is-invalid");
  error.textContent = "";
  return true;
}

function updateSubmitState() {
  if (!submitBtn) return;

  const isValid = validateName() && validateEmail() && validateMessage() && validatePrivacy();
  submitBtn.disabled = !isValid;
}

async function submitContactRequest() {
  const payload = {
    name: nameInput?.value.trim() || "",
    email: emailInput?.value.trim() || "",
    message: messageInput?.value.trim() || "",
    language: currentLanguage
  };

  const response = await fetch(CONTACT_API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(payload)
  });

  let body = {};
  try {
    body = await response.json();
  } catch (error) {
    body = {};
  }

  if (!response.ok || !body.ok) {
    throw new Error(body.error || "Request failed");
  }
}

nameInput?.addEventListener("blur", updateSubmitState);
emailInput?.addEventListener("blur", updateSubmitState);
messageInput?.addEventListener("blur", updateSubmitState);
privacyCheckbox?.addEventListener("change", updateSubmitState);
nameInput?.addEventListener("input", updateSubmitState);
emailInput?.addEventListener("input", updateSubmitState);
messageInput?.addEventListener("input", updateSubmitState);

document.getElementById("contact-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const valid = validateName() && validateEmail() && validateMessage() && validatePrivacy();
  if (!submitBtn || !feedback) return;

  submitBtn.disabled = !valid;
  if (!valid) return;

  feedback.textContent = "";
  submitBtn.disabled = true;

  try {
    await submitContactRequest();
    feedback.dataset.state = "success";
    feedback.textContent = getTranslation("form.success");
    event.target.reset();
  } catch (error) {
    feedback.dataset.state = "error";
    feedback.textContent = getTranslation("form.error");
    submitBtn.disabled = false;
    return;
  }

  submitBtn.disabled = true;
});

if (typeof reducedMotionQuery.addEventListener === "function") {
  reducedMotionQuery.addEventListener("change", startWhyHighlightLoop);
}

renderSkills();
setLanguage(currentLanguage);
