import * as React from "react";

export type TranslatorContextType = {
  toTranslate: string;
  translated: string;
  setToTranslate: React.Dispatch<React.SetStateAction<string>>;
  setTranslated: React.Dispatch<React.SetStateAction<string>>;
};

export const TranslatorContext = React.createContext<TranslatorContextType>({
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

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.mymemory.translated.net/get?q=${toTranslate}&langpair=en|fr`
        );
        const data = await response.json();
        setTranslated(data.responseData.translatedText);
      } catch (error) {
        console.log(error);
      }
    };
    if (toTranslate) {
      fetchData();
    }
  }, [toTranslate]);

  const context = { toTranslate, translated, setToTranslate, setTranslated };

  return (
    <TranslatorContext.Provider value={context}>
      {children}
    </TranslatorContext.Provider>
  );
};

export default TranslatorProvider;
