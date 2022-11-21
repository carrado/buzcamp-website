import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
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
