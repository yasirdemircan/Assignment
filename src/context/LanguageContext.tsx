import React, { useState, createContext, ReactElement, useContext } from 'react';

export const LanguageContext = createContext<
{
  setter:React.Dispatch<React.SetStateAction<string>>,
  languageVal:string|null
}
>({
  setter: () => {},
  languageVal: null,
});

function LanguageProvider({ children }:{children:ReactElement}) {
  const [language, setLanguage] = useState('En');



  return (
    <LanguageContext.Provider value={{ languageVal:language, setter: setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;