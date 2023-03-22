import Link from "next/link";
import { useState } from "react";
import { useSnackbar } from "notistack";
import Head from "next/dist/shared/lib/head";
import Header from "../../components/Header";
import Card from "../../components/Card";
import BzForm, { Button, CheckBox, InputText } from "../../components/BzForm";

var CryptoJS = require("crypto-js");

const axios = require("axios");

export default function Login() {
  const { enqueueSnackbar } = useSnackbar();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [storeLogin, setStoreLogin] = useState(false);


  const changeEmail = (value) => {
    setEmail(value);
  };

  const changePassword = (value) => {
    setPassword(value);
  };

  const validateCheck = (value) => {
    setStoreLogin(value)
  }


  const submitData = (values) => {
    setDisabled(true);

    const payload = {
      __ibTser: CryptoJS.RabbitLegacy.encrypt(
        `${values.username}`,
        "my-secret-key@23"
      ).toString(),
      __rPekey: CryptoJS.RabbitLegacy.encrypt(
        `${values.password}`,
        "my-secret-key@123"
      ).toString(),
    };

    axios
      .post(
        `${process.env.NEXT_PUBLIC_BUZCAMP_APP_ALLY}/authenticate/login`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        window.location.href = `http://localhost:3000/?_&rd=${response.data.data.__tkI9shaB}`;
        setDisabled(false);
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
        <title>Login</title>
        <link rel="icon" href="/bzcmp.png" />
      </Head>

      <div className="bz-flex bz-flex-col bz-flex-grow bz-w-full gradient-bz bz-h-screen">
        <Header />
        <div className="bz-flex bz-w-full bz-justify-center">
          <Card className="bz-flex bz-flex-col bz-w-2/5 bz-p-3 bz-mt-1">
            <Card className="bz-w-full bz-flex bz-flex-col bz-justify-center bz-items-center bz-p-2">
              <h1 className="bz-text-3xl bz-font-black bz-text-grayScale">
                Sign In
              </h1>
              <p className="bz-text-base bz-text-grayScale bz-my-3">
                Welcome back, you’ve been missed!
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

                <InputText
                  className="bz-w-full bz-p-3 bz-my-6 bz-rounded-md"
                  inputValue={password}
                  vModel={changePassword}
                  placeholder="Password"
                  variant
                  icon="lock"
                  inputType="password"
                  id='password'
                />

                <div className="bz-flex bz-my-3">
                  <div className="bz-flex bz-flex-grow">
                    <CheckBox className='bz-py-1 bz-px-3' label='Remember Me' checked={storeLogin} vModel={validateCheck} />
                  </div>
                  <div className="bz-flex">
                    <span className="bz-text-base bz-text-grayScale">
                      <Link href='forgotPassword'>Forgot Password?</Link>
                    </span>
                  </div>
                  </div>

                <Button
                  className="bz-w-full bz-p-3 bz-text-white bz-my-6 bz-rounded-md bz-bg-blueCrayola"
                  inputValue="Sign In"
                />

              </BzForm>

              <Card className='bz-flex bz-w-full bz-p-2 bz-justify-center'>
                <span className="bz-text-base bz-text-grayScale">
                  You haven&apos;t any account? 
                </span>
                <span className="bz-text-base bz-text-blueCrayola bz-mx-3">
                  <Link href='signup'> Sign Up</Link>
                </span>
              </Card>
            </Card>
          </Card>
        </div>
      </div>
    </>
  );
}
