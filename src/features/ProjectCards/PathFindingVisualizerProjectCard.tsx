"use client";

// hooks
import React, { useEffect, useState } from "react";
import Button from "~/components/Button";

// ui
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

// components
import Image from "next/image";

// assets
import {
    ComputerDesktopIcon,
    CodeBracketIcon,
} from "@heroicons/react/24/solid";
import PathFindingVisualizerImg1 from "~/assets/images/PathFindingVisualizer-Image-1.png";
import PathFindingVisualizerImg2 from "~/assets/images/PathFindingVisualizer-Image-2.png";
import PathFindingVisualizerImg3 from "~/assets/images/PathFindingVisualizer-Image-3.png";

// animations
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

// interface PathFindingVisualizerProjectCardProps {}

const data = [
    {
        id: 1,
        image: PathFindingVisualizerImg1,
        data: [
            "Animate Algorithms",
            "Draw Walls + Weights",
            "Clear Grid Cells",
            "Update Grid Size",
        ],
    },
    {
        id: 2,
        image: PathFindingVisualizerImg3,
        data: [
            "A* Algorithm",
            "Dijkstra's Algorithm",
            "Breadth First Search",
            "Greedy Best First Search",
        ],
    },
    {
        id: 3,
        image: PathFindingVisualizerImg2,
        data: [
            "Recursive Division",
            "Horizontal Skewed Recursive Division",
            "Vertical Skewed Recursive Division",
            "Scattered Walls + Weights",
        ],
    },
];

const PathFindingVisualizerProjectCard = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { ref, inView } = useInView({
        threshold: 0.5,
    });
    const cardAnimation = useAnimation();
    const numberAnimation = useAnimation();

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

    useEffect(() => {
        const executeAnimations = async () => {
            if (inView) {
                await cardAnimation.start({
                    x: 0,
                    opacity: 1,
                    transition: {
                        duration: 1.5,
                        type: "spring",
                        bounce: 0.2,
                    },
                });

                await numberAnimation.start({
                    opacity: 1,
                    transition: {
                        duration: 1,
                    },
                });
            } else {
                await cardAnimation.start({
                    opacity: 0,
                    x: "-100%",
                    transition: {
                        duration: 2,
                    },
                });

                await numberAnimation.start({
                    opacity: 0,
                    transition: {
                        duration: 1,
                    },
                });
            }
        };

        void executeAnimations();
    }, [inView]);

    return (
        <div
            ref={ref}
            className="relative mx-auto w-fit"
        >
            <motion.span
                animate={numberAnimation}
                className="absolute -top-24 -right-4 text-9xl font-extrabold text-slate-400 dark:text-slate-500 md:-top-20 md:-right-24"
            >
                02
            </motion.span>

            <motion.div
                animate={cardAnimation}
                className="relative mx-auto flex w-fit flex-col justify-between overflow-hidden 
                    rounded-lg bg-slate-300 shadow-xl dark:bg-slate-600 lg:w-full lg:max-w-5xl lg:flex-row"
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
                                <Image
                                    key={slide.id}
                                    src={slide.image}
                                    alt={`path finding visualizer image ${slide.id}`}
                                    height={250}
                                    width={550}
                                    className="pointer-events-none flex-shrink-0 object-cover object-center"
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
                        {data[currentSlide]?.data.map((bulletPoint, index) => {
                            return <li key={index}>{bulletPoint}</li>;
                        })}
                    </ul>

                    <div className="flex  justify-between gap-3  sm:items-center">
                        <div className="flex gap-3">
                            <a
                                href="https://github.com/athulgeorge37/Path_Finding_Visualizer"
                                target="_blank"
                                aria-label="pathfinding visualizer repository"
                                className="flex cursor-pointer items-center justify-between gap-2 
                                rounded-md bg-blue-600 px-2 py-1 font-semibold text-slate-300 outline-none focus-visible:ring-2 
                                focus-visible:ring-blue-600 focus-visible:ring-offset-2 
                                focus-visible:ring-offset-slate-300 dark:bg-blue-500 
                                dark:focus-visible:ring-blue-500 dark:focus-visible:ring-offset-slate-600"
                                rel="noreferrer"
                            >
                                <CodeBracketIcon className="h-5 w-5" />
                                Code
                            </a>
                            <a
                                href="https://athulgeorge37.github.io/Path_Finding_Visualizer/"
                                target="_blank"
                                aria-label="path finding vizualizer demo"
                                className="flex cursor-pointer items-center justify-between gap-2 
                                rounded-md bg-blue-600 px-2 py-1 font-semibold text-slate-300 outline-none focus-visible:ring-2 
                                focus-visible:ring-blue-600 focus-visible:ring-offset-2 
                                focus-visible:ring-offset-slate-300 dark:bg-blue-500 
                                dark:focus-visible:ring-blue-500 dark:focus-visible:ring-offset-slate-600"
                                rel="noreferrer"
                            >
                                <ComputerDesktopIcon className="h-5 w-5" />
                                Demo
                            </a>
                        </div>

                        <div className="flex w-fit items-center justify-center gap-3 rounded-full px-1.5 py-1 ">
                            <Button
                                ariaLabel="go back one image"
                                id="slideshow-left-arrow-pathfindingvisualizer"
                                IconLeft={ChevronLeftIcon}
                                size="smSquare"
                                onClick={() =>
                                    updateSlideNumber(currentSlide - 1)
                                }
                                className="rounded-full text-slate-800 dark:text-slate-100"
                                ringClassNames="ring-offset-slate-300 dark:ring-offset-slate-600 
                                ring-blue-600 dark:ring-blue-500"
                            />

                            {data.map((item, index) => {
                                return (
                                    <Button
                                        key={`${item.id}-slide-bullet-pathfindingvisualizer`}
                                        size="none"
                                        ariaLabel={`go to slide ${item.id}`}
                                        id={`skip-to-slide-${item.id}-pathfindingvisualizer`}
                                        onClick={() => updateSlideNumber(index)}
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
                                id="slideshow-right-arrow-pathfindingvisualizer"
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
            </motion.div>
        </div>
    );
};

export default PathFindingVisualizerProjectCard;
