"use client";

// helper

// animations
import { motion } from "framer-motion";

// components
import Button from "./Button";

// ui
import { ArrowDownIcon } from "@heroicons/react/24/solid";

interface AnimatedHeadingProps {}

const AnimatedHeading = ({}: AnimatedHeadingProps) => {
    return (
        <h1
            id="AnimatedHeading"
            className="m-5 mb-0 flex w-fit flex-col text-7xl font-bold tracking-wide sm:text-8xl lg:m-10"
        >
            <span className="mt-20 flex flex-col justify-between sm:flex-row sm:items-end lg:mt-0">
                <p className="mb-2 text-xl -tracking-normal sm:m-5">Hi, I'm</p>
                <span className="flex">
                    <motion.span
                        initial={{ x: -500, rotate: 90 }}
                        animate={{ x: 0, rotate: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        A
                    </motion.span>
                    <motion.span
                        initial={{ y: -300, rotate: 90 }}
                        animate={{ y: 0, rotate: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        t
                    </motion.span>
                    <motion.span
                        initial={{ x: 1300, rotate: 90 }}
                        animate={{ x: 0, rotate: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        h
                    </motion.span>
                    <motion.span
                        initial={{ x: 1300, rotate: 90 }}
                        animate={{ x: 0, rotate: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        u
                    </motion.span>
                    <motion.span
                        initial={{ x: 1300, rotate: 90 }}
                        animate={{ x: 0, rotate: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        l
                    </motion.span>
                </span>
            </span>{" "}
            <span className="flex">
                <motion.span
                    initial={{ x: -100, y: 0 }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 1.75 }}
                >
                    G
                </motion.span>
                <motion.span
                    initial={{ x: 50, y: 300 }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 1.75 }}
                >
                    e
                </motion.span>
                <motion.span
                    initial={{ x: 0, y: -90 }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 1.75 }}
                >
                    o
                </motion.span>
                <motion.span
                    initial={{ x: 0, y: 70 }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 1.75 }}
                >
                    r
                </motion.span>
                <motion.span
                    initial={{ x: 400, y: -200 }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 1.75 }}
                >
                    g
                </motion.span>
                <motion.span
                    initial={{ x: -200, y: 0 }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 1.75 }}
                >
                    e
                </motion.span>
            </span>
            <div className="mt-10 flex items-center justify-between">
                <p className=" sm:m- text-xl -tracking-normal">Web Developer</p>
                <Button
                    ariaLabel="scroll to projects"
                    id="scroll-to-projects"
                    text="Projects"
                    IconRight={ArrowDownIcon}
                    size="md"
                    className={(isPressed) =>
                        `h-fit w-fit bg-emerald-500 hover:brightness-110 ${
                            isPressed ? "bg-emerald-600" : "bg-emerald-500"
                        }`
                    }
                    ringClassNames="ring-emerald-500
                    ring-offset-slate-400 dark:ring-offset-slate-700"
                    onClick={() => {
                        document
                            .getElementById("projects")
                            ?.scrollIntoView({ behavior: "smooth" });
                    }}
                />
            </div>
        </h1>
    );
};

export default AnimatedHeading;
