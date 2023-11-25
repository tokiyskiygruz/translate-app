import Logo from "../../assets/logo.svg";
import styles from "./MainTranslator.module.css";
import TranslatorCard from "../TranslatorCard";

const MainTranslator = () => {
  return (
    <div className={styles.wrapper}>
      <header>
        <img src={Logo} alt="Translator logo" />
      </header>
      <main>
        <TranslatorCard type="source"></TranslatorCard>
        <TranslatorCard type="target"></TranslatorCard>
      </main>
    </div>
  );
};

export default MainTranslator;
