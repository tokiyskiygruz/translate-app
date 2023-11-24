import * as React from "react";

type TranslatorContextType = {
  toTranslate: string;
  translated: string;
  setToTranslate: React.Dispatch<React.SetStateAction<string>>;
  setTranslated: React.Dispatch<React.SetStateAction<string>>;
};

const TranslatorContext = React.createContext<TranslatorContextType>({
  toTranslate: "English",
  translated: "French",
  setToTranslate: () => {},
  setTranslated: () => {},
});

const TranslatorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toTranslate, setToTranslate] = React.useState("English");
  const [translated, setTranslated] = React.useState("French");

  return (
    <TranslatorContext.Provider
      value={{ toTranslate, translated, setToTranslate, setTranslated }}
    >
      {children}
    </TranslatorContext.Provider>
  );
};

export default TranslatorProvider;
