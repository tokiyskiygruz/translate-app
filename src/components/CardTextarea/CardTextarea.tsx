import * as React from "react";
import styles from "./CardTextarea.module.css";
type CardTextareaType = {
  text: string;
  type: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

const CardTextarea: React.FC<CardTextareaType> = ({ text, setText, type }) => {
  const [count, setCount] = React.useState(text.length);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCount(event.target.value.length);
    setText(event.target.value);
  };

  return (
    <div className={styles.textAreaWrapper}>
      <textarea
        value={text}
        readOnly={type === "target"}
        onChange={handleChange}
      ></textarea>
      {type === "source" && (
        <div className={styles.counter}>{`${count}/500`}</div>
      )}
    </div>
  );
};

export default CardTextarea;
