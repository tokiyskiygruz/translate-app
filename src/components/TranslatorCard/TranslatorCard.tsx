import * as React from "react";
import styles from "./TranslatorCard.module.css";

interface TranslatorCardProps {
  languages: string[];
  className?: string | React.CSSProperties;
}

const TranslatorCard: React.FC<TranslatorCardProps> = ({
  languages,
  className,
}) => {
  return (
    <div className={`${styles.cardWrapper} ${className}`}>
      <div className={styles.cardControl}>
        <button>Detect language</button>
        {languages.map((language) => (
          <button key={language}>{language}</button>
        ))}
      </div>
    </div>
  );
};

export default TranslatorCard;
