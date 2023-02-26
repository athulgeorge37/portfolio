"use client";

// hooks
import React, { useEffect, useState } from "react";
import Button from "~/components/Button";
import type { StaticImageData } from "next/image";

// ui
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

// components
import Image from "next/image";

// assets
import {
    ComputerDesktopIcon,
    CodeBracketIcon,
} from "@heroicons/react/24/solid";

interface ProjectCardProps {
    data: {
        id: number;
        image: StaticImageData;
        bulletPoints: string[];
    }[];
    cardNumber: string;
    title: string;
    description: string;
    technologies: string[];
    codeLink?: string;
    demoLink?: string;
    videoDemoLink?: string;
    id: string;
    extraInformation?: React.ReactNode;
}

const ProjectCard = ({
    id,
    cardNumber,
    title,
    description,
    technologies,
    data,
    codeLink,
    demoLink,
    videoDemoLink,
    extraInformation,
}: ProjectCardProps) => {
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
    }, [data.length]);

    return (
        <div
            // ref={ref}
            id={`${id}-project-card`}
            className="relative mx-auto w-fit"
        >
            <span
                // animate={numberAnimation}
                className="absolute -top-24 -right-4 text-9xl font-extrabold text-slate-400 
                dark:text-slate-500 md:-top-20 md:-right-24"
            >
                {cardNumber}
            </span>

            {/* left col */}
            <div
                //     animate={cardAnimation}
                className="relative mx-auto flex w-fit flex-col justify-between overflow-hidden 
                    rounded-lg bg-slate-300 shadow-xl dark:bg-slate-600 lg:w-full lg:max-w-5xl lg:flex-row"
            >
                {/* image slideshow */}
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
                                    className="pointer-events-none w-full flex-shrink-0 object-cover object-center"
                                />
                            );
                        })}
                    </div>
                </div>

                {/* right col */}
                <div className="flex flex-col justify-center gap-5 px-5 py-5 sm:px-10">
                    {/* title and description */}
                    <div className="flex flex-col  gap-2">
                        <h3 className="text-4xl font-semibold">{title}</h3>

                        <span className="text-slate-600 dark:text-slate-400">
                            {description}
                        </span>
                    </div>

                    {/* technologies */}
                    <ul className="flex gap-3">
                        {technologies.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className="rounded-md border border-slate-600 px-1.5 py-1 text-sm shadow-sm dark:border-slate-500"
                                >
                                    {item}
                                </li>
                            );
                        })}
                    </ul>

                    {/* bullet points */}
                    <div className="flex w-[420px] overflow-hidden">
                        {data.map((item) => {
                            return (
                                <ul
                                    key={item.id}
                                    className="w-full flex-shrink-0 list-disc text-slate-700 
                                    transition-transform duration-1000 ease-out dark:text-slate-300"
                                    style={{
                                        transform: `translateX(-${
                                            currentSlide * 100
                                        }%)`,
                                    }}
                                >
                                    {item.bulletPoints.map((bullet, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="ml-5"
                                            >
                                                {bullet}
                                            </li>
                                        );
                                    })}
                                </ul>
                            );
                        })}
                    </div>

                    <div className="flex  justify-between gap-3  sm:items-center">
                        {/* links */}
                        <div className="flex gap-3">
                            {codeLink && (
                                <a
                                    href={codeLink}
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
                            )}
                            {demoLink && (
                                <a
                                    href={demoLink}
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
                            )}

                            {videoDemoLink && (
                                <a
                                    href={videoDemoLink}
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
                                    Video Demo
                                </a>
                            )}
                        </div>

                        {/* slide show buttons */}
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

                    {extraInformation}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
