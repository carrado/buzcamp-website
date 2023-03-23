import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import OtpInput from "react18-input-otp";
import { Cookies } from "react-cookie";
import AppBlock from "../../components/appBlock";
import Head from "next/head";
import Header from "../../components/Header";
import Card from "../../components/Card";
import BzForm, { Button } from "../../components/BzForm";
import Footer from "../../components/Footer";

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
      setError(false);
    }
  };

  const submitOTP = (value) => {
    const payload = {
      __tkLd5a: value,
    };

    axios
      .post(
        `${process.env.NEXT_PUBLIC_BUZCAMP_APP_ALLY}/authenticate/verifyaccount`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
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
  };

  const resend = () => {
    setDisabled(true);
    const payload = {
      __mailKQr: CryptoJS.RabbitLegacy.encrypt(
        `${email}`,
        "my-secret-key@23"
      ).toString(),
    };

    axios
      .post(
        `${process.env.NEXT_PUBLIC_BUZCAMP_APP_ALLY}/authenticate/resendToken`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
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
        const errorMessage = err.message === "Network Error" ? err.message : "";
        if (errorMessage !== "") {
          enqueueSnackbar(errorMessage, { variant: "error" });
        }
        setDisabled(false);
      });
  };

  useEffect(() => {
    var lynchpin = cookies.get("lynchpin");
    if (lynchpin) {
      var base64Url = lynchpin.split(".")[1];
      var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      var jsonPayload = decodeURIComponent(
        window
          .atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );

      setEmail(jsonPayload);
    }
  }, []);


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
        <title>Account Verification</title>
        <link rel="icon" href="/bzcmp.png" />
      </Head>

      <div className="bz-flex bz-flex-col bz-flex-grow bz-w-full gradient-bz bz-h-screen">
        <Header />
        <div className="bz-flex bz-w-full bz-justify-center">
          <Card className="bz-flex bz-flex-col bz-w-2/5 bz-p-3 bz-mt-3">
            <Card className="bz-w-full bz-flex bz-flex-col bz-justify-center bz-items-center bz-p-2">
              <h1 className="bz-text-3xl bz-font-black bz-text-grayScale">
                Account Verification
              </h1>
              <p className="bz-text-base bz-text-grayScale bz-my-3">
                Enter the confirmation code sent to your email address to
                activate account.
              </p>
            </Card>
            <Card
              className="bz-w-full bz-mt-3 bz-flex bz-flex-col bz-items-center bz-py-4 bz-px-10 bz-mb-5"
              variant
              style={{ borderRadius: "20px" }}
            >
              <BzForm onSubmit={resend}>

                <Card className='bz-px-3'>
                  <OtpInput
                    value={OTP}
                    onChange={changeOTP}
                    className="inputStyle"
                    numInputs={5}
                    separator={<span>-</span>}
                  />
                </Card>

                <div className="bz-flex bz-w-full bz-px-5 bz-justify-center bz-mt-7">
                  <span
                    className="bz-text-base"
                    style={{ letterSpacing: "0.03em" }}
                  >
                    Make sure you input the OTP correctly. Check your spam folder if
                    you can’t find the verification email in your inbox. Otherwise,
                    click on “Resend Verification Code” below to get another
                    confirmation code.
                  </span>
                </div>

                <Button
                  className="bz-w-full bz-p-3 bz-text-white bz-my-6 bz-rounded-md bz-bg-blueCrayola"
                  inputValue="Resend Verification code"
                  disabled={disableBtn}
                />

              </BzForm>

            </Card>
          </Card>
        </div>
        <Footer />
      </div>
    </>
  );
}
