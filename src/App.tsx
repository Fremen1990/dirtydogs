import workInProgress from "./assets/wip.jpg";
import "./App.css";
import { LanguageSwitch } from "./components/LanguageSwitch/LanguageSwitch.tsx";
import { useContext, useEffect } from "react";
import { LanguageContext } from "./LanguageContext.tsx";

const POLISH_FORM = "https://airtable.com/shrJtGBKt2CepfNyg";
const ENGLISH_FORM = "https://airtable.com/shrblOyFP60C2jBjI";

function App() {
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    language === "PL"
      ? (document.title = "Dirty Dogs - Hotel dla Psów")
      : (document.title = "Dirty Dogs - Dogs Hotel");
  }, [language]);

  return (
    <div className="container">
      <LanguageSwitch />
      {
        <>
          <h1 className="title">
            {language === "PL"
              ? "Dirty Dogs - Hotel dla Psów"
              : "Dirty Dogs - Dogs Hotel"}
          </h1>
          <div className="card">
            <a
              href={language === "PL" ? POLISH_FORM : ENGLISH_FORM}
              target="_blank"
            >
              <img src={workInProgress} className="logo" alt="Pix" />

              <div>
                <button className="button">
                  <h2>
                    {language === "PL" ? "Zarezerwuj hotel" : "Book a hotel"}
                  </h2>
                </button>
              </div>
            </a>
          </div>
        </>
      }
    </div>
  );
}

export default App;
