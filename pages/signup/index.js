import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useSnackbar } from "notistack";
import Head from "next/dist/shared/lib/head";
import Header from "../../components/Header";
import Card from "../../components/Card";
import BzForm, { Button, DateSelect, InputRadio, InputSelect, InputText } from "../../components/BzForm";
import Link from "next/link";

var CryptoJS = require("crypto-js");

const axios = require("axios");

var ng_universities = require("ng_universities");

export default function SignUpForm() {
  const [cookie, setCookie] = useCookies(["lynchpin"]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [department, setDepartment] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDate] = useState("");
  const [gender, setGender] = useState("Male");
  const [username, setUsername] = useState("");
  const [disableBtn, setDisabled] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const router = useRouter();

  const genderArray = [{ name: "Male", label: "Male" }, { name: "Female", label: "Female" }];

  const [schoolOptions, getSchools] = useState([]);

  /** Populate Schools in the Institution  Box */
  useEffect(() => {
    const federalUniversities = JSON.parse(
      ng_universities.getUniversities("federal")
    );
    const arr = [];
    federalUniversities.map((university) => {
      arr.push({ value: university.name, label: university.name });
    });
    getSchools(arr);
  }, []);


  const changeInput = (value) => {
    setName(value);
  };

  const changeEmail = (value) => {
    setEmail(value);
  };

  const changeSchool = (value) => {
    setSchool(value)
  }

  const changeDepartment = (value) => {
    setDepartment(value)
  }

  const changePassword = (value) => {
    setPassword(value)
  }

  const changeDate = (value) => {
    setDate(value);
  }

  const changeGender = (value) => {
    setGender(value);
  }

  const changeUsername = (value) => {
    setUsername(value);
  }


  const submitData = (values) => {
    console.log(values)
   /* const userId = Math.floor(1000000 + Math.random() * 9000000);
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
      */
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

      <div className="bz-flex bz-flex-col bz-flex-grow bz-w-full gradient-bz bz-h-screen">
        <Header />
        <div className="bz-flex bz-w-full bz-justify-center">
          <Card className="bz-flex bz-flex-col bz-w-2/5 bz-p-3 bz-mt-1">
            <Card className="bz-w-full bz-flex bz-flex-col bz-justify-center bz-items-center bz-p-2">
              <h1 className="bz-text-3xl bz-font-black bz-text-grayScale">
                Getting Started
              </h1>
              <p className="bz-text-base bz-text-grayScale bz-my-3">
                Create an account to continue and connect with fellow students.
              </p>
            </Card>
            <Card
              className="bz-w-full bz-mt-1 bz-flex bz-flex-col bz-items-center bz-py-4 bz-px-10 bz-mb-5 bz-mt-3"
              variant
              style={{ borderRadius: "20px" }}
            >
              <BzForm onSubmit={submitData}>
                <InputText
                  className="bz-w-full bz-p-3 bz-my-6 bz-rounded-md"
                  inputValue={name}
                  vModel={changeInput}
                  placeholder="Your Name"
                  variant
                  icon="smiley"
                  id='name'
                />

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

                <InputSelect
                  className="bz-w-full bz-p-2 bz-my-6 bz-rounded-md"
                  options={schoolOptions}
                  variant
                  placeholder="Select Institution"
                  vModel={changeSchool}
                  inputValue={school}
                  id="institution"
                />

                <InputText
                  className="bz-w-full bz-p-3 bz-my-6 bz-rounded-md"
                  inputValue={department}
                  vModel={changeDepartment}
                  placeholder="Your Department"
                  variant
                  icon="community"
                  id='department'
                />

                <div className="bz-flex">
                  <DateSelect className="bz-w-full bz-mr-4" vModel={changeDate} />

                  <InputRadio
                    className="bz-w-full bz-rounded-md"
                    variant
                    icon="gender-mate"
                    inputValue={gender}
                    options={genderArray}
                    vModel={changeGender}
                  />
                </div>

                <InputText
                  className="bz-w-full bz-p-3 bz-my-6 bz-rounded-md"
                  inputValue={username}
                  vModel={changeUsername}
                  placeholder="Your Username"
                  variant
                  icon="smiley"
                  id='username'
                />

                <InputText
                  className="bz-w-full bz-p-3 bz-my-6 bz-rounded-md"
                  inputValue={password}
                  vModel={changePassword}
                  placeholder="Create Password"
                  variant
                  icon="lock"
                  inputType="password"
                  id='password'
                />

                <Button
                  className="bz-w-full bz-p-3 bz-text-white bz-my-6 bz-rounded-md bz-bg-blueCrayola"
                  inputValue="Sign Up"
                />

              </BzForm>

              <Card className='bz-flex bz-w-full bz-p-2 bz-justify-center'>
                <span className="bz-text-base bz-text-grayScale">
                  Already have an account? 
                </span>
                <span className="bz-text-base bz-text-blueCrayola bz-mx-3">
                  <Link href='login'> Sign In</Link>
                </span>
              </Card>
            </Card>
          </Card>
        </div>
      </div>
    </>
  );
}
