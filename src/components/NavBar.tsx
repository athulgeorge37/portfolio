"use client";
// context

// hooks
import React, { useState } from "react";

// custom hooks

// features

// form

// ui
import { Bars3Icon } from "@heroicons/react/24/solid";

// animations
import { Transition } from "@headlessui/react";
import Button from "~/components/Button";

// helper

interface NavBarProps {}

const NavBar = ({}: NavBarProps) => {
    const [navbarIsOpen, setNavbarIsOpen] = useState(false);

    return (
        <nav id="NavBar" className="mx-auto w-full max-w-5xl">
            <div className="flex items-center justify-between p-4">
                <div>Logo</div>
                <ul className="hidden gap-5 font-semibold sm:flex">
                    <li>Resume</li>
                    <li>Projects</li>
                    <li>Work</li>
                    <li>Contact</li>
                    <li>Linked In</li>
                    <li>GitHub</li>
                </ul>

                <Button
                    ariaLabel="navbar menu"
                    id="navbar"
                    IconLeft={Bars3Icon}
                    onClick={() => setNavbarIsOpen(!navbarIsOpen)}
                    variant="blank"
                    additionalClassNames="sm:hidden"
                    size="mdSquare"
                />
            </div>

            <Transition
                className="z-100 fixed top-0 left-0 flex h-screen w-full max-w-xs flex-col gap-10 bg-blue-200 p-5 sm:hidden"
                show={navbarIsOpen}
                enter="transform transition ease-in-out duration-500 "
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 "
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
            >
                <div>Logo</div>
                <ul className="flex flex-col gap-5">
                    <li>Resume</li>
                    <li>Projects</li>
                    <li>Work</li>
                    <li>Contact</li>
                    <li>Linked In</li>
                    <li>GitHub</li>
                </ul>
            </Transition>
        </nav>
    );
};

export default NavBar;
