import React from "react";
import styles from "./TranslatorCard.module.css";
import TextButton from "../TextButton";
import CardTextarea from "../CardTextarea";
import { TranslatorContext } from "../TranslatorProvider";
import { LANGUAGES } from "../../constants/languages";
interface TranslatorCardProps {
  type: "source" | "target";
}

const TranslatorCard: React.FC<TranslatorCardProps> = ({ type }) => {
  const { toTranslate, translated, setToTranslate, setTranslated } =
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
        <TextButton>Detect language</TextButton>
        {LANGUAGES.map((language) => (
          <TextButton key={language}>{language}</TextButton>
        ))}
      </div>
      <div className={styles.divider}></div>
      <div className={styles.textareaWrapper}>
        <CardTextarea text={text} setText={setText}></CardTextarea>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.buttonsContainer}>
          <button onClick={handleSaveClick}>save text</button>
          <button onClick={handleSpeakClick}>speak text</button>
        </div>
        {type === "source" && <button>A̲ Translate</button>}
      </div>
    </div>
  );
};

export default TranslatorCard;
