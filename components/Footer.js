export default function Footer() {
    return (
        <>
            <div className="bz-flex bz-w-full bz-flex-col bz-content-center bz-flex-wrap bz-p-2 bz--mt-10">
                <div className="bz-flex bz-flex-col bz-w-1/2">
                    <div className="bz-flex bz-w-auto bz-text-blueCrayola bz-mt-20 bz-px-10">
                        <span className="bz-flex bz-flex-grow bz-justify-center">
                            <a href="#top" className="bz-text-current bz-no-underline">
                                About us
                            </a>
                        </span>
                        <span className="bz-flex bz-flex-grow bz-justify-center">
                            <a href="#top" className="bz-text-current bz-no-underline">
                                Help center
                            </a>
                        </span>
                        <span className="bz-flex bz-flex-grow bz-justify-center">
                            <a href="#top" className="bz-text-current bz-no-underline">
                                Terms & Condition
                            </a>
                        </span>
                        <span className="bz-flex bz-flex-grow bz-justify-center">
                            <a href="#top" className="bz-text-current bz-no-underline">
                                Privacy Policy
                            </a>
                        </span>
                        <span className="bz-flex bz-flex-grow bz-justify-center">
                            <a href="#top" className="bz-text-current bz-no-underline">
                                Cookie Policy
                            </a>
                        </span>
                    </div>

                    <div className="bz-flex bz-w-full bz-justify-center bz-text-blueCrayola bz-my-5">
                        <span className="bz-flex bz-w-auto bz-justify-center">
                            © {new Date().getFullYear()} Carrado.
                        </span>
                    </div>

                </div>
            </div>
        </>
    )
};