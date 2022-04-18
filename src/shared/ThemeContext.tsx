import { createContext, FC, useContext, useEffect, useState } from "react";

interface IThemeStyles {
    color: string,
    backgroundColor: string;
}

const theme = {
    dark: {
        color: "#fff",
        backgroundColor: "#3F3E46"
    },
    light: {
        color: "#3F3E46",
        backgroundColor: "#fff"
    }
}

interface IThemeContext {
    theme: typeof theme;
    isDark: boolean;
    toggleTheme: () => void;
    getTheme: () => IThemeStyles;
}

export const themeContext = createContext<IThemeContext>({
} as IThemeContext);

export const useThemeContext = () => useContext(themeContext)

const useIsDark = () => {
    const isDarkFromStorage = () =>
        window.localStorage.getItem('isDark') === 'true'

    const [isDark, setIsDark] = useState(isDarkFromStorage());

    useEffect(() => {
        window.localStorage.setItem('isDark', String(isDark))
    }, [isDark]);

    return { isDark, setIsDark };
}

export const ThemeContext: FC<any> = ({ children }) => {
    const { isDark, setIsDark } = useIsDark();

    const toggleTheme = () => {
        setIsDark((isDark) => !isDark);
    };
    const getTheme = () => isDark ? theme.dark : theme.light;

    return (
        <themeContext.Provider value={{ theme, isDark, toggleTheme, getTheme }}>
            {children}
        </themeContext.Provider>
    )
}