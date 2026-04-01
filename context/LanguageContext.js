import { createContext, useContext, useState } from "react";
import translations from "../Data/i18n";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("de");

  const t = (section, key) => translations[lang][section][key];
  const toggleLang = () => setLang((prev) => (prev === "de" ? "en" : "de"));

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
