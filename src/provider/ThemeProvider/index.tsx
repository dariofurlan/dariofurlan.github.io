import { observer } from "mobx-react-lite";
import { useMemo, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import IThemeContext from "../../context/ThemeContext/IThemeContext";

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