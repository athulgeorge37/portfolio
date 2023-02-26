"use client";

// hooks
import React, { useEffect, useState } from "react";
import Button from "~/components/Button";

// components
import Image from "next/image";

// ui
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

// assets
import {
    ComputerDesktopIcon,
    CodeBracketIcon,
} from "@heroicons/react/24/solid";
import BreadditImg1 from "~/assets/images/Breaddit-Image-1.png";
import BreadditImg2 from "~/assets/images/Breaddit-Image-2.png";
import BreadditImg3 from "~/assets/images/Breaddit-Image-3.png";

// // animations
// import { useInView } from "react-intersection-observer";
// import { motion, useAnimation } from "framer-motion";

// interface BreadditProjectCardProps {}

const data = [
    {
        // image: "bg-path-finding-visualizer-1",
        id: 1,
        image: BreadditImg1,
        data: [
            "MFA, JWT, Protected Routes, Encryption",
            "Rest API, Protected Endpoints",
            "CRUD Functionality, Filtering",
            "Image & Email handling",
        ],
    },
    {
        id: 2,
        image: BreadditImg2,
        data: [
            "Create Threads",
            "Create, Edit, Delete Posts & Comments",
            "Up/Down Vote Posts & Comments",
            "Filter & Search Posts",
        ],
    },
    {
        id: 3,
        image: BreadditImg3,
        data: [
            "Edit Profile Picture & Details",
            "Follow Users",
            "See User's Posts, Comments & Replies",
            "Admin Dashboard (Moderate Content)",
        ],
    },
];

const BreadditProjectCard = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // const { ref, inView } = useInView({
    //     threshold: 0.5,
    // });
    // const cardAnimation = useAnimation();
    // const numberAnimation = useAnimation();

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

    // useEffect(() => {
    //     const executeAnimations = async () => {
    //         if (inView) {
    //             await cardAnimation.start({
    //                 x: 0,
    //                 // opacity: 1,
    //                 transition: {
    //                     duration: 1,
    //                     type: "spring",
    //                     bounce: 0.2,
    //                 },
    //             });

    //             // await numberAnimation.start({
    //             //     // opacity: 1,
    //             //     transition: {
    //             //         duration: 0.5,
    //             //     },
    //             // });
    //         } else {
    //             await cardAnimation.start({
    //                 // opacity: 0,
    //                 x: "-100vw",
    //                 transition: {
    //                     duration: 2,
    //                 },
    //             });

    //             // await numberAnimation.start({
    //             //     // opacity: 0,
    //             //     transition: {
    //             //         duration: 0.5,
    //             //     },
    //             // });
    //         }
    //     };
    //     void executeAnimations();
    // }, [cardAnimation, inView, numberAnimation]);

    return (
        <div
            // ref={ref}
            className="relative mx-auto w-full "
        >
            <span
                // animate={cardAnimation}
                className="absolute -top-24 -right-4 text-9xl font-extrabold text-slate-400 
                dark:text-slate-500 md:-top-20 md:-right-24"
            >
                01
            </span>

            <div
                // animate={cardAnimation}
                className="relative mx-auto flex w-fit flex-col justify-between overflow-hidden 
                rounded-lg bg-slate-300 shadow-xl dark:bg-slate-600 lg:w-full lg:max-w-5xl lg:flex-row"
            >
                <div className="h-[250px] overflow-hidden lg:h-[400px] lg:w-[550px]">
                    <div
                        className="flex h-full w-full transition-transform duration-1000 ease-out"
                        style={{
                            transform: `translateX(-${currentSlide * 100}%)`,
                        }}
                    >
                        {/* {data.map((slide) => {
                            return (
                                <div
                                    key={slide.image}
                                    className={`${slide.image} h-full w-full flex-shrink-0 bg-cover bg-center`}
                                />
                            );
                        })} */}
                        {data.map((slide) => {
                            return (
                                <Image
                                    key={slide.id}
                                    src={slide.image}
                                    alt={`breaddit image ${slide.id}`}
                                    height={250}
                                    width={550}
                                    className="pointer-events-none w-full flex-shrink-0 object-cover object-center"
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

                    <div className="flex flex-col gap-3 sm:flex-row">
                        <ul className="flex gap-3">
                            <li className="rounded-md border border-slate-600 px-1.5 py-1 text-sm shadow-sm dark:border-slate-500">
                                React
                            </li>
                            <li className="rounded-md border border-slate-600 px-1.5 py-1 text-sm shadow-sm dark:border-slate-500">
                                Node
                            </li>
                            <li className="rounded-md border border-slate-600 px-1.5 py-1 text-sm shadow-sm dark:border-slate-500">
                                MySQL
                            </li>
                        </ul>
                        <ul className="flex gap-3">
                            <li className="rounded-md border border-slate-600 px-1.5 py-1 text-sm shadow-sm dark:border-slate-500">
                                Sequelize
                            </li>
                            <li className="rounded-md border border-slate-600 px-1.5 py-1 text-sm shadow-sm dark:border-slate-500">
                                GraphQL
                            </li>
                            <li className="rounded-md border border-slate-600 px-1.5 py-1 text-sm shadow-sm dark:border-slate-500">
                                SASS
                            </li>
                        </ul>
                    </div>

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
                                className="flex cursor-pointer items-center justify-between gap-2 
                                rounded-md bg-blue-600 px-2 py-1 font-semibold text-slate-300 outline-none 
                                focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 
                                focus-visible:ring-offset-slate-300 dark:bg-blue-500 
                                dark:focus-visible:ring-blue-500 dark:focus-visible:ring-offset-slate-600"
                                rel="noreferrer"
                            >
                                <CodeBracketIcon className="h-5 w-5" />
                                Code
                            </a>
                            <a
                                href="https://breaddit-theta.vercel.app/"
                                target="_blank"
                                aria-label="breaddit demo"
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

                        <div className="flex w-fit items-center justify-center gap-3 rounded-full  px-1.5 py-1 ">
                            <Button
                                ariaLabel="go back one image"
                                id="slideshow-left-arrow-breaddit"
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
                                        key={`${item.id}-slide-bullet-breaddit`}
                                        size="none"
                                        ariaLabel={`go to slide ${item.id}`}
                                        id={`skip-to-slide-${item.id}-breaddit`}
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
                                id="slideshow-right-arrow-breaddit"
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

                    <div className="flex flex-col justify-between gap-2 sm:flex-row">
                        <span className="text-slate-600 dark:text-slate-400">
                            {"Don't want to create an account?"}
                        </span>
                        <a
                            href="https://breaddit-theta.vercel.app/signin"
                            target="_blank"
                            aria-label="breaddit guest sign in"
                            className="rounded-md px-1 py-0.5 font-semibold 
                            text-slate-600 underline-offset-4 outline-none hover:text-blue-600 
                            hover:underline focus-visible:text-blue-600 focus-visible:ring-2 
                            focus-visible:ring-blue-600 dark:text-slate-400 dark:hover:text-blue-500 
                            dark:focus-visible:text-blue-500 dark:focus-visible:ring-blue-500"
                            rel="noreferrer"
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
