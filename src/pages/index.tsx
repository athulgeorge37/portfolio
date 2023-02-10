import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Portfolio</title>
                <meta name="description" content="Athul George's Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex min-h-screen flex-col bg-gradient-to-tr from-slate-600 to-slate-800">
                <h1>Hello World</h1>
            </main>
        </>
    );
};

export default Home;
