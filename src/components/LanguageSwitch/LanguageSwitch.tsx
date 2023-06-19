import styles from "./LanguageSwitch.module.css";
import pl from "../../assets/pl.svg";
import en from "../../assets/gb.svg";
import { useContext } from "react";
import { LanguageContext } from "../../LanguageContext.tsx";

export const LanguageSwitch = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  console.log("languiage", language);

  return (
    <div>
      <div className={styles.switch}>
        <input
          id="language-toggle"
          className={`${styles["check-toggle"]} ${styles["check-toggle-round-flat"]}`}
          type="checkbox"
          // checked={language === "EN"}
          onChange={toggleLanguage}
        />
        <label htmlFor="language-toggle"></label>

        <span className={styles.on}>
          <img className={styles.flag} src={pl} alt="Polish flag" />
        </span>

        <span className={styles.off}>
          <img className={styles.flag} src={en} alt="English flag" />
        </span>
      </div>
    </div>
  );
};
