import { type NextPage } from "next";
import Head from "next/head";
import { PlayGround } from "../components/Button";
import ResponsiveHelper from "../helper/ResponsiveHelper";
import NavBar from "../components/NavBar";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Portfolio</title>
                <meta name="description" content="Athul George's Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex h-full min-h-screen flex-col bg-slate-100 font-sans text-slate-900">
                <NavBar />
                <h1>Hello World</h1>
                <PlayGround />
                <ResponsiveHelper />
            </main>
        </>
    );
};

export default Home;
