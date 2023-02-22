"use client";
import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

type THEMES = "light" | "dark";

const useTheme = () => {
    // useLocalStorage is instantiaing the inital theme, if there is none in localstorage
    const [theme, setTheme] = useLocalStorage<THEMES>("theme", "dark");

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    useEffect(() => {
        const documentBody = window.document.body.classList;

        // adding "dark" className to HTML body tag when theme is dark, remove when not
        theme === "dark"
            ? documentBody.add("dark")
            : documentBody.remove("dark");
    }, [theme]);

    return { theme, setTheme, toggleTheme };
};

export default useTheme;
