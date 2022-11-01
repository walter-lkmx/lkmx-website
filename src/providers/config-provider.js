import React, { useState, createContext, useEffect } from "react";
export const ConfigContext = createContext();

// TODO: Find a better way to do this

function ConfigProvider({ children }) {
    const [locale, setLocale] = useState('es');

    useEffect(() => {
        if (localStorage.getItem('locale')) {
            updateLang(localStorage.getItem('locale'));
        }
    })

    function updateLang(locale) {
        localStorage.setItem('locale', locale);
        setLocale(locale);
    }

    return (
        <ConfigContext.Provider value={{locale: locale, updateLang: updateLang}}>
            {children}
        </ConfigContext.Provider>
    );
}

export default ConfigProvider;