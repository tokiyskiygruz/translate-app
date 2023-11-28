import * as React from "react";

export type TranslatorContextType = {
  toTranslate: string;
  translated: string;
  setToTranslate: React.Dispatch<React.SetStateAction<string>>;
  setTranslated: React.Dispatch<React.SetStateAction<string>>;
  fetchData: () => Promise<void>;
};

export const TranslatorContext = React.createContext<TranslatorContextType>({
  toTranslate: "",
  translated: "",
  setToTranslate: () => {},
  setTranslated: () => {},
  fetchData: async () => {},
});

const TranslatorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toTranslate, setToTranslate] = React.useState("Hello, how are you");
  const [translated, setTranslated] = React.useState("");

  const fetchData = React.useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${toTranslate}&langpair=en|fr`
      );
      const data = await response.json();
      setTranslated(data.responseData.translatedText);
    } catch (error) {
      console.log(error);
    }
  }, [toTranslate]);

  React.useEffect(() => {
    if (toTranslate) {
      fetchData();
    }
  }, [toTranslate, fetchData]);

  const context = {
    toTranslate,
    translated,
    setToTranslate,
    setTranslated,
    fetchData,
  };

  return (
    <TranslatorContext.Provider value={context}>
      {children}
    </TranslatorContext.Provider>
  );
};

export default TranslatorProvider;
