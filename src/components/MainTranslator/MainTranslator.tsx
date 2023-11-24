import * as React from "react";
import Logo from "../../assets/logo.svg";
import styles from "./MainTranslator.module.css";
import TranslatorCard from "../TranslatorCard";

const languages = ["English", "French", "Ukrainian"];

const MainTranslator = () => {
  const [toTranslate, setToTranslate] = React.useState(
    "Hello, how are you' to French"
  );
  const [translated, setTranslated] = React.useState("");
  return (
    <div className={styles.wrapper}>
      <header>
        <img src={Logo} alt="Translator logo" />
      </header>
      <main>
        <TranslatorCard
          languages={languages}
          text={toTranslate}
          setText={setToTranslate}
          className={styles.toTranslateCard}
        ></TranslatorCard>
        <TranslatorCard
          text={translated}
          setText={setTranslated}
          languages={languages}
          className={styles.translatedCard}
        ></TranslatorCard>
      </main>
    </div>
  );
};

export default MainTranslator;
