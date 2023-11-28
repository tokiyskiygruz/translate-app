import React from "react";
import styles from "./TranslatorCard.module.css";
import TextButton from "../TextButton";
import CardTextarea from "../CardTextarea";
import { TranslatorContext } from "../TranslatorProvider";
import { LANGUAGES } from "../../constants/languages";
import soundLogo from "../../assets/sound_max_fill.svg";
import copyLogo from "../../assets/Copy.svg";
import changeLogo from "../../assets/Horizontal_top_left_main.svg";
interface TranslatorCardProps {
  type: "source" | "target";
}

const TranslatorCard: React.FC<TranslatorCardProps> = ({ type }) => {
  const { toTranslate, translated, setToTranslate, setTranslated, fetchData } =
    React.useContext(TranslatorContext);

  const text = type === "source" ? toTranslate : translated;

  const setText = type === "source" ? setToTranslate : setTranslated;

  const className =
    type === "source" ? styles.toTranslateCard : styles.translatedCard;

  const handleSaveClick = () => {
    navigator.clipboard.writeText(text);
  };

  const handleSpeakClick = () => {
    const utterance = new SpeechSynthesisUtterance(text);

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className={`${styles.cardWrapper} ${className}`}>
      <div className={styles.cardControl}>
        {type === "source" && <TextButton>Detect language</TextButton>}
        {LANGUAGES.map((language) => (
          <TextButton key={language}>{language}</TextButton>
        ))}
        {type === "target" && (
          <button className={styles.iconButton + " " + styles.swapButton}>
            <img src={changeLogo} alt="" />
          </button>
        )}
      </div>
      <div className={styles.divider}></div>
      <CardTextarea type={type} text={text} setText={setText}></CardTextarea>
      <div className={styles.cardFooter}>
        <div className={styles.buttonsContainer}>
          <button className={styles.iconButton} onClick={handleSaveClick}>
            <img src={copyLogo} alt="" />
          </button>
          <button className={styles.iconButton} onClick={handleSpeakClick}>
            <img src={soundLogo} alt="" />
          </button>
        </div>
        {type === "source" && (
          <button onClick={fetchData} className={styles.translateButton}>
            <span className={styles.underlined}>A</span> Translate
          </button>
        )}
      </div>
    </div>
  );
};

export default TranslatorCard;
