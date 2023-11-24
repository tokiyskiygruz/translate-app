import * as React from "react";
import styles from "./TranslatorCard.module.css";

interface TranslatorCardProps {
  languages: string[];
}

function TranslatorCard({ languages }: TranslatorCardProps) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardControl}>
        <button>Detect language</button>
        {languages.map((language) => (
          <button key={language}>{language}</button>
        ))}
      </div>
    </div>
  );
}

export default TranslatorCard;
