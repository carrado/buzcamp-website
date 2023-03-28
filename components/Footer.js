export default function Footer() {
    return (
        <>
            <div className="bz-flex bz-w-full bz-flex-col bz-content-center bz-flex-wrap bz-p-2 bz--mt-10">
                <div className="bz-flex bz-flex-col lg:bz-w-1/2 bz-w-full">
                    <div className="bz-flex bz-w-auto bz-text-blueCrayola lg:bz-mt-20 bz-mt-10 lg:bz-px-10 bz-px-4">
                        <span className="bz-flex bz-flex-grow bz-justify-center">
                            <a href="#top" className="bz-text-current bz-no-underline lg:bz-text-base lg:bz-flex md:bz-flex bz-hidden">
                                About us
                            </a>
                            <a href="#top" className="bz-text-current bz-no-underline bz-text-sm lg:bz-hidden md:bz-hidden">
                                About
                            </a>
                        </span>
                        <span className="bz-flex bz-flex-grow bz-justify-center">
                            <a href="#top" className="bz-text-current bz-no-underline lg:bz-text-base lg:bz-flex md:bz-flex bz-hidden">
                                Help center
                            </a>
                            <a href="#top" className="bz-text-current bz-no-underline bz-text-sm lg:bz-hidden md:bz-hidden">
                                Help center
                            </a>
                        </span>
                        <span className="bz-flex bz-flex-grow bz-justify-center">
                            <a href="#top" className="bz-text-current bz-no-underline lg:bz-text-base lg:bz-flex md:bz-flex bz-hidden">
                               Terms & Conditions
                            </a>
                            <a href="#top" className="bz-text-current bz-no-underline bz-text-sm lg:bz-hidden md:bz-hidden">
                                Terms
                            </a>
                        </span>
                        <span className="bz-flex bz-flex-grow bz-justify-center">
                            <a href="#top" className="bz-text-current bz-no-underline lg:bz-text-base lg:bz-flex md:bz-flex bz-hidden">
                                Privacy Policy
                            </a>
                            <a href="#top" className="bz-text-current bz-no-underline bz-text-sm lg:bz-hidden md:bz-hidden">
                                Privacy
                            </a>
                        </span>
                        <span className="bz-flex bz-flex-grow bz-justify-center">
                            <a href="#top" className="bz-text-current bz-no-underline lg:bz-text-base lg:bz-flex md:bz-flex bz-hidden">
                                Cookie Policy
                            </a>
                            <a href="#top" className="bz-text-current bz-no-underline bz-text-sm lg:bz-hidden md:bz-hidden">
                                Cookie
                            </a>
                        </span>
                    </div>

                    <div className="bz-flex bz-w-full bz-justify-center bz-text-blueCrayola bz-my-5">
                        <span className="bz-flex bz-w-auto bz-justify-center lg:bz-flex md:bz-flex bz-hidden">
                            © {new Date().getFullYear()} Carrado.
                        </span>
                        <span className="bz-flex bz-w-auto bz-justify-center bz-text-sm lg:bz-hidden md:bz-hidden">
                            © {new Date().getFullYear()} Carrado.
                        </span>
                    </div>

                </div>
            </div>
        </>
    )
};