import { type NextPage } from "next";
import Head from "next/head";

// components
import NavBar from "~/features/NavBar";
import AnimatedTitleScreen from "~/features/AnimatedTitleScreen";
import AllProjectCards from "~/features/AllProjectCards";
import ContactMeForm from "~/features/ContactMeForm";

// helper functions
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

                <NavBar />

                <section
                    id="title"
                    className="mx-auto flex w-full max-w-5xl flex-col items-center sm:items-center lg:mt-40 lg:mb-16 lg:flex-row lg:justify-between"
                >
                    <AnimatedTitleScreen />
                </section>

                <section
                    id="projects"
                    className="mx-auto my-20 flex w-full max-w-5xl flex-col gap-20 pt-20"
                >
                    <h2 className="px-2 text-6xl font-bold tracking-wide lg:px-0">
                        Projects
                    </h2>

                    <AllProjectCards />
                </section>

                <section
                    id="contact"
                    className="mx-auto mb-32 flex w-full max-w-5xl flex-col items-center gap-10 pt-20"
                >
                    <h2 className="w-full max-w-lg px-2 text-6xl font-bold tracking-wide sm:px-0 lg:max-w-none">
                        Contact Me
                    </h2>

                    <ContactMeForm />
                </section>
            </main>
        </>
    );
};

export default Home;
