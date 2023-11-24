import * as React from "react";
import Logo from "../../assets/logo.svg";
import styles from "./MainTranslator.module.css";
import TranslatorCard from "../TranslatorCard";

const languages = ["English", "French", "Ukrainian"];

const MainTranslator = () => {
  return (
    <div className={styles.wrapper}>
      <header>
        <img src={Logo} alt="Translator logo" />
      </header>
      <main>
        <TranslatorCard
          languages={languages}
          className={styles.toTranslateCard}
        ></TranslatorCard>
        <TranslatorCard
          languages={languages}
          className={styles.translatedCard}
        ></TranslatorCard>
      </main>
    </div>
  );
};

export default MainTranslator;
