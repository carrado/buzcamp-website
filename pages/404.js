import Head from 'next/dist/shared/lib/head';
import Image from 'next/image';
import Card from '../components/Card';
import Header from '../components/Header';
import { useRouter } from 'next/router';

export default function FourOhFour() {

    const router = useRouter();

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
                <title>404 Error</title>
                <link rel="icon" href="/bzcmp.png" />
            </Head>

            <div className="bz-flex bz-flex-col bz-flex-grow bz-w-full gradient-bz bz-h-screen">
                <Header />
                <div className="bz-flex bz-w-full bz-justify-center">
                    <Card className='bz-w-full bz-flex bz-flex-col bz-justify-center bz-my-16'>
                        <div className='bz-w-full bz-flex bz-justify-center bz-items-center'>
                            <Image src={`/icons/error-404.svg`} width={350} height={350} alt={'error-404'} />
                        </div>
                        <Card className='bz-mt-8 bz-p-4 bz-flex bz-flex-col bz-justify-center'>
                            <div className='bz-w-full bz-flex bz-justify-center bz-items-center'>
                                <h1 className='bz-text-3xl bz-font-black'>
                                    Whoops!
                                </h1>
                            </div>
                            <div className='bz-w-full bz-flex bz-justify-center bz-my-3 bz-items-center'>
                                <h1 className='bz-text-base bz-font-black'>
                                    Sorry, the page you are looking for doesn&apos;t exist
                                </h1>
                            </div>
                            <Card className='bz-flex bz-w-full bz-p-2 bz-justify-center'>
                                <span className="bz-flex bz-cursor-pointer bz-bg-primaryBlue bz-w-1/4 bz-justify-center bz-text-white bz-rounded-md bz-p-3"
                                    onClick={() => router.back()}
                                >
                                    <span className="bz-text-base bz-mx-3 bz--mt-1">
                                        Go Back
                                    </span>
                                </span>
                            </Card>
                        </Card>
                    </Card>
                </div>
            </div>

        </>
    );
}