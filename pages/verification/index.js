import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import OtpInput from 'react18-input-otp';
import { Cookies } from 'react-cookie';
import AppBlock from "../../components/appBlock";

const axios = require("axios");

const cookies = new Cookies();

var CryptoJS = require("crypto-js");


export default function VerificationPage() {
    const { enqueueSnackbar } = useSnackbar();
    const [OTP, setOTP] = useState("");
    const [hasError, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [disableBtn, setDisabled] = useState(false);


    const changeOTP = (event) => {
        setOTP(event);

        if (event.length === 5) {
            submitOTP(event);
        } else {
            console.log(event);
            setError(false);
        }
    }

    const submitOTP = (value) => {
            const payload = {
                __tkLd5a: value,
            };

            axios
                .post(`${process.env.NEXT_PUBLIC_BUZCAMP_APP_ALLY}/authenticate/verifyaccount`, payload, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then((response) => {
                    window.location.href = `${process.env.NEXT_PUBLIC_BUZCAMP_APP_REDIRECT}/?rc_id=${response.data.data.__tkI9shaB}`;
                })
                .catch((err) => {
                    const errorMessage =
                        err.message === "Network Error"
                            ? err.message
                            : err.response.data.message;
                    enqueueSnackbar(errorMessage, { variant: "error" });
                    setError(true);
                });
    }


    const resend = () => {
        setDisabled(true);

        const payload = {
            __mailKQr: CryptoJS.RabbitLegacy.encrypt(
                `${email}`,
                "my-secret-key@23"
            ).toString(),
        };

        axios
            .post(`${process.env.NEXT_PUBLIC_BUZCAMP_APP_ALLY}/authenticate/resendToken`, payload, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                const variant = "success";
                enqueueSnackbar(response.data.message, { variant });
                setCookie("lynchpin", response.data.data.__tkI9shaB, {
                    path: "/",
                    maxAge: 3600, // Expires after 1hr
                    sameSite: true,
                });
                setDisabled(false);
            })
            .catch((err) => {
                const errorMessage =
                    err.message === "Network Error"
                        ? err.message
                        : "";
                if (errorMessage !== "") {
                    enqueueSnackbar(errorMessage, { variant: "error" });
                }
                setDisabled(false);
            });
    }


    useEffect(() => {
        var lynchpin = cookies.get('lynchpin');
        if (lynchpin) {
            var base64Url = lynchpin.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            setEmail(jsonPayload);
        }
    }, []);


    return (
        <>
            <AppBlock title="Password Reset">
                <div className='bz-flex bz-flex-col bz-flex-grow bz-w-full'>
                    <div
                        className='bz-flex w-full bz-flex-col flex-grow bz-justify-center bz-mt-7'
                        style={{ alignItems: 'center', height: '70vh' }}
                    >
                        <div className='bz-flex bz-flex-col bz-py-3 bz-text-lg bz-text-blueCrayola bz-mb-2 bz-font-bold'>
                            <span className='bz-my-1 bz-uppercase' style={{ fontSize: '25px' }}>
                                Account Verification
                            </span>
                        </div>

                        <div className='bz-flex bz-flex-col bz-w-3/4 bz-mb-4 bz-font-semibold'>
                            <p className='bz-w-full'>
                                Enter the confirmation code sent to your email address to activate
                                account.
                            </p>
                        </div>

                        <div className='bz-flex bz-w-full bz-justify-center bz-mt-4'>
                            <OtpInput value={OTP} onChange={changeOTP} numInputs={5} separator={<span>-</span>} />;
                            {/* <OtpInput
                                value={OTP}
                                inputStyle='inputStyle'
                                onChange={changeOTP}
                                numInputs={5}
                                separator={<span>-</span>}
                                isInputNum={true}
                                hasErrored={hasError}
                                errorStyle='errordOtp'
                            /> */}
                        </div>

                        <div className='bz-flex bz-w-3/4 bz-justify-center bz-mt-7'>
                            <span className='bz-text-base' style={{ letterSpacing: '0.03em' }}>
                                Make sure you input the OTP correctly. Check your spam folder if you
                                can’t find the verification email in your inbox. Otherwise, click on
                                “Resend Verification Code” below to get another confirmation code.
                            </span>
                        </div>

                        <div className='bz-flex bz-w-full bz-justify-center bz-mt-7'>
                            <div className='bz-w-auto bz-flex bz-justify-center'>
                                <button
                                    style={{ border: '2px solid #ffffff' }}
                                    className={`bz-bg-primary-black bz-text-white bz-rounded-3xl bz-font-bold bz-py-2 bz-px-16`}
                                    type='submit'
                                    onClick={resend}
                                    disabled={disableBtn}
                                >
                                    Resend Verification code
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </AppBlock>
        </>
    );

}
