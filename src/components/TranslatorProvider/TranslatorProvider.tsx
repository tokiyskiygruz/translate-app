import * as React from "react";

type TranslatorContextType = {
  toTranslate: string;
  translated: string;
  setToTranslate: React.Dispatch<React.SetStateAction<string>>;
  setTranslated: React.Dispatch<React.SetStateAction<string>>;
};

const TranslatorContext = React.createContext<TranslatorContextType>({
  toTranslate: "",
  translated: "",
  setToTranslate: () => {},
  setTranslated: () => {},
});

const TranslatorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toTranslate, setToTranslate] = React.useState(
    "Hello, how are you' to French"
  );
  const [translated, setTranslated] = React.useState("");

  return (
    <TranslatorContext.Provider
      value={{ toTranslate, translated, setToTranslate, setTranslated }}
    >
      {children}
    </TranslatorContext.Provider>
  );
};

export default TranslatorProvider;
