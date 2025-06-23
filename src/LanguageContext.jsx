import { createContext, useState } from "react";

export const LanguageContext = createContext();

const languages = ["JavaScript", "Python"];

const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(0);

  const toggleLanguage = () => {
    setCurrentLanguage((prevLanguage) => (prevLanguage + 1) % languages.length);
  };

  const value = {
    language: languages[currentLanguage],
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
