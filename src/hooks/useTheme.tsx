import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const THEMES = {
    light: "light",
    dark: "dark",
};

const useTheme = () => {
    // useLocalStorage is instantiaing the inital theme, if there is none in localstorage
    const [theme, setTheme] = useLocalStorage("theme", THEMES.light);

    const toggleTheme = () => {
        setTheme(theme === THEMES.dark ? THEMES.light : THEMES.dark);
    };

    useEffect(() => {
        const documentBody = window.document.body.classList;

        // adding "dark" className to HTML body tag when theme is dark, remove when not
        theme === THEMES.dark
            ? documentBody.add(THEMES.dark)
            : documentBody.remove(THEMES.dark);
    }, [theme]);

    return { theme, setTheme, toggleTheme };
};

export default useTheme;
