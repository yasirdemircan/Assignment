import React, { useState, createContext, ReactElement } from 'react';

//Language context to share language data between components
export const LanguageContext = createContext<
  {
    setter: React.Dispatch<React.SetStateAction<string>>,
    languageVal: string | null
  }
>({
  setter: () => { },
  languageVal: null,
});

//Context provider component acts as a wrapper for the App component
function LanguageProvider({ children }: { children: ReactElement }) {

  //This state provides the current global language , setLanguage sets the global language code
  const [language, setLanguage] = useState('En');

  //Sharing the state and setter of the state as global context
  return (
    <LanguageContext.Provider value={{ languageVal: language, setter: setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;