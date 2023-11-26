import "./App.css";
import MainTranslator from "../MainTranslator";
import TranslatorProvider from "../TranslatorProvider";
const App = () => {
  return (
    <TranslatorProvider>
      <MainTranslator />
    </TranslatorProvider>
  );
};

export default App;
