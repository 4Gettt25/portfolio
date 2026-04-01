import about from "../Data/About";
import contact_links from "../Data/Contact";
import { useLanguage } from "../context/LanguageContext";

const Header = () => {
  const { lang, t, toggleLang } = useLanguage();

  return (
    <header id="header">
      <div className="container">
        <h1>{about.name}</h1>
        <h2 className="typewriter">
          <span id="mainSpan" data-text={about.about}></span>
          <span id="cursorSpan"></span>
        </h2>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <button className="lang-toggle" onClick={toggleLang} aria-label="Toggle language">
                {lang === "de" ? "EN" : "DE"}
              </button>
            </li>
            <li>
              <a className="nav-link active" href="#header">
                {t("nav", "home")}
              </a>
            </li>
            <li>
              <a className="nav-link" href="#about">
                {t("nav", "about")}
              </a>
            </li>
            <li>
              <a className="nav-link" href="#resume">
                {t("nav", "resume")}
              </a>
            </li>
            <li>
              <a className="nav-link" href="#portfolio">
                {t("nav", "portfolio")}
              </a>
            </li>
            <li>
              <a className="nav-link" href="#contact">
                {t("nav", "contact")}
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
        <div className="social-links">
          <a
            href={contact_links.github}
            target="_blank"
            rel="noreferrer"
            className="github"
            aria-label="github"
          >
            <i className="bi bi-github" />
          </a>
          <a
            href={contact_links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="linkedin"
            aria-label="linkedin"
          >
            <i className="bi bi-linkedin" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
