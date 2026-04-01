const education = [
  {
    title: {
      de: "B.Sc. Wirtschaftsinformatik (Business Information Systems)",
      en: "B.Sc. Business Information Systems",
    },
    time: "2022 – 2026",
    from: "IU Internationale Hochschule – Leipzig",
    result: { de: "Abschluss: März 2026 · Note: 2,4", en: "Graduated: March 2026 · Grade: 2.4" },
  },
  {
    title: {
      de: "B.Sc. Informatik (nicht abgeschlossen)",
      en: "B.Sc. Computer Science (not completed)",
    },
    time: "2021 – 2022",
    from: "HTWK Leipzig – Leipzig",
    result: { de: "", en: "" },
  },
  {
    title: {
      de: "Fachhochschulreife – Technik",
      en: "Technical College Entrance Qualification",
    },
    time: "2019 – 2021",
    from: "Lehmbaugruppe – Leipzig",
    result: { de: "Note: 2,4", en: "Grade: 2.4" },
  },
];

const exams = [
  { title: { de: "Englisch", en: "English" }, result: { de: "C1", en: "C1" } },
  { title: { de: "Deutsch", en: "German" }, result: { de: "Muttersprache", en: "Native" } },
];

const skills = [
  {
    title: { de: "IT-Infrastruktur", en: "IT Infrastructure" },
    items: {
      de: ["Windows Server", "Linux Server", "VMware", "Active Directory", "Netzwerkverwaltung"],
      en: ["Windows Server", "Linux Server", "VMware", "Active Directory", "Network Administration"],
    },
  },
  {
    title: { de: "Support & Helpdesk", en: "Support & Helpdesk" },
    items: {
      de: ["2nd Level Helpdesk", "Ticket-Systeme", "Nutzer-Kommunikation", "De-Eskalation"],
      en: ["2nd Level Helpdesk", "Ticket Systems", "User Communication", "De-escalation"],
    },
  },
  {
    title: { de: "Entwicklung & Automatisierung", en: "Development & Automation" },
    items: {
      de: ["PHP", "Python", "Git", "CI/CD Pipelines", "Deployment-Prozesse"],
      en: ["PHP", "Python", "Git", "CI/CD Pipelines", "Deployment Processes"],
    },
  },
];

const experience = [
  {
    company: "Deutsches Rotes Kreuz (DRK)",
    title: {
      de: "IT-Administration · Kundensupport · Helpdesk",
      en: "IT Administration · Customer Support · Helpdesk",
    },
    time: "2022 – 2026",
    location: "Geithain, Deutschland",
    points: {
      de: [
        "2nd-Level-Helpdesk-Support für interne IT-Systeme und Anwender",
        "Administration von Windows- und Linux-Servern",
        "Verwaltung und Pflege von Active Directory",
        "Virtualisierung mit VMware",
        "Arbeit mit Ticket-Systemen im täglichen Betrieb",
        "Zusammenarbeit mit dem 1st-Level-Support zur Optimierung von Lösungsprozessen",
        "Vermittlung technischer Sachverhalte an nicht-technische Anwender",
      ],
      en: [
        "Second-level helpdesk support for internal IT systems and users",
        "Administration of Windows and Linux servers",
        "Management and maintenance of Active Directory",
        "Virtualization with VMware",
        "Daily operation of ticket systems",
        "Collaboration with first-level support to improve resolution workflows",
        "Translating technical issues into clear explanations for non-technical users",
      ],
    },
    links: [],
  },
  {
    company: "Mitteldeutscher Rundfunk (MDR)",
    title: {
      de: "Praktikant – Kamera & Technik",
      en: "Intern – Camera & Technical Department",
    },
    time: "2019 – 2020",
    location: "Leipzig, Deutschland",
    points: {
      de: [
        "Praktikum in der Kamera- und Technikabteilung",
        "Gerätewartung, Lagerverwaltung und Inventarunterstützung",
        "Koordination mit dem technischen Personal zur Sicherstellung der Geräteverfügbarkeit",
      ],
      en: [
        "Internship in the camera and technical department",
        "Equipment maintenance, storage organization, and inventory support",
        "Coordination with technical staff to ensure equipment availability and readiness",
      ],
    },
    links: [],
  },
];

export default { education, exams, skills, experience };
