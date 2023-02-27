"use client";

// hooks
import React, { useState, Fragment } from "react";

// custom hooks
import useTheme from "~/hooks/useTheme";

// ui
import {
    Bars3Icon,
    DocumentTextIcon,
    PresentationChartLineIcon,
    //     BriefcaseIcon,
    PaperAirplaneIcon,
    XMarkIcon,
} from "@heroicons/react/24/solid";

// componets
import DarkModeToggle from "~/features/DarkModeToggle";
import { Dialog } from "@headlessui/react";

// animations
import { Transition } from "@headlessui/react";
import Button from "~/components/Button";
import GitHubIcon from "~/assets/Icons/GitHubIcon";
import LinkedInIcon from "~/assets/Icons/LinkedInIcon";
// import Logo from "~/assets/images/logo.png";
// import Image from "next/image";

// interface NavBarProps {}

const NavBar = () => {
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
            <div className="w-40 p-4">
                <Button
                    ariaLabel="logo"
                    id="logo"
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        });
                    }}
                    text="AG"
                    size="none"
                    className="rounded-md py-0.5 px-1 lg:hidden"
                    ringClassNames="focus-visible:ring-blue-600 ring-offset-0 ring-offset-slate-400 dark:ring-offset-slate-700 dark:focus-visible:ring-blue-500 outline-none"
                />
                {/* <Image
                    src={Logo}
                    alt="logo"
                    width={100}
                    height={100}
                /> */}
            </div>
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
                            text="AG"
                            size="none"
                            className="hidden rounded-md px-1 lg:block"
                            ringClassNames="focus-visible:ring-blue-600 ring-offset-0 dark:focus-visible:ring-blue-500 outline-none ring-offset-slate-400 dark:ring-offset-slate-700"
                        />
                    </div>
                    <ul className="hidden gap-5 font-semibold sm:items-center lg:flex">
                        <li className="w-fit hover:text-blue-600 dark:hover:text-blue-500">
                            <Button
                                ariaLabel="projects"
                                className="gap-2 rounded-md px-1"
                                id="projects"
                                onClick={() => navigateToId("projects")}
                                ringClassNames="ring-offset-0 ring-2 ring-blue-600 dark:ring-blue-500 ring-offset-slate-400 dark:ring-offset-slate-700"
                                text="Projects"
                                size="none"
                                IconLeft={PresentationChartLineIcon}
                                IconLeftClassName="h-5 w-5"
                            />
                        </li>
                        {/* <li className="w-fit hover:text-blue-600 dark:hover:text-blue-500">
                            <Button
                                ariaLabel="work"
                                className="gap-2 rounded-md px-1"
                                id="work"
                                onClick={() => navigateToId("work-experience")}
                                ringClassNames="ring-offset-0 ring-2 ring-blue-600 dark:ring-blue-500 ring-offset-slate-400 dark:ring-offset-slate-700"
                                text="Work"
                                size="none"
                                IconLeft={BriefcaseIcon}
                                IconLeftClassName="h-5 w-5"
                            />
                        </li> */}
                        <li className="w-fit hover:text-blue-600 dark:hover:text-blue-500">
                            <Button
                                ariaLabel="contact"
                                className="gap-2 rounded-md px-1"
                                id="contact"
                                onClick={() => navigateToId("contact")}
                                ringClassNames="ring-offset-0 ring-2 ring-blue-600 dark:ring-blue-500 ring-offset-slate-400 dark:ring-offset-slate-700"
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
                                rel="noreferrer"
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
                                rel="noreferrer"
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
                                rel="noreferrer"
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
                    id="navbar-menu"
                    IconLeft={Bars3Icon}
                    onClick={() => setNavbarIsOpen(true)}
                    className={(isPressed) =>
                        `bg-slate-400 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 lg:hidden ${
                            isPressed
                                ? "bg-slate-500 hover:bg-slate-500 dark:bg-slate-800 dark:hover:bg-slate-800"
                                : "bg-slate-400 dark:bg-slate-700"
                        } ${navbarIsOpen ? "invisible" : ""}`
                    }
                    ringClassNames="ring-blue-500 ring-offset-slate-400 dark:ring-offset-slate-700"
                    size="mdSquare"
                />

                <div className="hidden lg:block">
                    <DarkModeToggle DarkModeController={DarkModeController} />
                </div>
            </div>

            <Transition
                appear
                show={navbarIsOpen}
                as="div"
            >
                <Dialog
                    open={navbarIsOpen}
                    onClose={() => setNavbarIsOpen(false)}
                    className="relative z-50"
                    as="div"
                    static
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div
                            className="fixed inset-0 bg-black/30 backdrop-blur"
                            aria-hidden="true"
                        />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 "
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-500 "
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel
                                className="flex h-full w-full max-w-[225px] transform 
                                    flex-col gap-5 bg-slate-400 p-4 text-slate-800 shadow-xl transition-all dark:bg-slate-700 dark:text-slate-300"
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
                                        text="AG"
                                        size="none"
                                        className="rounded-md py-0.5 px-1 outline-none"
                                        ringClassNames="ring-blue-600 ring-offset-0 ring-offset-slate-400 dark:ring-offset-slate-700 
                                        dark:ring-blue-500"
                                    />

                                    <Button
                                        ariaLabel="navbar menu"
                                        id="navbar-menu"
                                        IconLeft={XMarkIcon}
                                        onClick={() => setNavbarIsOpen(false)}
                                        className={(isPressed) =>
                                            `bg-slate-400 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 lg:hidden ${
                                                isPressed
                                                    ? "bg-slate-500 hover:bg-slate-500 dark:bg-slate-800 dark:hover:bg-slate-800"
                                                    : "bg-slate-400 dark:bg-slate-700"
                                            }`
                                        }
                                        ringClassNames="ring-blue-500 ring-offset-slate-400 dark:ring-offset-slate-700"
                                        size="mdSquare"
                                    />
                                </div>

                                <ul className="flex flex-col gap-5 font-semibold">
                                    <li className="w-fit hover:text-blue-600 dark:hover:text-blue-500">
                                        <Button
                                            ariaLabel="projects"
                                            className="gap-2 rounded-sm px-0.5"
                                            id="projects"
                                            onClick={() => {
                                                setNavbarIsOpen(false);
                                                setTimeout(() => {
                                                    navigateToId("projects");
                                                }, 500);
                                            }}
                                            ringClassNames="ring-offset-0 ring-offset-slate-400 dark:ring-offset-slate-700 ring-blue-600 ring-2
                                             dark:ring-blue-500"
                                            text="Projects"
                                            size="none"
                                            IconLeft={PresentationChartLineIcon}
                                            IconLeftClassName="h-5 w-5"
                                        />
                                    </li>
                                    {/* <li className="w-fit hover:text-blue-600 dark:hover:text-blue-500">
                                        <Button
                                            ariaLabel="work"
                                            id="work"
                                            onClick={() => {
                                                setNavbarIsOpen(false);
                                                setTimeout(() => {
                                                    navigateToId(
                                                        "work-experience"
                                                    );
                                                }, 500);
                                            }}
                                            className="gap-2 rounded-sm px-0.5"
                                            ringClassNames="ring-offset-0 ring-offset-slate-400 dark:ring-offset-slate-700 ring-blue-600 ring-2
                                            dark:ring-blue-500"
                                            text="Work"
                                            size="none"
                                            IconLeft={BriefcaseIcon}
                                            IconLeftClassName="h-5 w-5"
                                        />
                                    </li> */}
                                    <li className="w-fit hover:text-blue-600 dark:hover:text-blue-500">
                                        <Button
                                            ariaLabel="contact"
                                            id="contact"
                                            onClick={() => {
                                                setNavbarIsOpen(false);
                                                setTimeout(() => {
                                                    navigateToId("contact");
                                                }, 500);
                                            }}
                                            className="gap-2 rounded-sm px-0.5"
                                            ringClassNames="ring-offset-0 ring-offset-slate-400 dark:ring-offset-slate-700 ring-blue-600 ring-2
                                             dark:ring-blue-500"
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
                                            rel="noreferrer"
                                        >
                                            <LinkedInIcon className="h-5 w-5" />
                                            Linked In
                                        </a>
                                    </li>
                                    <li className="w-fit hover:text-blue-600 dark:hover:text-blue-500">
                                        <a
                                            href="https://github.com/athulgeorge37"
                                            target="_blank"
                                            className="flex items-center gap-2 rounded-md 
                                            py-0.5 px-1 outline-none focus-visible:ring-2
                                            focus-visible:ring-blue-600 dark:focus-visible:ring-blue-500"
                                            rel="noreferrer"
                                        >
                                            <GitHubIcon className="h-5 w-5" />
                                            GitHub
                                        </a>
                                    </li>
                                    <li className="w-fit outline-none hover:text-blue-600 dark:hover:text-blue-500">
                                        <a
                                            className="flex items-center gap-2 rounded-md py-0.5 px-1 
                                outline-none focus-visible:ring-2 focus-visible:ring-blue-600
                                 dark:focus-visible:ring-blue-500"
                                            target="_blank"
                                            href="https://drive.google.com/file/d/1PYFjf4laUxbGcbQV27XUwT6Rqoizl2Pw/view?usp=sharing"
                                            rel="noreferrer"
                                        >
                                            <DocumentTextIcon className="h-5 w-5" />
                                            Resume
                                        </a>
                                    </li>
                                </ul>

                                <div className="mt-auto">
                                    <DarkModeToggle
                                        DarkModeController={DarkModeController}
                                    />
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </nav>
    );
};

export default NavBar;
