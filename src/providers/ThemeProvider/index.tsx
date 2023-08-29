import { observer } from "mobx-react-lite";
import { useMemo, useState } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import IThemeContext from "../../contexts/ThemeContext/IThemeContext";
import React from "react";

export default observer(function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [isDarkMode, setDarkMode] = useState<boolean>(false);


    const ctx: IThemeContext = useMemo(() => ({
        isDarkMode,
        toggleDarkMode: () => setDarkMode(val => !val),
        setDarkMode: () => setDarkMode(true),
        setLightMode: () => setDarkMode(false),
    }), [isDarkMode]);

    return <ThemeContext.Provider value={ctx}>
        {children}
    </ThemeContext.Provider>;
});