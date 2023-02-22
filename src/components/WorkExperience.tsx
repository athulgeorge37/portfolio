// hooks
import React from "react";

// ui
import { Disclosure } from "@headlessui/react";

// animations
import { Transition } from "@headlessui/react";
import { motion, MotionConfig } from "framer-motion";
import useMeasure from "react-use-measure";

// assets
import { ChevronRightIcon } from "@heroicons/react/24/solid";

interface WorkExperienceProps {
    buttonText: string;
    panelContent: string[];
}

const WorkExperience = ({ buttonText, panelContent }: WorkExperienceProps) => {
    const [ref, bounds] = useMeasure();

    return (
        <div id="WorkExperience" className="flex max-w-xl flex-col">
            <MotionConfig
                transition={{ type: "ease", ease: "easeInOut", duration: 0.4 }}
            >
                <motion.div
                    animate={{
                        height: bounds.height > 0 ? bounds.height : undefined,
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                >
                    <div ref={ref}>
                        <Disclosure>
                            <Disclosure.Button
                                className="flex w-full items-center justify-between gap-2
                                rounded-md bg-slate-500 py-2 px-3 font-bold
                                shadow-md outline-none ring-offset-4
                                ring-offset-slate-700 focus-visible:ring-2 focus-visible:ring-slate-400"
                            >
                                {buttonText}
                                <ChevronRightIcon className="h-5 w-5 transition-transform duration-300 ui-open:rotate-90 ui-not-open:rotate-0" />
                            </Disclosure.Button>

                            <Transition
                                enter="transition duration-500 ease-out"
                                enterFrom="transform opacity-0 scale-95 -translate-y-2"
                                enterTo="transform opacity-100 scale-100 translate-y-0"
                                leave="transition duration-100 ease-out"
                                leaveFrom="transform opacity-100 scale-100 translate-y-0"
                                leaveTo="transform opacity-0 scale-95 -translate-y-2"
                            >
                                <Disclosure.Panel
                                    as="ul"
                                    className="mt-3 list-disc rounded-md bg-slate-400 py-2 px-3 pl-6 text-slate-800 shadow-sm"
                                >
                                    {panelContent.map((item) => {
                                        return <li key={item}>{item}</li>;
                                    })}
                                </Disclosure.Panel>
                            </Transition>
                        </Disclosure>
                    </div>
                </motion.div>
            </MotionConfig>
        </div>
    );
};

export default WorkExperience;
