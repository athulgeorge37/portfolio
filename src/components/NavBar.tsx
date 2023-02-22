"use client";

// hooks
import React, { useState } from "react";

// components
import { Switch } from "@headlessui/react";

// ui
import {
    Bars3Icon,
    DocumentTextIcon,
    PresentationChartLineIcon,
    BriefcaseIcon,
    PaperAirplaneIcon,
    MoonIcon,
    SunIcon,
} from "@heroicons/react/24/solid";

// animations
import { Transition } from "@headlessui/react";
import Button from "~/components/Button";
import useTheme from "~/hooks/useTheme";
import GitHubIcon from "~/assets/Icons/GitHubIcon";
import LinkedInIcon from "~/assets/Icons/LinkedInIcon";

interface NavBarProps {}

const NavBar = ({}: NavBarProps) => {
    const [navbarIsOpen, setNavbarIsOpen] = useState(false);
    const { toggleTheme, theme } = useTheme();

    return (
        <nav
            id="NavBar"
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-slate-600 bg-slate-400/50 backdrop-blur dark:bg-slate-700/40"
        >
            <div className="w-36"></div>
            <div className="relative w-full max-w-5xl">
                <div className="flex items-center justify-between p-4">
                    <div>
                        <Button
                            ariaLabel="logo"
                            id="logo"
                            onClick={() => {
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                });
                            }}
                            text="Logo"
                            size="none"
                            className="rounded-md py-0.5 px-1"
                            ringClassNames="focus-visible:ring-blue-600 ring-offset-0 dark:focus-visible:ring-blue-500 outline-none"
                        />
                    </div>
                    <ul className="hidden gap-5 font-semibold sm:items-center md:flex">
                        <li className="hover:text-blue-600 dark:hover:text-blue-500">
                            <Button
                                ariaLabel="projects"
                                className="gap-2 rounded-md py-0.5 px-1 focus-visible:ring-2 focus-visible:ring-blue-600 dark:focus-visible:ring-blue-500 "
                                id="projects"
                                onClick={() => {
                                    document
                                        .getElementById("projects")
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                }}
                                ringClassNames="ring-offset-0"
                                text="Projects"
                                size="none"
                                IconLeft={PresentationChartLineIcon}
                                IconLeftClassName="h-5 w-5"
                            />
                        </li>
                        <li className="hover:text-blue-600 dark:hover:text-blue-500">
                            <Button
                                ariaLabel="projects"
                                className="gap-2 rounded-md py-0.5 px-1 focus-visible:ring-2
                                 focus-visible:ring-blue-600 dark:focus-visible:ring-blue-500"
                                id="projects"
                                onClick={() => {
                                    document
                                        .getElementById("work-experience")
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                }}
                                ringClassNames="ring-offset-0"
                                text="Work"
                                size="none"
                                IconLeft={BriefcaseIcon}
                                IconLeftClassName="h-5 w-5"
                            />
                        </li>
                        <li className="hover:text-blue-600 dark:hover:text-blue-500">
                            <Button
                                ariaLabel="projects"
                                className="gap-2 rounded-md py-0.5 px-1 focus-visible:ring-2
                                 focus-visible:ring-blue-600 dark:focus-visible:ring-blue-500"
                                id="projects"
                                onClick={() => {
                                    document
                                        .getElementById("contact")
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                }}
                                ringClassNames="ring-offset-0"
                                text="Contact"
                                size="none"
                                IconLeft={PaperAirplaneIcon}
                                IconLeftClassName="h-5 w-5"
                            />
                        </li>
                        <li className="hover:text-blue-600 dark:hover:text-blue-500">
                            <a
                                href="https://www.linkedin.com/in/athul-george/"
                                target="_blank"
                                className="flex items-center gap-2 rounded-md py-0.5 px-1 
                                outline-none focus-visible:ring-2 focus-visible:ring-blue-600
                                 dark:focus-visible:ring-blue-500"
                            >
                                <LinkedInIcon className="h-5 w-5" /> Linked In
                            </a>
                        </li>
                        <li className="hover:text-blue-600 dark:hover:text-blue-500">
                            <a
                                href="https://github.com/athulgeorge37"
                                target="_blank"
                                className="flex items-center gap-2 rounded-md 
                                py-0.5 px-1 outline-none focus-visible:ring-2
                                 focus-visible:ring-blue-600 dark:focus-visible:ring-blue-500"
                            >
                                <GitHubIcon className="h-5 w-5" /> GitHub
                            </a>
                        </li>
                        <li className="outline-none hover:text-blue-600 dark:hover:text-blue-500">
                            <a
                                className="flex items-center gap-2 rounded-md py-0.5 px-1 
                                outline-none focus-visible:ring-2 focus-visible:ring-blue-600
                                 dark:focus-visible:ring-blue-500"
                                target="_blank"
                                href="https://drive.google.com/file/d/1PYFjf4laUxbGcbQV27XUwT6Rqoizl2Pw/view?usp=sharing"
                            >
                                <DocumentTextIcon className="h-5 w-5" />
                                Resume
                            </a>
                        </li>
                    </ul>

                    <Button
                        ariaLabel="navbar menu"
                        id="navbar"
                        IconLeft={Bars3Icon}
                        onClick={() => setNavbarIsOpen(!navbarIsOpen)}
                        className={(isPressed) =>
                            `bg-slate-400 hover:bg-slate-300 md:hidden ${
                                isPressed
                                    ? "bg-slate-500 hover:bg-slate-500"
                                    : "bg-slate-400"
                            }`
                        }
                        ringClassNames="ring-blue-500 ring-offset-slate-400"
                        size="mdSquare"
                    />
                </div>
            </div>

            <div className="mr-6 flex items-center gap-2">
                <SunIcon className="h-5 w-5" />

                <Switch
                    checked={theme === "dark" ? true : false}
                    onChange={toggleTheme}
                    className="relative inline-flex h-6 w-11 items-center rounded-full outline-none 
                    focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2
                     focus-visible:ring-offset-slate-400 ui-checked:bg-blue-500 
                     ui-not-checked:bg-slate-500 dark:focus-visible:ring-blue-500 
                     dark:focus-visible:ring-offset-slate-700"
                >
                    <span className="sr-only">Enable Dark Mode</span>
                    <span
                        className="inline-block h-4 w-4 transform rounded-full
                     bg-white transition ui-checked:translate-x-6 
                     ui-not-checked:translate-x-1"
                    />
                </Switch>

                <MoonIcon className="h-5 w-5" />
            </div>

            <Transition
                className="z-100 fixed top-0 left-0 flex h-screen w-full max-w-xs flex-col gap-10 bg-blue-200 p-5 text-slate-800 md:hidden"
                show={navbarIsOpen}
                enter="transform transition ease-in-out duration-500 "
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 "
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
            >
                <div>Logo</div>
                <ul className="flex flex-col gap-5 ">
                    <li>Resume</li>
                    <li>Projects</li>
                    <li>Work</li>
                    <li>Contact</li>
                    <li>Linked In</li>
                    <li>GitHub</li>
                    <li>
                        <Button
                            ariaLabel="toggle dark mode"
                            id="darkModeToggle"
                            onClick={() => toggleTheme()}
                            text="Toggle dark mode"
                            // variant="blueOutline"
                            className=""
                            ringClassNames=""
                        />
                    </li>
                </ul>
            </Transition>
        </nav>
    );
};

export default NavBar;
