import * as React from "react";
import styles from "./CardTextarea.module.css";
type CardTextareaType = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

const CardTextarea: React.FC<CardTextareaType> = ({ text, setText }) => {
  const [count, setCount] = React.useState(text.length);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCount(event.target.value.length);
    setText(event.target.value);
  };

  return (
    <div className={styles.textAreaWrapper}>
      <textarea value={text} onChange={handleChange} name="" id=""></textarea>
      <div className={styles.counter}>{`${count}/500`}</div>
    </div>
  );
};

export default CardTextarea;
