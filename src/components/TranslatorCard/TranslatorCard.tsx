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
      {type === "target" && <button>3AJlyJLA</button>}
    </div>
  );
};

export default TranslatorCard;
