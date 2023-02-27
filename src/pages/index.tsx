import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

// components
import NavBar from "~/features/NavBar";
import AnimatedHeading from "~/features/AnimatedHeading";
import AllProjectCards from "~/features/AllProjectCards";
// import WorkExperience from "~/features/WorkExperience";
import Contact from "~/features/Contact";

// helper
// import ResponsiveHelper from "~/helper/ResponsiveHelper";

// assets
import StudyRoomImg from "~/assets/images/studyRoom.png";

// animations
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// hooks
import { useEffect } from "react";

const animationInView = {
    y: 0,
    transition: {
        duration: 1,
        type: "spring",
        bounce: 0.2,
    },
};

const animationOutOfView = {
    y: "-100%",
    transition: {
        duration: 1,
    },
};

const Home: NextPage = () => {
    const { ref: projectRef, inView: projectInView } = useInView();
    const { ref: contactRef, inView: contactInView } = useInView();
    // const { ref: WorkExperienceRef, inView: WorkExperienceInView } =
    //     useInView();
    const projectAnimation = useAnimation();
    const contactAnimation = useAnimation();
    // const WorkExperienceAnimation = useAnimation();

    useEffect(() => {
        const animateHeading = async () => {
            if (projectInView) {
                await projectAnimation.start(animationInView);
            } else {
                await projectAnimation.start(animationOutOfView);
            }
        };
        void animateHeading();
    }, [projectAnimation, projectInView]);

    useEffect(() => {
        const animateHeading = async () => {
            if (contactInView) {
                await contactAnimation.start(animationInView);
            } else {
                await contactAnimation.start(animationOutOfView);
            }
        };
        void animateHeading();
    }, [contactAnimation, contactInView]);

    // useEffect(() => {
    //     const animateHeading = async () => {
    //         if (WorkExperienceInView) {
    //             await WorkExperienceAnimation.start(animationInView);
    //         } else {
    //             await WorkExperienceAnimation.start(animationOutOfView);
    //         }
    //     };
    //     void animateHeading();
    // }, [WorkExperienceAnimation, WorkExperienceInView]);

    return (
        <>
            <Head>
                <title>{"Athul George's Portfolio"}</title>
                <meta
                    name="description"
                    content="Athul George's Portfolio"
                />
                <link
                    rel="icon"
                    href="/logo.png"
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
                    className="mx-auto my-20 flex w-full max-w-5xl flex-col gap-20 pt-20 sm:px-4 md:px-8"
                    ref={projectRef}
                >
                    <div className="mx-auto flex w-fit flex-col gap-20">
                        <div className="overflow-hidden pb-4">
                            <motion.h2
                                animate={projectAnimation}
                                className="text-6xl font-bold tracking-wide"
                            >
                                Projects
                            </motion.h2>
                        </div>
                        <div className="flex flex-col gap-32">
                            <AllProjectCards />
                        </div>
                    </div>
                </div>

                {/* <div
                    id="work-experience"
                    className="mx-auto mb-16 flex w-full max-w-5xl flex-col gap-10 px-2 pt-20"
                    ref={WorkExperienceRef}
                >
                    <div className="flex flex-col gap-10">
                        <div className="overflow-hidden pb-4">
                            <motion.h2
                                animate={WorkExperienceAnimation}
                                className="w-full max-w-lg text-6xl font-bold tracking-wide lg:max-w-none"
                            >
                                Work Experience
                            </motion.h2>
                        </div>
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
                </div> */}

                <div
                    id="contact"
                    className="mx-auto mb-32 flex w-full max-w-5xl flex-col gap-10 px-2 pt-20"
                    ref={contactRef}
                >
                    <div className="flex flex-col items-center gap-10">
                        <motion.h2
                            animate={contactAnimation}
                            className="w-full max-w-lg text-6xl font-bold tracking-wide lg:max-w-none"
                        >
                            Contact Me
                        </motion.h2>

                        <Contact />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
