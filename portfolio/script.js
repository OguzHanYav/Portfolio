const LANGUAGE_STORAGE_KEY = "portfolio-language";

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
      location: "I am located in Munich.",
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
        role: "Project Sharkie",
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
      success: "Message sent successfully."
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
      imprintItem1: "[Student Name List]",
      imprintItem2: "[Address of the JOIN operator - eg one of the students]",
      imprintItem3: "[Postcode and city]",
      boardTitle: "Exploring the Board",
      boardEmail: "Email: [Email]",
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
      contactText: "For any questions or notices, please contact us at [Contact Email]",
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
      location: "Ich bin in Muenchen ansaessig.",
      copy:
        "Warum begeistere ich mich fuers Programmieren? Hier kannst du Eigenschaften wie analytisches Denken, Kreativitaet, Ausdauer und Zusammenarbeit hervorheben. Eine loesungsorientierte Denkweise ist dabei immer ein Plus."
    },
    shared: {
      letsTalk: "Lass uns sprechen"
    },
    skills: {
      title: "Meine Skills",
      learningTitle: "Ich lerne aktuell",
      learningText:
        "Zeige, dass du motiviert bist, deine Faehigkeiten stetig zu verbessern, innovative Loesungen umzusetzen und mit neuen Technologien Schritt zu halten."
    },
    projects: {
      title: "Meine Projekte",
      aboutHeading: "Ueber das Projekt",
      processHeading: "Wie ich meinen Arbeitsprozess organisiert habe",
      teamHeading: "Meine Erfahrung in der Teamarbeit",
      technologies: "Technologien",
      liveTest: "Live Test",
      github: "GitHub",
      previewAltSuffix: "Vorschau"
    },
    testimonials: {
      title: "Brauchst du einen Teamplayer? Das sagen meine Kolleginnen und Kollegen ueber mich",
      linkedin: "LinkedIn Profil",
      sahra: {
        role: "Projekt DA Bubble",
        quote:
          '"Oguz Han hat Inhalte gemeinsam mit dem Team entwickelt, aufbereitet und umgesetzt. Sie ist eine zuverlaessige und freundliche Person."'
      },
      james: {
        role: "Projekt Join",
        quote:
          '"Oguz Han ist eine zuverlaessige und freundliche Person. Er arbeitet strukturiert und schreibt klaren Code. Ich empfehle sie als Kollegin weiter."'
      },
      evelyn: {
        role: "Projekt Sharkie",
        quote:
          '"Sie ist ein vertrauenswuerdiger Teamplayer und kann gut mit dem Druck von Deadlines umgehen. Strukturiertes Arbeiten und sauberer Code."'
      }
    },
    contact: {
      title: "Kontakt",
      backToTop: "Zurueck nach oben",
      copy:
        "Ermutige Menschen, dich zu kontaktieren, und beschreibe, wofuer du dich interessierst. Zeige, welchen Mehrwert du mit deiner Arbeit in Projekte einbringst. Beispiel: Melde dich gerne bei Jobangeboten oder spannenden Moeglichkeiten...",
      cta: "Lass uns zusammenarbeiten!"
    },
    form: {
      nameLabel: "Dein Name",
      namePlaceholder: "Dein Name",
      emailLabel: "Deine E-Mail",
      emailPlaceholder: "Deine E-Mail",
      messageLabel: "Deine Nachricht",
      messagePlaceholder: "Deine Nachricht",
      privacy: "Ich habe die Datenschutzerklaerung gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.",
      send: "Senden",
      success: "Nachricht erfolgreich gesendet."
    },
    validation: {
      name: "Bitte gib deinen Namen ein.",
      email: "Bitte gib eine gueltige E-Mail-Adresse ein.",
      message: "Bitte schreibe eine etwas laengere Nachricht.",
      privacy: "Bitte akzeptiere die Datenschutzerklaerung."
    },
    footer: {
      legalNotice: "Impressum"
    },
    legal: {
      backToPortfolio: "Zurueck zum Portfolio",
      title: "Impressum",
      imprintTitle: "Impressum",
      imprintItem1: "[Liste der Studierenden]",
      imprintItem2: "[Adresse des JOIN-Betreibers - z. B. von einem der Studierenden]",
      imprintItem3: "[Postleitzahl und Ort]",
      boardTitle: "Board erkunden",
      boardEmail: "E-Mail: [E-Mail]",
      acceptanceTitle: "Akzeptanz der Bedingungen",
      acceptanceText:
        "Durch den Zugriff auf und die Nutzung dieses Portfolios [Produkt] bestaetigst du, dass du die folgenden Bedingungen sowie alle Richtlinien, Leitfaeden oder Aenderungen akzeptierst, die dir von Zeit zu Zeit praesentiert werden. Wir, die aufgefuehrten Studierenden, koennen die Bedingungen jederzeit ohne vorherige Ankuendigung aktualisieren oder aendern.",
      scopeTitle: "Umfang und Eigentum am Produkt",
      scopeText1:
        "Das Portfolio wurde im Rahmen eines studentischen Gruppenprojekts in einem Webentwicklungs-Bootcamp der Developer Akademie GmbH erstellt. Es dient ausschliesslich Bildungszwecken und ist nicht fuer eine umfangreiche persoenliche oder geschaeftliche Nutzung vorgesehen. Daher koennen wir keine durchgehende Verfuegbarkeit, Zuverlaessigkeit, Genauigkeit oder andere Qualitaetsmerkmale dieses Produkts garantieren.",
      scopeText2:
        "Das Design des Portfolios wird von der Developer Akademie GmbH genutzt. Eine unbefugte Vervielfaeltigung, Veraenderung, Verbreitung oder Nachbildung des Designs ist streng untersagt.",
      rightsTitle: "Eigentumsrechte",
      rightsText:
        "Abgesehen vom Design, das der Developer Akademie GmbH gehoert, behalten wir, die aufgefuehrten Studierenden, alle Eigentumsrechte am Portfolio, einschliesslich saemtlicher urheberrechtlich geschuetzten Materialien, Marken und sonstiger proprietaerer Informationen.",
      useTitle: "Nutzung des Produkts",
      useText:
        "Das Portfolio darf ausschliesslich fuer rechtmaessige Zwecke und in Uebereinstimmung mit allen geltenden Gesetzen und Vorschriften genutzt werden. Jede Nutzung fuer illegale Aktivitaeten oder um andere Personen zu belaestigen, zu schaedigen, zu bedrohen oder einzuschuechtern, ist strengstens untersagt. Du bist allein fuer deine Interaktionen mit anderen Nutzern des Portfolios verantwortlich.",
      disclaimerTitle: "Gewaehrleistungsausschluss und Haftungsbeschraenkung",
      disclaimerText:
        'Das Portfolio wird "wie gesehen" ohne jegliche ausdrueckliche oder stillschweigende Gewaehrleistung bereitgestellt, einschliesslich, aber nicht beschraenkt auf, die stillschweigenden Gewaehrleistungen der Marktgaengigkeit, Eignung fuer einen bestimmten Zweck und Nichtverletzung von Rechten Dritter. In keinem Fall haften wir, die aufgefuehrten Studierenden, oder die Developer Akademie fuer direkte, indirekte, zufaellige, besondere, Folge- oder Beispielschäden, einschliesslich, aber nicht beschraenkt auf entgangene Gewinne, Goodwill, Nutzungsausfaelle, Datenverluste oder sonstige immaterielle Schaeden, selbst wenn wir auf die Moeglichkeit solcher Schaeden hingewiesen wurden, die aus der Nutzung oder Leistung des Portfolios entstehen.',
      indemnityTitle: "Freistellung",
      indemnityText:
        "Du verpflichtest dich, uns, die aufgefuehrten Studierenden, die Developer Akademie sowie unsere verbundenen Unternehmen, Partner, leitenden Angestellten, Direktoren, Vertreter und Mitarbeitenden von allen Anspruechen, Forderungen, Verlusten, Schaeden, Kosten oder Verbindlichkeiten (einschliesslich angemessener Anwaltskosten) freizustellen, die sich aus deiner Nutzung des Portfolios und/oder deinem Verstoss gegen dieses Impressum ergeben.",
      contactText: "Bei Fragen oder Hinweisen kontaktiere uns bitte unter [Kontakt-E-Mail].",
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
    live: "#",
    github: "#",
    image: "./assets/img/project-dabubble.svg",
    tech: ["angular", "ts", "firebase"]
  },
  {
    key: "sharkie",
    tab: { en: "2. Sharkie", de: "2. Sharkie" },
    title: { en: "Sharkie", de: "Sharkie" },
    techLine: {
      en: "Technologies JavaScript HTML CSS",
      de: "Technologien JavaScript HTML CSS"
    },
    duration: { en: "Duration: 5 weeks", de: "Dauer: 5 Wochen" },
    description: {
      en:
        "A browser game with playful animations, collectible elements and a strong focus on smooth interaction and visual feedback.",
      de:
        "Ein Browser-Spiel mit verspielten Animationen, sammelbaren Elementen und einem klaren Fokus auf fluessige Interaktion und visuelles Feedback."
    },
    process: {
      en:
        "The work process was organised through reusable scenes, separated game logic and structured asset handling. Documentation and testing kept the project maintainable.",
      de:
        "Der Arbeitsprozess wurde ueber wiederverwendbare Szenen, getrennte Spiellogik und strukturierte Asset-Verwaltung organisiert. Dokumentation und Tests hielten das Projekt wartbar."
    },
    team: {
      en:
        "This project strengthened collaboration around animation reviews, bug fixing and planning gameplay features step by step.",
      de:
        "Dieses Projekt hat die Zusammenarbeit bei Animations-Reviews, Bugfixing und der schrittweisen Planung von Gameplay-Features gestaerkt."
    },
    live: "#",
    github: "#",
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
        "Ein Task-Management-Board fuer strukturierte Workflows, Zuweisungen und Fortschrittsverfolgung mit einem klaren Dashboard-Layout."
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
        "Die Arbeit im Team hat Kommunikation, Code-Review-Routinen und die Aufteilung von Verantwortung ueber mehrere Features hinweg verbessert."
    },
    live: "#",
    github: "#",
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
        "Der Prozess ist auf kontinuierliche Iteration, Prototyping und die Verfeinerung des Interaktionsdesigns fuer Desktop und Mobile ausgerichtet."
    },
    team: {
      en:
        "It supports stronger collaboration habits, clearer planning and better communication of progress.",
      de:
        "Es unterstuetzt staerkere Kollaborationsgewohnheiten, klarere Planung und eine bessere Kommunikation von Fortschritten."
    },
    live: "#",
    github: "#",
    image: "./assets/img/project-ongoing.svg",
    tech: ["ts", "git"]
  }
];

let currentLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) || "en";
let currentProjectIndex = 0;

const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const privacyCheckbox = document.getElementById("privacy");
const submitBtn = document.getElementById("submit-btn");
const feedback = document.getElementById("form-feedback");

function getTranslation(path, language = currentLanguage) {
  return path.split(".").reduce((value, segment) => value?.[segment], translations[language]);
}

function getLocalizedValue(value) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[currentLanguage] ?? value.en ?? Object.values(value)[0];
  }

  return value;
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
  renderProjectTabs();
  renderProjectCard();

  if (submitBtn) {
    updateSubmitState();
  }

  if (feedback?.textContent.trim()) {
    feedback.textContent = getTranslation("form.success");
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
    error.textContent = getTranslation("validation.privacy");
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

  feedback.textContent = getTranslation("form.success");
  event.target.reset();
  submitBtn.disabled = true;
});

renderSkills();
setLanguage(currentLanguage);
