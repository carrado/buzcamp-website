import Head from "next/dist/shared/lib/head";
import BzLink from "../../components/BzLink";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Mobile() {
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="Socio-academic Website Buzcamp buzcamp social media academic universities schools"
                />
                <meta name="og:title" content="Buzcamp" />
                <meta
                    property="og:description"
                    content="A Socio-academic platform connecting students across various institutions"
                />
                <meta property="og:image" content="https://buzcamp.com/" />
                <title>BuzCamp</title>
                <link rel="icon" href="/bzcmp.png" />
            </Head>

            <div className="bz-w-full bz-h-full bz-flex bz-flex-col gradient-bz fade-in-image">
                <div className="bz-flex bz-w-full bz-justify-center">
                    <Header />
                </div>

                <div className="bz-flex bz-flex-col bz-p-5 bz-my-1 bz-text-base bz-text-blueCrayola bz-font-semibold">
                    <span className="bz-my-1">Connect with fellow students</span>
                    <span className="bz-my-1">Share and gain knowlege</span>
                    <span className="bz-my-1">Chat and have fun</span>
                </div>

                <div className="bz-flex bz-w-auto bz-text-blueCrayola bz-mt-2 bz-p-3">
                    <span className="bz-text-5xl bz-mr-3">Join</span>
                    <span className="bz-text-5xl bz-font-bold bz-mr-1">Buzcamp</span>
                </div>
                <div className="bz-flex bz-text-blueCrayola bz-justify-end bz-pr-1">
                    <span className="bz-text-4xl bz-mr-2">Today</span>
                    <span className="bz-text-4xl bz-font-bold bz-mr-1 bz-mt-1">!</span>
                </div>

                <div className="bz-flex bz-flex-col bz-w-full bz-my-12">
                    <div className="bz-flex bz-w-full bz-my-4 bz-flex-grow">
                        <BzLink
                            bgColor="bz-bg-primary-black"
                            text="Sign in"
                            class="bz-text-white bz-flex bz-justify-center bz-w-full bz-mx-10 bz-rounded-3xl bz-font-bold"
                            linkedTo={"/login"}
                        />
                    </div>

                    <div className="bz-w-full bz-flex bz-my-3">
                        <div className="bz-flex bz-flex-grow bz-border bz-ml-12" style={{height : '1px'}} />
                        <span className="bz-flex bz-mx-1 bz-text-xs bz-text-grey" style={{ marginTop: '-2%' }}>OR</span>
                        <div className="bz-flex bz-flex-grow bz-border bz-mr-12" style={{ height: '1px' }} />
                    </div>

                    <div className="bz-flex bz-w-full bz-my-2 bz-flex-grow">
                        <BzLink
                            bgColor="bz-bg-primary-black"
                            text="Sign up"
                            class="bz-text-white bz-flex bz-justify-center bz-w-full bz-mx-10 bz-rounded-3xl bz-font-bold"
                            linkedTo={"/signup"}
                        />
                    </div>
                </div>

                <Footer />

            </div>
        </>
    )
}