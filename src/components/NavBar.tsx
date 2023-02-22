"use client";

// hooks
import React, { useState } from "react";

// custom hooks
import useTheme from "~/hooks/useTheme";

// ui
import {
    Bars3Icon,
    DocumentTextIcon,
    PresentationChartLineIcon,
    BriefcaseIcon,
    PaperAirplaneIcon,
    XMarkIcon,
} from "@heroicons/react/24/solid";

// componets
import DarkModeToggle from "./DarkModeToggle";

// animations
import { Transition } from "@headlessui/react";
import Button from "~/components/Button";
import GitHubIcon from "~/assets/Icons/GitHubIcon";
import LinkedInIcon from "~/assets/Icons/LinkedInIcon";

interface NavBarProps {}

const NavBar = ({}: NavBarProps) => {
    const [navbarIsOpen, setNavbarIsOpen] = useState(false);
    const DarkModeController = useTheme();

    const navigateToId = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <nav
            id="NavBar"
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-slate-600 bg-slate-400/50 backdrop-blur dark:bg-slate-700/40"
        >
            <div className="w-40"></div>
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
                            className="hidden rounded-md py-0.5 px-1 lg:block"
                            ringClassNames="focus-visible:ring-blue-600 ring-offset-0 dark:focus-visible:ring-blue-500 outline-none"
                        />
                    </div>
                    <ul className="hidden gap-5 font-semibold sm:items-center lg:flex">
                        <li className="w-fit hover:text-blue-600 dark:hover:text-blue-500">
                            <Button
                                ariaLabel="projects"
                                className="gap-2 rounded-md py-0.5 px-1 focus-visible:ring-2 focus-visible:ring-blue-600 dark:focus-visible:ring-blue-500 "
                                id="projects"
                                onClick={() => navigateToId("projects")}
                                ringClassNames="ring-offset-0"
                                text="Projects"
                                size="none"
                                IconLeft={PresentationChartLineIcon}
                                IconLeftClassName="h-5 w-5"
                            />
                        </li>
                        <li className="w-fit hover:text-blue-600 dark:hover:text-blue-500">
                            <Button
                                ariaLabel="projects"
                                className="gap-2 rounded-md py-0.5 px-1 focus-visible:ring-2
                                 focus-visible:ring-blue-600 dark:focus-visible:ring-blue-500"
                                id="projects"
                                onClick={() => navigateToId("work-experience")}
                                ringClassNames="ring-offset-0"
                                text="Work"
                                size="none"
                                IconLeft={BriefcaseIcon}
                                IconLeftClassName="h-5 w-5"
                            />
                        </li>
                        <li className="w-fit hover:text-blue-600 dark:hover:text-blue-500">
                            <Button
                                ariaLabel="projects"
                                className="gap-2 rounded-md py-0.5 px-1 focus-visible:ring-2
                                 focus-visible:ring-blue-600 dark:focus-visible:ring-blue-500"
                                id="projects"
                                onClick={() => navigateToId("contact")}
                                ringClassNames="ring-offset-0"
                                text="Contact"
                                size="none"
                                IconLeft={PaperAirplaneIcon}
                                IconLeftClassName="h-5 w-5"
                            />
                        </li>
                        <li className="w-fit hover:text-blue-600 dark:hover:text-blue-500">
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
                        <li className="w-fit hover:text-blue-600 dark:hover:text-blue-500">
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
                        <li className="w-fit outline-none hover:text-blue-600 dark:hover:text-blue-500">
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
                </div>
            </div>

            <div className="flex justify-between p-4">
                <Button
                    ariaLabel="navbar menu"
                    id="navbar"
                    IconLeft={Bars3Icon}
                    onClick={() => setNavbarIsOpen(true)}
                    className={(isPressed) =>
                        `bg-slate-400 hover:bg-slate-300 lg:hidden ${
                            isPressed
                                ? "bg-slate-500 hover:bg-slate-500"
                                : "bg-slate-400"
                        } ${navbarIsOpen ? "invisible" : ""}`
                    }
                    ringClassNames="ring-blue-500 ring-offset-slate-400"
                    size="mdSquare"
                />

                <div className="hidden lg:block">
                    <DarkModeToggle DarkModeController={DarkModeController} />
                </div>
            </div>

            <Transition
                className="z-100 fixed top-0 left-0 flex h-screen w-full max-w-xs 
                flex-col gap-10 border-r-2 border-slate-200/80 bg-slate-300 p-5 
                shadow-2xl dark:border-slate-800/80  dark:bg-slate-600 lg:hidden"
                show={navbarIsOpen}
                enter="transform transition ease-in-out duration-500 "
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 "
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
            >
                <div className="flex justify-between">
                    <Button
                        ariaLabel="logo"
                        id="logo"
                        onClick={() => {
                            setNavbarIsOpen(false);
                            setTimeout(() => {
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                });
                            }, 500);
                        }}
                        text="Logo"
                        size="none"
                        className="rounded-md py-0.5 px-1"
                        ringClassNames="focus-visible:ring-blue-600 ring-offset-0 dark:focus-visible:ring-blue-500 outline-none"
                    />

                    <Button
                        ariaLabel="navbar menu"
                        id="navbar"
                        IconLeft={XMarkIcon}
                        onClick={() => setNavbarIsOpen(false)}
                        className={(isPressed) =>
                            `bg-slate-400 hover:bg-slate-300 lg:hidden ${
                                isPressed
                                    ? "bg-slate-500 hover:bg-slate-500"
                                    : "bg-slate-400"
                            }`
                        }
                        ringClassNames="ring-blue-500 ring-offset-slate-400"
                        size="mdSquare"
                    />
                </div>
                <ul className="flex flex-col gap-5 font-semibold">
                    <li className="w-fit hover:text-blue-600 dark:hover:text-blue-500">
                        <Button
                            ariaLabel="projects"
                            className="gap-2 rounded-md py-0.5 px-1 focus-visible:ring-2 focus-visible:ring-blue-600 dark:focus-visible:ring-blue-500 "
                            id="projects"
                            onClick={() => {
                                setNavbarIsOpen(false);
                                setTimeout(() => {
                                    navigateToId("projects");
                                }, 500);
                            }}
                            ringClassNames="ring-offset-0"
                            text="Projects"
                            size="none"
                            IconLeft={PresentationChartLineIcon}
                            IconLeftClassName="h-5 w-5"
                        />
                    </li>
                    <li className="w-fit hover:text-blue-600 dark:hover:text-blue-500">
                        <Button
                            ariaLabel="projects"
                            className="gap-2 rounded-md py-0.5 px-1 focus-visible:ring-2
                                 focus-visible:ring-blue-600 dark:focus-visible:ring-blue-500"
                            id="projects"
                            onClick={() => {
                                setNavbarIsOpen(false);
                                setTimeout(() => {
                                    navigateToId("work-experience");
                                }, 500);
                            }}
                            ringClassNames="ring-offset-0"
                            text="Work"
                            size="none"
                            IconLeft={BriefcaseIcon}
                            IconLeftClassName="h-5 w-5"
                        />
                    </li>
                    <li className="w-fit hover:text-blue-600 dark:hover:text-blue-500">
                        <Button
                            ariaLabel="projects"
                            className="gap-2 rounded-md py-0.5 px-1 focus-visible:ring-2
                                 focus-visible:ring-blue-600 dark:focus-visible:ring-blue-500"
                            id="projects"
                            onClick={() => {
                                setNavbarIsOpen(false);
                                setTimeout(() => {
                                    navigateToId("contact");
                                }, 500);
                            }}
                            ringClassNames="ring-offset-0"
                            text="Contact"
                            size="none"
                            IconLeft={PaperAirplaneIcon}
                            IconLeftClassName="h-5 w-5"
                        />
                    </li>
                    <li className="w-fit hover:text-blue-600 dark:hover:text-blue-500">
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
                    <li className="w-fit hover:text-blue-600 dark:hover:text-blue-500">
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
                    <li className="w-fit outline-none hover:text-blue-600 dark:hover:text-blue-500">
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
                <div className="mt-auto">
                    <DarkModeToggle DarkModeController={DarkModeController} />
                </div>
            </Transition>
        </nav>
    );
};

export default NavBar;
