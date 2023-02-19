import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

// components
import NavBar from "~/components/NavBar";
import ResponsiveHelper from "~/helper/ResponsiveHelper";
import AnimatedHeading from "~/components/AnimatedHeading";
import BreadditProjectCard from "~/components/BreadditProjectCard";
import PathFindingVisualizerProjectCard from "~/components/PathFindingVisualizerProjectCard";
import MinecraftVillageGeneratorProjectCard from "~/components/MinecraftVillageGeneratorProjectCard";
import Contact from "~/components/Contact";

// assets
import StudyRoomImg from "~/assets/images/studyRoom.png";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Portfolio</title>
                <meta name="description" content="Athul George's Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main
                className="flex h-full min-h-screen flex-col overflow-hidden bg-gradient-to-tl from-slate-300 to-slate-500 
            font-sans text-slate-800 antialiased dark:from-slate-600 dark:to-slate-800 dark:text-slate-300"
            >
                <ResponsiveHelper />
                <NavBar />

                <div className="mx-auto flex w-full max-w-5xl flex-col items-center sm:items-center lg:mt-16 lg:flex-row lg:justify-between">
                    <AnimatedHeading />
                    <Image
                        src={StudyRoomImg}
                        alt="study room"
                        width={500}
                        height={500}
                        className="rounded-md"
                    />
                </div>

                <div className="mx-auto my-40 flex w-full max-w-5xl flex-col gap-20 px-2">
                    <div className="mx-auto flex w-fit flex-col gap-20">
                        <h2 className="text-6xl font-bold tracking-wide">
                            Projects
                        </h2>
                        <div className="flex flex-col gap-32">
                            <BreadditProjectCard />
                            <PathFindingVisualizerProjectCard />
                            <MinecraftVillageGeneratorProjectCard />
                        </div>
                    </div>
                </div>

                <div className="mx-auto mb-32 flex w-full max-w-5xl flex-col gap-10 px-2">
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
