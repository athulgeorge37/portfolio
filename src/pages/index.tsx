import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

// components
import NavBar from "~/features/NavBar";
import AnimatedHeading from "~/features/AnimatedHeading";
import BreadditProjectCard from "~/features/ProjectCards/BreadditProjectCard";
import PathFindingVisualizerProjectCard from "~/features/ProjectCards/PathFindingVisualizerProjectCard";
import MinecraftVillageGeneratorProjectCard from "~/features/ProjectCards/MinecraftVillageGeneratorProjectCard";
import Contact from "~/features/Contact";

// helper
// import ResponsiveHelper from "~/helper/ResponsiveHelper";

// assets
import StudyRoomImg from "~/assets/images/studyRoom.png";
import WorkExperience from "~/features/WorkExperience";

// animations
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// hooks
import { useEffect } from "react";

const Home: NextPage = () => {
    const { ref, inView } = useInView();
    const animation = useAnimation();

    useEffect(() => {
        const animateImage = async () => {
            if (inView) {
                await animation.start({
                    x: 0,
                    transition: {
                        duration: 1,
                        type: "spring",
                        bounce: 0.2,
                    },
                });
            } else {
                await animation.start({
                    x: "-100%",
                    transition: {
                        duration: 1,
                    },
                });
            }
        };
        void animateImage();
    }, [animation, inView]);

    return (
        <>
            <Head>
                <title>Portfolio</title>
                <meta
                    name="description"
                    content="Athul George's Portfolio"
                />
                <link
                    rel="icon"
                    href="/favicon.ico"
                />
            </Head>
            <main
                className="flex h-full min-h-screen flex-col overflow-hidden bg-slate-400
            font-sans text-slate-800 antialiased dark:bg-slate-700 dark:text-slate-300"
            >
                {/* <ResponsiveHelper /> */}
                <NavBar />

                <div
                    id="title"
                    className="mx-auto flex w-full max-w-5xl flex-col items-center 
                    sm:items-center lg:mt-40 lg:mb-16 lg:flex-row lg:justify-between"
                >
                    <AnimatedHeading />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 100 }}
                        transition={{
                            duration: 1,
                            delay: 1,
                        }}
                    >
                        <Image
                            src={StudyRoomImg}
                            alt="study room"
                            width={500}
                            height={500}
                            className="rounded-md"
                        />
                    </motion.div>
                </div>

                <div
                    id="projects"
                    className="mx-auto my-20 flex w-full max-w-5xl flex-col gap-20 px-2 pt-20"
                    ref={ref}
                >
                    <div className="mx-auto flex w-fit flex-col gap-20">
                        <motion.h2
                            animate={animation}
                            className="text-6xl font-bold tracking-wide"
                        >
                            Projects
                        </motion.h2>
                        <div className="flex flex-col gap-32">
                            <BreadditProjectCard />
                            <PathFindingVisualizerProjectCard />
                            <MinecraftVillageGeneratorProjectCard />
                        </div>
                    </div>
                </div>

                <div
                    id="work-experience"
                    className="mx-auto mb-16 flex w-full max-w-5xl flex-col gap-10 px-2 pt-20"
                >
                    <div className="flex flex-col gap-10">
                        <h2 className="w-full max-w-lg text-6xl font-bold tracking-wide lg:max-w-none">
                            Work Experience
                        </h2>
                        <div className="flex flex-col gap-5">
                            <WorkExperience
                                buttonText="Programming Teaching Assistant @ RMIT"
                                panelContent={[
                                    "Answering student questions via email or in person.",
                                    "Helping to develop and update course materials, such as lecture notes and assignments.",
                                    "Collaborating with other instructors and TAs to ensure consistent course delivery and assessment.",
                                    "Ensuring students have the neccessary resources they need to succeed.",
                                ]}
                            />
                            <WorkExperience
                                buttonText="Finance & Insurance Data Processing Officer @ NAB"
                                panelContent={[
                                    "Collecting and verifying financial and insurance data from various sources.",
                                    "Entering and processing data into computer systems and databases.",
                                    "Ensuring compliance with relevant laws and regulations.",
                                    "Maintaining accurate records and documentation of financial transactions.",
                                    "Collaborating with other departments within NAB to ensure smooth and efficient operations.",
                                ]}
                            />
                        </div>
                    </div>
                </div>

                <div
                    id="contact"
                    className="mx-auto mb-32 flex w-full max-w-5xl flex-col gap-10 px-2 pt-20"
                >
                    <div className="flex flex-col items-center gap-10">
                        <h2 className="w-full max-w-lg text-6xl font-bold tracking-wide lg:max-w-none">
                            Contact Me
                        </h2>
                        <Contact />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
