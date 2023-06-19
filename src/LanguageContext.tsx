import React, { createContext, useState, ReactNode } from "react";

interface LanguageContextProps {
  language: string;
  setLanguage: (language: string) => void;
  toggleLanguage: () => void; // Add toggleLanguage function
}

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: "PL",
  setLanguage: () => {},
  toggleLanguage: () => {}, // Provide a placeholder function
});

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState("PL");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "PL" ? "EN" : "PL"));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
