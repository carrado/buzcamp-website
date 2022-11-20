import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
    return (
        <>
            <Head>
                <title>{'BuzCamp'}</title>
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
