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

interface PathFindingVisualizerProjectCardProps {}

const data = [
    {
        image: "bg-path-finding-visualizer-1",
        data: [
            "Animate Algorithms",
            "Draw Walls + Weights",
            "Clear Grid Cells",
            "Update Grid Size",
        ],
    },
    {
        image: "bg-path-finding-visualizer-3",
        data: [
            "A* Algorithm",
            "Dijkstra's Algorithm",
            "Breadth First Search",
            "Greedy Best First Search",
        ],
    },
    {
        image: "bg-path-finding-visualizer-2",
        data: [
            "Recursive Division",
            "Horizontal Skewed Recursive Division",
            "Vertical Skewed Recursive Division",
            "Scattered Walls + Weights",
        ],
    },
];

const PathFindingVisualizerProjectCard =
    ({}: PathFindingVisualizerProjectCardProps) => {
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
            <div className="relative mx-auto w-fit">
                <span className="absolute -top-24 -right-4 text-9xl font-extrabold text-slate-400 dark:text-slate-500 md:-top-20 md:-right-24">
                    02
                </span>

                <div
                    className="relative mx-auto flex w-fit flex-col justify-between overflow-hidden 
                    rounded-lg bg-slate-300 shadow-xl dark:bg-slate-600 lg:w-full lg:max-w-5xl lg:flex-row"
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
                        <div className="flex flex-col  gap-2">
                            <h3 className="text-4xl font-semibold">
                                Path Finding Visualizer
                            </h3>

                            <span className="text-slate-600 dark:text-slate-400">
                                Interactive tool for graph traversal & maze
                                generation algorithms
                            </span>
                        </div>

                        <ul className="flex gap-3">
                            <li className="rounded-md border border-slate-600 px-1.5 py-1 text-sm shadow-sm dark:border-slate-500">
                                React
                            </li>
                            <li className="rounded-md border border-slate-600 px-1.5 py-1 text-sm shadow-sm dark:border-slate-500">
                                Javascript
                            </li>
                            <li className="rounded-md border border-slate-600 px-1.5 py-1 text-sm shadow-sm dark:border-slate-500">
                                CSS
                            </li>
                        </ul>

                        <ul className="ml-5 list-disc text-slate-700 dark:text-slate-300">
                            {data[currentSlide]?.data.map(
                                (bulletPoint, index) => {
                                    return <li key={index}>{bulletPoint}</li>;
                                }
                            )}
                        </ul>

                        <div className="flex  justify-between gap-3  sm:items-center">
                            <div className="flex gap-3">
                                <a
                                    href="https://github.com/athulgeorge37/Path_Finding_Visualizer"
                                    target="_blank"
                                    aria-label="pathfinding visualizer repository"
                                    className="flex cursor-pointer items-center justify-between gap-2 rounded-md bg-blue-600 px-2 py-1 font-semibold text-slate-300 dark:bg-blue-500"
                                >
                                    <CodeBracketIcon className="h-5 w-5" />
                                    Code
                                </a>
                                <a
                                    href="https://athulgeorge37.github.io/Path_Finding_Visualizer/"
                                    target="_blank"
                                    aria-label="path finding vizualizer demo"
                                    className="flex cursor-pointer items-center justify-between gap-2 rounded-md bg-blue-600 px-2 py-1 font-semibold text-slate-300 dark:bg-blue-500"
                                >
                                    <ComputerDesktopIcon className="h-5 w-5" />
                                    Demo
                                </a>
                            </div>

                            <div className="flex w-fit items-center justify-center gap-3 rounded-full px-1.5 py-1 ">
                                <Button
                                    ariaLabel="go back one image"
                                    id="left-arrow"
                                    IconLeft={ChevronLeftIcon}
                                    size="smSquare"
                                    onClick={() =>
                                        updateSlideNumber(currentSlide - 1)
                                    }
                                    className="rounded-full text-slate-100 hover:bg-slate-500 dark:hover:bg-slate-400"
                                    ringClassNames=""
                                />

                                {data.map((_, index) => {
                                    return (
                                        <button
                                            key={`${index}-slide-bullet-pathfinding`}
                                            aria-label={`go to slide ${index}`}
                                            id="skip-to-slide"
                                            onClick={() =>
                                                updateSlideNumber(index)
                                            }
                                            className={`h-2.5 w-2.5 rounded-full ${
                                                index === currentSlide
                                                    ? "bg-blue-600 dark:bg-blue-500"
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
                                    className="rounded-full text-slate-100 hover:bg-slate-500 dark:hover:bg-slate-400"
                                    ringClassNames=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

export default PathFindingVisualizerProjectCard;
