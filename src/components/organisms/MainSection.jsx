import { useContext } from "react";
import { LanguageContext } from "../../LanguageContext";
import Button from "./atoms/Button";

// const languages = ["JavaScript", "Python"];

const MainSection = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div>
      <p id="favoriteLanguage">favorite programing language: {language}</p>
      <Button id="changeFavorite" onClick={toggleLanguage} />
      {/*     <button id="changeFavorite" onClick={toggleLanguage}>
        toggle language
      </button> */}
    </div>
  );
};

export default MainSection;
