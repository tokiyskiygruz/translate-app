import * as React from "react";
import styles from "./TranslatorCard.module.css";
import TextButton from "../TextButton";
import CardTextarea from "../CardTextarea";

interface TranslatorCardProps {
  languages: string[];
  className?: string | React.CSSProperties;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const TranslatorCard: React.FC<TranslatorCardProps> = ({
  languages,
  className,
  text,
  setText,
}) => {
  return (
    <div className={`${styles.cardWrapper} ${className}`}>
      <div className={styles.cardControl}>
        <TextButton>Detect language</TextButton>
        {languages.map((language) => (
          <TextButton key={language}>{language}</TextButton>
        ))}
      </div>
      <div className={styles.divider}></div>
      <div className={styles.textareaWrapper}>
        <CardTextarea text={text} setText={setText}></CardTextarea>
      </div>
    </div>
  );
};

export default TranslatorCard;
