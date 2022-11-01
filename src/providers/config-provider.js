import { createContext, useEffect } from "react";
import React, { useState } from "react";
import getLang from '@/lang';
export const ConfigContext = createContext();

// TODO: Find a better way to do this

function ConfigProvider({ children }) {
    const translation = getLang('es');
    const [config, setConfig] = useState({$t: translation});

    useEffect(() => {
        if (localStorage.getItem('locale')) {
            const newTranslation = getLang(localStorage.getItem('locale'))
            const newConfig = Object.assign(config, {$t: newTranslation})
            setConfig(newConfig);
        }
    })

    return (
        <ConfigContext.Provider value={[config, setConfig]}>
                {children}
        </ConfigContext.Provider>
    );
}

export default ConfigProvider;