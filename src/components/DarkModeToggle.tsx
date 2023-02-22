// hooks
import React from "react";

// components
import { Switch } from "@headlessui/react";

// assets
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

// types
import { THEMES } from "~/hooks/useTheme";

interface DarkModeToggleProps {
    DarkModeController: {
        theme: THEMES;
        setTheme: React.Dispatch<React.SetStateAction<THEMES | undefined>>;
        toggleTheme: () => void;
    };
}

const DarkModeToggle = ({
    DarkModeController: { theme, setTheme, toggleTheme },
}: DarkModeToggleProps) => {
    return (
        <div
            id="DarkModeToggle"
            className="mr-6 flex items-center gap-2"
        >
            <SunIcon
                className="h-5 w-5 cursor-pointer"
                onClick={() => setTheme("light")}
            />

            <Switch
                checked={theme === "dark" ? true : false}
                onChange={toggleTheme}
                className="relative inline-flex h-6 w-11 items-center rounded-full outline-none 
                focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2
                focus-visible:ring-offset-slate-400 ui-checked:bg-blue-500 
                ui-not-checked:bg-slate-500 dark:focus-visible:ring-blue-500 
                dark:focus-visible:ring-offset-slate-700"
            >
                <span className="sr-only">Toggle Dark Mode</span>
                <span
                    className="inline-block h-4 w-4 transform rounded-full
                    bg-white transition ui-checked:translate-x-6 
                    ui-not-checked:translate-x-1"
                />
            </Switch>

            <MoonIcon
                className="h-5 w-5 cursor-pointer"
                onClick={() => setTheme("dark")}
            />
        </div>
    );
};

export default DarkModeToggle;
