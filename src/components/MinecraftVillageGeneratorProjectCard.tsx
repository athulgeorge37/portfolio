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

interface MinecraftVillageGeneratorProjectCardProps {}

const data = [
    {
        image: "bg-minecraft-village-generator-1",
        data: [
            "Object oriented python",
            "Utilises mcpi api for minecraft commands",
            "Works on any minecraft terrain",
            "Group project",
        ],
    },
    {
        image: "bg-minecraft-village-generator-2",
        data: [
            "Randomly generates buildings & gardens",
            "Utilises wave function collapse algorithm",
            "Ensures terrain is smoothed around buildings",
            "Ensures buildings dont overlap",
        ],
    },
    {
        image: "bg-minecraft-village-generator-3",
        data: [
            "Generates paths with A* algorithm",
            "Paths avoid water & lava",
            "Generates lamps along path",
            "A* works in 3 dimensions",
        ],
    },
];

const MinecraftVillageGeneratorProjectCard =
    ({}: MinecraftVillageGeneratorProjectCardProps) => {
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
                    03
                </span>

                <div
                    className="relative mx-auto flex w-full flex-col justify-between overflow-hidden 
                    rounded-lg bg-slate-300 shadow-xl dark:bg-slate-600 lg:max-w-5xl lg:flex-row"
                >
                    <div className="h-[250px] overflow-hidden lg:h-[400px] lg:w-[550px]">
                        <div
                            className=" flex h-full w-full transition-transform duration-1000 ease-out "
                            style={{
                                transform: `translateX(-${
                                    currentSlide * 100
                                }%)`,
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
                        <div className="flex flex-col gap-3">
                            <h3 className="text-4xl font-semibold lg:whitespace-nowrap">
                                Minecraft Village Generator
                            </h3>

                            <span className="text-slate-600 dark:text-slate-400">
                                Procedurally Generates a Random Minecraft
                                Villiage
                            </span>
                        </div>

                        <ul className="flex gap-3">
                            <li className="rounded-md border border-slate-600 px-1.5 py-1 text-sm shadow-sm dark:border-slate-500">
                                Python
                            </li>
                            <li className="rounded-md border border-slate-600 px-1.5 py-1 text-sm shadow-sm dark:border-slate-500">
                                mcpi
                            </li>
                        </ul>

                        <ul className="ml-5 list-disc text-slate-700 dark:text-slate-300">
                            {data[currentSlide]?.data.map(
                                (bulletPoint, index) => {
                                    return <li key={index}>{bulletPoint}</li>;
                                }
                            )}
                        </ul>

                        <div className="flex justify-between gap-3 sm:items-center">
                            <div className="flex gap-3">
                                <a
                                    href="https://www.youtube.com/watch?v=Eu465Jue3ns"
                                    target="_blank"
                                    aria-label="Minecraft video demo"
                                    className="flex cursor-pointer items-center justify-between gap-2 
                                rounded-md bg-blue-600 px-2 py-1 font-semibold text-slate-300 outline-none focus-visible:ring-2 
                                focus-visible:ring-blue-600 focus-visible:ring-offset-2 
                                focus-visible:ring-offset-slate-300 dark:bg-blue-500 
                                dark:focus-visible:ring-blue-500 dark:focus-visible:ring-offset-slate-600"
                                >
                                    <ComputerDesktopIcon className="h-5 w-5" />
                                    Video Demo
                                </a>
                            </div>

                            <div className="flex w-fit items-center justify-center gap-3 rounded-full px-1.5 py-1">
                                <Button
                                    ariaLabel="go back one image"
                                    id="left-arrow"
                                    IconLeft={ChevronLeftIcon}
                                    size="smSquare"
                                    onClick={() =>
                                        updateSlideNumber(currentSlide - 1)
                                    }
                                    className="rounded-full text-slate-800 dark:text-slate-100"
                                    ringClassNames="ring-offset-slate-300 dark:ring-offset-slate-600 
                                ring-blue-600 dark:ring-blue-500"
                                />

                                {data.map((_, index) => {
                                    return (
                                        <Button
                                            key={`${index}-slide-bullet-breaddit`}
                                            size="none"
                                            ariaLabel={`go to slide ${index}`}
                                            id="skip-to-slide"
                                            onClick={() =>
                                                updateSlideNumber(index)
                                            }
                                            className={`h-2.5 w-2.5 rounded-full ${
                                                index === currentSlide
                                                    ? "bg-blue-600 dark:bg-blue-500"
                                                    : "bg-slate-700 dark:bg-slate-300"
                                            }`}
                                            ringClassNames="ring-offset-slate-300 dark:ring-offset-slate-600 
                                        ring-blue-600 dark:ring-blue-500"
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
                                    className="rounded-full text-slate-800  dark:text-slate-100 "
                                    ringClassNames="ring-offset-slate-300 dark:ring-offset-slate-600 
                                ring-blue-600 dark:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

export default MinecraftVillageGeneratorProjectCard;
