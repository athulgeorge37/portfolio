"use client";

// hooks
import React, { useEffect, useState } from "react";
import Button from "~/components/Button";

// ui
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

// assets
import {
    ComputerDesktopIcon,
    CodeBracketIcon,
} from "@heroicons/react/24/solid";

interface BreadditProjectCardProps {}

const data = [
    {
        // image: "bg-path-finding-visualizer-1",
        image: "bg-breaddit-1",
        data: [
            "MFA, JWT, Protected Routes, Encryption",
            "Rest API, Protected Endpoints",
            "CRUD Functionality, Filtering",
            "Image & Email handling",
        ],
    },
    {
        image: "bg-breaddit-2",
        data: [
            "Create Threads",
            "Create, Edit, Delete Posts & Comments",
            "Up/Down Vote Posts & Comments",
            "Filter & Search Posts",
        ],
    },
    {
        image: "bg-breaddit-3",
        data: [
            "Edit Profile Picture & Details",
            "Follow Users",
            "See User's Posts, Comments & Replies",
            "Admin Dashboard (Moderate Content)",
        ],
    },
];

const BreadditProjectCard = ({}: BreadditProjectCardProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const updateSlideNumber = (newSlideNumber: number) => {
        if (newSlideNumber < 0) {
            setCurrentSlide(data.length - 1);
            return;
        }
        if (newSlideNumber > data.length - 1) {
            setCurrentSlide(0);
            return;
        }

        setCurrentSlide(newSlideNumber);
    };

    useEffect(() => {
        // starting automatic carousel sliding
        const slideOverInterval = setInterval(() => {
            setCurrentSlide((current) =>
                current === data.length - 1 ? 0 : current + 1
            );
            // goes to next slide every 10 seconds
        }, 10000);

        // removing interval on unmount
        return () => clearInterval(slideOverInterval);
    }, []);

    return (
        <div className="relative mx-auto w-full">
            <span className="absolute -top-24 -right-4 text-9xl font-extrabold text-slate-400 dark:text-slate-500 md:-top-20 md:-right-24">
                01
            </span>

            <div
                className="relative mx-auto flex w-full flex-col justify-between overflow-hidden 
                    rounded-lg bg-slate-300 shadow-xl dark:bg-slate-600 lg:max-w-5xl lg:flex-row"
            >
                <div className="h-[250px] overflow-hidden lg:h-[400px] lg:w-[550px]">
                    <div
                        className=" flex h-full w-full transition-transform duration-1000 ease-out "
                        style={{
                            transform: `translateX(-${currentSlide * 100}%)`,
                        }}
                    >
                        {data.map((slide) => {
                            return (
                                <div
                                    key={slide.image}
                                    className={`${slide.image} h-full w-full flex-shrink-0 bg-cover bg-center`}
                                />
                            );
                        })}
                    </div>
                </div>

                <div className="flex flex-col justify-center gap-5 px-5 py-5 sm:px-10">
                    <div className="flex items-end gap-3">
                        <h3 className="text-4xl font-semibold">Breaddit</h3>

                        <span className="whitespace-nowrap text-slate-600 dark:text-slate-400">
                            Full Stack Reddit Clone
                        </span>
                    </div>

                    <ul className="flex flex-col gap-3 sm:flex-row">
                        <div className="flex gap-3">
                            <li className="rounded-md border border-slate-600 px-1.5 py-1 text-sm shadow-sm dark:border-slate-500">
                                React
                            </li>
                            <li className="rounded-md border border-slate-600 px-1.5 py-1 text-sm shadow-sm dark:border-slate-500">
                                Node
                            </li>
                            <li className="rounded-md border border-slate-600 px-1.5 py-1 text-sm shadow-sm dark:border-slate-500">
                                MySQL
                            </li>
                        </div>
                        <div className="flex gap-3">
                            <li className="rounded-md border border-slate-600 px-1.5 py-1 text-sm shadow-sm dark:border-slate-500">
                                Sequelize
                            </li>
                            <li className="rounded-md border border-slate-600 px-1.5 py-1 text-sm shadow-sm dark:border-slate-500">
                                GraphQL
                            </li>
                            <li className="rounded-md border border-slate-600 px-1.5 py-1 text-sm shadow-sm dark:border-slate-500">
                                SASS
                            </li>
                        </div>
                    </ul>

                    <ul className="ml-5 list-disc text-slate-700 dark:text-slate-300">
                        {data[currentSlide]?.data.map((bulletPoint, index) => {
                            return <li key={index}>{bulletPoint}</li>;
                        })}
                    </ul>

                    <div className="flex justify-between gap-3 sm:items-center">
                        <div className="flex gap-3">
                            <a
                                href="https://github.com/athulgeorge37/Breaddit"
                                target="_blank"
                                aria-label="breaddit repository"
                                className="flex cursor-pointer items-center justify-between gap-2 rounded-md bg-blue-600 px-2 py-1 font-semibold text-slate-300 dark:bg-blue-500"
                            >
                                <CodeBracketIcon className="h-5 w-5" />
                                Code
                            </a>
                            <a
                                href="https://breaddit-theta.vercel.app/"
                                target="_blank"
                                aria-label="breaddit demo"
                                className="flex cursor-pointer items-center justify-between gap-2 rounded-md bg-blue-600 px-2 py-1 font-semibold text-slate-300 dark:bg-blue-500"
                            >
                                <ComputerDesktopIcon className="h-5 w-5" />
                                Demo
                            </a>
                        </div>

                        <div className="flex w-fit items-center justify-center gap-3 rounded-full bg-slate-400 px-1.5 py-1 dark:bg-slate-500">
                            <Button
                                ariaLabel="go back one image"
                                id="left-arrow"
                                IconLeft={ChevronLeftIcon}
                                size="smSquare"
                                onClick={() =>
                                    updateSlideNumber(currentSlide - 1)
                                }
                                variant="null"
                                additionalClassNames="text-slate-100 hover:bg-slate-500 dark:hover:bg-slate-400 rounded-full"
                            />

                            {data.map((_, index) => {
                                return (
                                    <button
                                        key={`${index}-slide-bullet-breaddit`}
                                        aria-label={`go to slide ${index}`}
                                        id="skip-to-slide"
                                        onClick={() => updateSlideNumber(index)}
                                        className={`h-2.5 w-2.5 rounded-full ${
                                            index === currentSlide
                                                ? "bg-blue-600 dark:bg-blue-600"
                                                : "bg-slate-100 dark:bg-slate-300"
                                        }`}
                                    />
                                );
                            })}

                            <Button
                                ariaLabel="go back one image"
                                id="left-arrow"
                                IconLeft={ChevronRightIcon}
                                size="smSquare"
                                onClick={() =>
                                    updateSlideNumber(currentSlide + 1)
                                }
                                variant="null"
                                additionalClassNames="text-slate-100 hover:bg-slate-500 dark:hover:bg-slate-400 rounded-full"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-between gap-2 sm:flex-row">
                        <span className="text-slate-600 dark:text-slate-400">
                            Don't want to create an account?
                        </span>
                        <a
                            href="https://breaddit-theta.vercel.app/signin"
                            target="_blank"
                            aria-label="breaddit guest sign in"
                            className="font-semibold text-slate-600 underline-offset-4 hover:text-blue-600 hover:underline dark:text-slate-400 dark:hover:text-blue-500"
                        >
                            Sign In As Guest
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreadditProjectCard;
