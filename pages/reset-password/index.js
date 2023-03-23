import Link from "next/link";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import Head from "next/dist/shared/lib/head";
import Header from "../../components/Header";
import Card from "../../components/Card";
import BzForm, { Button, InputText } from "../../components/BzForm";
import Footer from "../../components/Footer";


const axios = require("axios");

export default function ResetPassword() {
  const { enqueueSnackbar } = useSnackbar();

  const [disableBtn, setDisabled] = useState(false);
  const [password, setPassword] = useState("");
  const [password2, setConfirmPassword] = useState("");

  const [token, setToken] = useState("");


  const changePassword = (value) => {
    setPassword(value);
  };


  const confirmPassword = (value) => {
    setConfirmPassword(value);
  };


  /*useEffect(() => {
    const url = window.location.href.split("?reset_token=");
    const tokenNo = url[1].split("&_setMail=");

    var base64Url = tokenNo[0].split(".")[1];
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

    setToken(JSON.parse(jsonPayload));
  }, []); */

  const submitData = (values) => {
    if (values.password !== values.confirmpassword) {
      enqueueSnackbar("Passwords do not match", { variant: "error" });
    } else {
      setDisabled(true);
      const payload = {
        __rPeLikey: CryptoJS.RabbitLegacy.encrypt(
          `${values.password}`,
          "my-secret-key@123"
        ).toString(),
        __csIPAceltkN: CryptoJS.RabbitLegacy.encrypt(
          `${token}`,
          "my-secret-key@123"
        ).toString(),
      };

      axios
        .post(
          `${process.env.NEXT_PUBLIC_BUZCAMP_APP_ALLY}/authenticate/reset`,
          payload,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          enqueueSnackbar(response.data.message, { variant: "success" });
          setTimeout(() => {
            window.location.href = `${process.env.NEXT_PUBLIC_BUZCAMP_APP_REDIRECT}`;
          }, 3000);
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
    }
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
        <title>Reset Password</title>
        <link rel="icon" href="/bzcmp.png" />
      </Head>

      <div className="bz-flex bz-flex-col bz-flex-grow bz-w-full gradient-bz bz-h-screen">
        <Header />
        <div className="bz-flex bz-w-full bz-justify-center">
          <Card className="bz-flex bz-flex-col bz-w-2/5 bz-p-3 bz-mt-3">
            <Card className="bz-w-full bz-flex bz-flex-col bz-justify-center bz-items-center bz-p-2">
              <h1 className="bz-text-3xl bz-font-black bz-text-grayScale">
                Choose a Password
              </h1>
              <p className="bz-text-base bz-text-grayScale bz-my-3">
                You can now proceed to update your password
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
                  id="password"
                  inputType="password"
                  inputValue={password}
                  vModel={changePassword}
                  placeholder="New Password"
                  variant
                  icon="lock"
                />

                <InputText
                  className="bz-w-full bz-p-3 bz-my-6 bz-rounded-md"
                  inputValue={password2}
                  vModel={confirmPassword}
                  placeholder="Confirm Password"
                  variant
                  icon="lock"
                  inputType="password"
                  id='password'
                />

                <Button
                  className="bz-w-full bz-p-3 bz-text-white bz-my-6 bz-rounded-md bz-bg-blueCrayola"
                  inputValue="Submit"
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
