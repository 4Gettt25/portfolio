// Filters
const filter_app = "filter-app";
const filter_java = "filter-java";
const filter_infra = "filter-infra";

const filters = [filter_app, filter_java, filter_infra];

const generateFilterString = (...fils) => {
  return Array.from(fils).join(" ");
};

// Category Types
const cat_types = {
  [filter_app]: "App",
  [filter_java]: "Java",
  [filter_infra]: "Infrastruktur",
};

// Projects
const projects = [
  {
    name: "Recipe Collection",
    filter: generateFilterString(filter_app),
    img: "recipe-collection",
    slides: 1,
    urls: [
      ["GitHub", "https://github.com/4Gettt25/Recipe-Colletion"],
    ],
    desc: [
      "Plattformübergreifende Rezeptverwaltung – Windows Desktop-App, Android-App und lokales Backend ohne Cloud.",
      "Stack: React, TypeScript, Electron, Express, SQLite, Capacitor, Tailwind CSS",
      "Features: Rezepte mit Zutaten, Tags & Bewertungen, Bild-Upload, Wi-Fi-Sync zwischen Desktop und Android via QR-Code, Offline-Support, Windows-Tray-Integration und Auto-Update.",
    ],
  },
  {
    name: "Logbook – Spring Boot",
    filter: generateFilterString(filter_java),
    img: "logbook-spring",
    slides: 2,
    urls: [
      ["GitHub", "https://github.com/4Gettt25/logbook-uni/tree/spring"],
    ],
    desc: [
      "Log-Management-Webanwendung mit REST-API und Web-UI zur Verwaltung von Server-Logs.",
      "Stack: Java 17, Spring Boot, Thymeleaf, Bootstrap, H2/PostgreSQL, Flyway, Maven",
      "Features: CRUD, Paging & Filterung, CSV/JSON-Export, Multi-Format-Dateiupload (Log4j, Syslog, Nginx), Dashboard.",
    ],
  },
  {
    name: "Logbook – Javalin",
    filter: generateFilterString(filter_java),
    img: "logbook-javalin",
    slides: 2,
    urls: [
      ["GitHub", "https://github.com/4Gettt25/logbook-uni/tree/javalin"],
    ],
    desc: [
      "Gleiche Logbook-Funktionalität wie der Spring-Branch, aber mit dem leichtgewichtigen Javalin-Framework umgesetzt.",
      "Stack: Java 17, Javalin, Hibernate, Thymeleaf, Bootstrap, H2/PostgreSQL, Flyway, Maven",
      "Features: CRUD, Paging & Filterung, CSV/JSON-Export, Multi-Format-Log-Parser, REST-API.",
    ],
  },
  {
    name: "Ticket System",
    filter: generateFilterString(filter_java, filter_infra),
    img: "ticket-system",
    slides: 2,
    urls: [],
    desc: [
      "IT-Ticketsystem für eine NPO – abgebildet werden typische IT-Administrations-Workflows mit Rollensystem und Zeiterfassung.",
      "Stack: Java 8, Payara 5, JSF, JPA 2.1, CDI, MySQL 8, Maven, EAR-Deployment",
      "Features: Ticket-Lifecycle (NEW → CLOSED), Rollenverwaltung (Admin/Agent/Requester), Zeiterfassung pro Ticket, XSS-Filter, Deployment via GitLab CI.",
    ],
  },
];

// Get Details
const getDetails = (id) => {
  if (!id || id < 0 || id >= projects.length) return projects[0];

  const pr = projects[id];
  let fils_ = pr.filter.split(" ");
  let cats_ = [];
  fils_.forEach((el) => {
    cats_ = [...cats_, cat_types[el]];
  });
  let cat = cats_.join(", ");
  pr["category"] = cat;

  return pr;
};

export default { filters, projects, getDetails };
