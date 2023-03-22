import Link from "next/link";
import { useState } from "react";
import { useSnackbar } from "notistack";
import Head from "next/dist/shared/lib/head";
import Header from "../../components/Header";
import Card from "../../components/Card";
import BzForm, { Button, CheckBox, InputText } from "../../components/BzForm";
import Image from "next/image";

var CryptoJS = require("crypto-js");

const axios = require("axios");

export default function ForgotPassword() {
  const { enqueueSnackbar } = useSnackbar();
  const [email, setEmail] = useState("");


  const changeEmail = (value) => {
    setEmail(value);
  };

  const submitData = (values) => {
    setDisabled(true);
    const payload = {
      __mailKQr: CryptoJS.RabbitLegacy.encrypt(
        `${values.email}`,
        "my-secret-key@23"
      ).toString(),
    };

    axios
      .post(
        `${process.env.NEXT_PUBLIC_BUZCAMP_APP_ALLY}/authenticate/passwordToken`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        enqueueSnackbar(response.data.message, { variant: "success" });
      })
      .catch((err) => {
        // const variant = "error";
        const errorMessage =
          err.message === "Network Error"
            ? err.message
            : err.response.data.message;
        enqueueSnackbar(errorMessage, { variant: "error" });
        setDisabled(false);
      });
  };


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
        <title>Forgot Password</title>
        <link rel="icon" href="/bzcmp.png" />
      </Head>

      <div className="bz-flex bz-flex-col bz-flex-grow bz-w-full gradient-bz bz-h-screen">
        <Header />
        <div className="bz-flex bz-w-full bz-justify-center">
          <Card className="bz-flex bz-flex-col bz-w-2/5 bz-p-3 bz-mt-1">
            <Card className="bz-w-full bz-flex bz-flex-col bz-justify-center bz-items-center bz-p-2">
              <h1 className="bz-text-3xl bz-font-black bz-text-grayScale">
                Forgot password?
              </h1>
              <p className="bz-text-base bz-text-grayScale bz-my-3">
                Enter your details to receive a rest link
              </p>
            </Card>
            <Card
              className="bz-w-full bz-mt-3 bz-flex bz-flex-col bz-items-center bz-py-4 bz-px-10 bz-mb-5"
              variant
              style={{ borderRadius: "20px" }}
            >
              <BzForm onSubmit={submitData}>
                <InputText
                  className="bz-w-full bz-p-3 bz-my-6 bz-rounded-md"
                  id="email"
                  inputType="email"
                  inputValue={email}
                  vModel={changeEmail}
                  placeholder="Your Email"
                  variant
                  icon="email"
                />

                <Button
                  className="bz-w-full bz-p-3 bz-text-white bz-my-6 bz-rounded-md bz-bg-blueCrayola"
                  inputValue="Send"
                />

              </BzForm>

              <Card className='bz-flex bz-w-full bz-p-2 bz-justify-center'>
                <Link href='login' className="bz-flex">
                <span className="bz-text-base bz-text-grayScale">
                  <Image src={`/icons/chevron-back.svg`} width={10} height={10} alt={'chevron-back'} />
                </span>
                <span className="bz-text-base bz-text-blueCrayola bz-mx-3 bz--mt-1">
                  Back to Sign In
                  </span>
                  </Link>
              </Card>
            </Card>
          </Card>
        </div>
      </div>
    </>
  );
}
