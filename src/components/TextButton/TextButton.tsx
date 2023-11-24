import * as React from "react";
import styles from "./TextButton.module.css";
type TextButtonPropsType = {
  children?: React.ReactNode;
  handleClick?: () => void;
};

const TextButton: React.FC<TextButtonPropsType> = ({
  children,
  handleClick,
}) => {
  return (
    <button onClick={handleClick} className={styles.textButton}>
      {children}
    </button>
  );
};

export default TextButton;
