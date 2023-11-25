import "./App.css";
import MainTranslator from "../MainTranslator";
import TranslatorProvider from "../TranslatorProvider";
function App() {
  return (
    <TranslatorProvider>
      <MainTranslator />
    </TranslatorProvider>
  );
}

export default App;
