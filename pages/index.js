import Head from 'next/head'
import Main from "../components/Main.js";
import About from "../components/About.js";
import Experience from "../components/Experience.js";
import Portfolio from "../components/Portfolio.js";
import Label from "../components/Label.js";
import Links from "../components/Links.js";

export default function Home() {
    return (
        <>
            <Head>
                <title>Taeseong Kim</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1 viewport-fit=cover"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-background">
                <div className="max-w-screen-lg px-6 mx-auto relative">
                    <Main />
                    <About />
                    <Experience />
                    <Portfolio />
                    <Label />
                    <Links />
                </div>
            </main>
        </>
    )
}


