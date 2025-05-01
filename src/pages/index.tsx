import { type NextPage } from "next";
import Head from "next/head";

// components
import Navbar from "~/features/Navbar";
import AnimatedTitleScreen from "~/features/AnimatedTitleScreen";
import AllProjectCards from "~/features/AllProjectCards";
import Contact from "~/features/Contact";

import ResponsiveHelper from "~/helper/ResponsiveHelper";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>{"Athul George's Portfolio"}</title>

                <meta
                    name="description"
                    content="Portfolio of Athul George with some of his favorite projects"
                />

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0"
                    // NOTE: user-scalable=no, maximum-scale=1.0, prevents auto zoom on inputs for ios devices
                />

                <link
                    rel="icon"
                    href="/logo.png"
                />
            </Head>

            <main className="flex h-full min-h-screen flex-col overflow-hidden bg-slate-100 font-sans text-slate-700 antialiased dark:bg-slate-700 dark:text-slate-300">
                {process.env.NODE_ENV === "development" && <ResponsiveHelper />}

                <Navbar />

                <section
                    id="title"
                    className="mx-auto flex w-full max-w-5xl flex-col items-center
                    sm:items-center lg:mt-40 lg:mb-16 lg:flex-row lg:justify-between"
                >
                    <AnimatedTitleScreen />
                </section>

                <section
                    id="projects"
                    className="mx-auto my-20 flex w-full max-w-5xl flex-col gap-20 pt-20 sm:px-4 md:px-8"
                >
                    <div className="mx-auto flex w-fit flex-col gap-20">
                        <div className="overflow-hidden pb-4">
                            <h2 className="text-6xl font-bold tracking-wide">
                                Projects
                            </h2>
                        </div>
                        <div className="flex flex-col gap-32">
                            <AllProjectCards />
                        </div>
                    </div>
                </section>

                <section
                    id="contact"
                    className="mx-auto mb-32 flex w-full max-w-5xl flex-col gap-10 px-2 pt-20"
                >
                    <div className="flex flex-col items-center gap-10">
                        <h2 className="w-full max-w-lg text-6xl font-bold tracking-wide lg:max-w-none">
                            Contact Me
                        </h2>

                        <Contact />
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;
