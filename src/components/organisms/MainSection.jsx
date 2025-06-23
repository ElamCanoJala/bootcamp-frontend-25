import { useContext } from "react";
import { LanguageContext } from "../../LanguageContext";

// const languages = ["JavaScript", "Python"];

const MainSection = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div>
      <p id="favoriteLanguage">favorite programing language: {language}</p>
      <button id="changeFavorite" onClick={toggleLanguage}>
        toggle language
      </button>
    </div>
  );
};

export default MainSection;
