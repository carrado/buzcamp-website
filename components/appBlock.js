import Image from "next/image";
import Head from "next/head";

export default function AppBlock({ title, children }) {

    return (
        <>
            <Head>
                <meta name="description" content="Socio-academic Website Buzcamp buzcamp social media academic universities schools" />
                <meta name="og:title" content="Buzcamp" />
                <meta property="og:description" content="A Socio-academic platform connecting students across various institutions" />
                <meta property="og:image" content="https://buzcamp.com/" />
                <title>BuzCamp | {title}</title>
                <link rel="icon" href="/bzcmp.png" />
            </Head>

                <div className='bz-flex bz-w-full bz-h-full bz-bg-white'>
                    <div className='bz-flex bz-w-full'>
                        <div className='bz-flex bz-w-42 bz-h-full bz-fixed bz-z-50'>
                            <div className='bz-w-full bz-bg-lightest-red bz-mix-blend-normal bz-shadow-logo bz-rounded-xxl'>
                                <Image
                                    src="/images/buzcamp.png"
                                    height={250}
                                    width={250}
                                    alt="buzcamp-logo"
                                    className="bz-absolute"
                                    style={{ left: '26.5%' }}
                                />
                                <Image
                                    src="/images/bz-student_1.png"
                                    height={247}
                                    width={247}
                                    alt="student_img"
                                    className="bz-absolute"
                                    style={{ right: '8%', top: '31%' }}
                                />
                                <Image
                                    src="/images/bz-student_2.png"
                                    height={247}
                                    width={247}
                                    alt="student_img"
                                    className="bz-absolute"
                                    style={{ left: '8%', top: '31%' }}
                                />
                                <Image
                                    src="/images/bz-student_3.png"
                                    height={247}
                                    width={330}
                                    alt="student_img"
                                    className="bz-absolute"
                                    style={{ left: '24.5%', top: '45%' }}
                                />
                            </div>
                        </div>

                        <div className='bz-flex bz-w-full bz-h-full'>
                            <div
                                className='bz-w-64 bz-flex bz-mix-blend-normal'
                                style={{ marginLeft: '42%' }}
                            >
                                <div
                                    className='bz-w-11/12 bz-flex bz-flex-col bz-p-9'
                                    style={{ marginLeft: '5%' }}
                                >
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}