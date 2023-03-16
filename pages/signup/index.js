import { useRouter } from "next/router";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useSnackbar } from "notistack";
import Head from "next/dist/shared/lib/head";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { InputText } from "../../components/BzInput";

var CryptoJS = require("crypto-js");

const axios = require("axios");

var ng_universities = require("ng_universities");

export default function SignUpForm() {
  const [cookie, setCookie] = useCookies(["lynchpin"]);

  const { enqueueSnackbar } = useSnackbar();

  const router = useRouter();

  const testSchema = Yup.object().shape({
    surName: Yup.string().required("Last name Required"),
    firstName: Yup.string().required("First name Required"),
    nationality: Yup.string().required("Select Nationality"),
    // states: Yup.string().required('Select state'),
    // gender: Yup.string().required('Select gender'),
    institution: Yup.string().required("Select Institution"),
    password: Yup.string().required("Password Required"),
    department: Yup.string().required("Department Required"),
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
    username: Yup.string().required("Username Required"),
  });

  const initialValues = {
    surName: "",
    firstName: "",
    nationality: "",
    institution: "",
    department: "",
    email: "",
    username: "",
    password: "",
  };

  const nations = [{ name: "Nigeria", label: "Nigeria" }];

  const [schoolOptions, getSchools] = useState([]);

  /** Populate Schools in the Institution  Box */
  useEffect(() => {
    const federalUniversities = JSON.parse(
      ng_universities.getUniversities("federal")
    );
    const arr = [];
    federalUniversities.map((university) => {
      arr.push({ name: university.name, label: university.name });
    });
    getSchools(arr);
  }, []);

  const [showPassword, setValues] = useState(false);
  const [disableBtn, setDisabled] = useState(false);

  const handleClickShowPassword = () => {
    setValues(!showPassword);
  };

  const submitData = (values) => {
    const userId = Math.floor(1000000 + Math.random() * 9000000);
    setDisabled(true);

    const payload = {
      __bzuser: CryptoJS.RabbitLegacy.encrypt(
        `${values.username}`,
        "my-secret-key@23"
      ).toString(),
      __user: CryptoJS.RabbitLegacy.encrypt(
        `${values.surName} ${values.firstName}`,
        "my-secret-key@123"
      ).toString(),
      __cmDept: CryptoJS.RabbitLegacy.encrypt(
        `${values.department}`,
        "my-secreets-key@123"
      ).toString(),
      __isSch: CryptoJS.RabbitLegacy.encrypt(
        `${values.institution}`,
        "my-secret-key@123"
      ).toString(),
      __rdNati: CryptoJS.RabbitLegacy.encrypt(
        `${values.nationality}`,
        "ecret-key@123"
      ).toString(),
      __tmrMal: CryptoJS.RabbitLegacy.encrypt(
        `${values.email}`,
        "my-secret-key@123"
      ).toString(),
      tCheck: CryptoJS.RabbitLegacy.encrypt(
        `${values.password}`,
        "my-secret-key@123"
      ).toString(),
      __chQP: CryptoJS.RabbitLegacy.encrypt(
        `${userId}`,
        "buzy-my-secret-key@123"
      ).toString(),
    };

    axios
      .post(
        `${process.env.NEXT_PUBLIC_BUZCAMP_APP_ALLY}/authenticate/createuser`,
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
        router.push("/verification");
        setDisabled(false);
      })
      .catch((err) => {
        const variant = "error";
        enqueueSnackbar(err.response.data.message, { variant });
        setDisabled(false);
      });
  };

  const changeInput = (value) => {
    console.log(value);
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
        <title>Sign Up</title>
        <link rel="icon" href="/bzcmp.png" />
      </Head>

      <div className="bz-flex bz-flex-col bz-flex-grow bz-w-full">
        <Header />
        <div className="bz-ellipse"></div>
        <div className="bz-flex bz-w-full bz-justify-center">
          <Card className="bz-flex bz-flex-col bz-w-2/5 bz-p-3">
            <Card className="bz-w-full bz-flex bz-flex-col bz-justify-center bz-items-center bz-p-2">
              <h1 className="bz-text-3xl bz-font-black bz-text-grayScale">
                Getting Started
              </h1>
              <p className="bz-text-base bz-text-grayScale bz-my-3">
                Create an account to continue and connect with fellow students.
              </p>
            </Card>
            <Card
              className="bz-w-full bz-mt-1 bz-flex bz-flex-col bz-items-center bz-p-8"
              variant
              style={{ borderRadius: "20px" }}
            >
              <InputText
                className="bz-w-full bz-p-3 bz-my-2 bz-rounded-md"
                inputValue={""}
                vModel={changeInput}
                placeholder="Your Name"
                variant
                icon='smiley'
              />

              <InputText
                className="bz-w-full bz-p-3 bz-my-2 bz-rounded-md"
                inputValue={""}
                vModel={changeInput}
                placeholder="Your Email"
                variant
                icon='email'
              />
            </Card>
          </Card>
        </div>
      </div>
    </>
  );
}
