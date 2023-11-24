import * as React from "react";
import Logo from "../../assets/logo.svg";
import styles from "./MainTranslator.module.css";
import TranslatorCard from "../TranslatorCard";

const languages = ["English", "French", "Ukrainian"];

function MainTranslator() {
  return (
    <div className={styles.wrapper}>
      <header>
        <img src={Logo} alt="Translator logo" />
      </header>
      <main>
        <TranslatorCard languages={languages}></TranslatorCard>
        <TranslatorCard languages={languages}></TranslatorCard>
      </main>
    </div>
  );
}

export default MainTranslator;
