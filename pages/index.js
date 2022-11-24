import Head from "next/head";
import Link from "next/link";
import { SnackbarProvider } from 'notistack';
import utilStyles from "../styles/utils.module.css";
import App from "./app";

export default function Home() {

    let vertical = 'top';
    let horizontal = 'right';
    
    return (
        <>
            <Head>
                <meta name="description" content="Socio-academic Website Buzcamp buzcamp social media academic universities schools" />
                <meta name="og:title" content="Buzcamp" />
                <meta property="og:description" content="A Socio-academic platform connecting students across various institutions" />
                <meta property="og:image" content="https://buzcamp.com/" />
                <title>BuzCamp</title>
                <link rel="icon" href="/bzcmp.png" />
            </Head>
            <SnackbarProvider maxSnack={3}
                anchorOrigin={{ vertical, horizontal }}
            >
               <App />
            </SnackbarProvider>

            <section className={utilStyles.headingMd}>
                <p>
                    <Link href="/posts/firstpost">Anyanwu Emeka, software Engineers</Link>
                </p>
                <p>
                </p>
            </section>
        </>
    );
}
