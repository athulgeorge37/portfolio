"use client";

// helper

// animations
import { motion } from "framer-motion";
import TypewriterComponent from "typewriter-effect";

// components
import Button from "~/components/Button";

// ui
import { ArrowDownIcon } from "@heroicons/react/24/solid";

const AnimatedHeading = () => {
    return (
        <h1
            id="AnimatedHeading"
            className="m-5 mb-0 flex w-fit flex-col text-7xl font-bold tracking-wide sm:text-8xl lg:m-10"
        >
            <span className="mt-20 flex flex-col justify-between sm:flex-row sm:items-end lg:mt-0">
                <motion.p
                    initial={{ x: "-100vw" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1.5 }}
                    className="mb-2 text-xl -tracking-normal sm:m-5"
                >
                    {"Hi, I'm"}
                </motion.p>
                <span className="flex">
                    <motion.span
                        initial={{ y: "-100vh" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        A
                    </motion.span>
                    <motion.span
                        initial={{ y: "-100vh" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        t
                    </motion.span>
                    <motion.span
                        initial={{ y: "-100vh" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        h
                    </motion.span>
                    <motion.span
                        initial={{ x: "100vw" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        u
                    </motion.span>
                    <motion.span
                        initial={{ x: "100vw" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        l
                    </motion.span>
                </span>
            </span>

            <span className="flex h-fit overflow-hidden sm:justify-center">
                <motion.span
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{
                        delay: 1,
                        duration: 1,
                        type: "spring",
                        bounce: 0.2,
                    }}
                    className="pb-4"
                >
                    George
                </motion.span>
            </span>

            <div className=" flex items-center justify-between sm:ml-4 sm:mt-5">
                {/* <p className=" sm:m- text-xl -tracking-normal">Web Developer</p> */}
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 1.5,
                        duration: 1,
                    }}
                    className=" text-xl -tracking-normal"
                >
                    <TypewriterComponent
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 100,
                            strings: [
                                "A Web Developer",
                                "I do Front End",
                                "And Back End",
                                "Bringing your ideas",
                                "to life.",
                                "Shoot me an email",
                                "and lets talk.",
                                "😆",
                            ],
                        }}
                    />
                </motion.span>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 1.5,
                        duration: 1,
                    }}
                >
                    <Button
                        ariaLabel="scroll to projects"
                        id="scroll-to-projects"
                        text="Projects"
                        IconRight={ArrowDownIcon}
                        size="md"
                        className={(isPressed) =>
                            `hidden h-fit w-fit bg-emerald-500 text-slate-800 hover:brightness-110 dark:text-white sm:flex ${
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
                </motion.div>
            </div>
        </h1>
    );
};

export default AnimatedHeading;
