import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

// compoents
import NavBar from "~/components/NavBar";
import ResponsiveHelper from "~/helper/ResponsiveHelper";
import AnimatedHeading from "~/components/AnimatedHeading";

// assets
import StudyRoomImg from "~/images/studyRoom.png";

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
            font-sans text-slate-800 antialiased dark:from-slate-700 dark:to-slate-800 dark:text-slate-300"
            >
                <ResponsiveHelper />
                <NavBar />

                {/* <div
                    className="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] 
                    bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
                /> */}

                <div className="mx-auto flex w-full max-w-5xl flex-col items-center sm:items-center lg:mt-14 lg:flex-row lg:justify-between">
                    <AnimatedHeading />
                    <Image
                        src={StudyRoomImg}
                        alt="study room"
                        width={500}
                        height={500}
                        className="rounded-md"
                    />
                </div>
            </main>
        </>
    );
};

export default Home;
