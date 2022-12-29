import { Formik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useState } from "react";
import { useSnackbar } from "notistack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { styled } from "@mui/material/styles";
import BackButton from "../../components/BackButton";
import AppBlock from "../../components/appBlock";

var CryptoJS = require("crypto-js");

const axios = require("axios");

export default function Login() {
  const { enqueueSnackbar } = useSnackbar();

  const testSchema = Yup.object().shape({
    password: Yup.string().required("Password Required"),
    username: Yup.string().required("Username Required"),
  });

  const initialValues = {
    username: "",
    password: "",
  };

  const [showPassword, setValues] = useState(false);
  const [disableBtn, setDisabled] = useState(false);

  const CssTextField = styled(TextField)({
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      fontSize: 14,
    },
    "& .MuiFormLabel-root": {
      fontSize: 14,
      display: "flex",
    },
    "& label.Mui-focused": {
      fontWeight: "bold",
      color: "rgba(34, 75, 218, 1)",
      fontSize: 14,
    },
  });

  const handleClickShowPassword = () => {
    setValues(!showPassword);
  };

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
    <Formik
      validationSchema={testSchema}
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        submitData(values);
      }}
    >
      {(props) => {
        const {
          handleChange,
          handleSubmit,
          values,
          errors,
          handleBlur,
          touched,
        } = props;

        return (
          <>
            <AppBlock title="Login">
              <div className="bz-flex bz-flex-col bz-flex-grow bz-w-full">
                <div className="-bz-mt-4 bz-w-auto bz-flex bz-justify-start">
                  <BackButton />
                </div>

                <div
                  className="bz-flex bz-flex-col bz-items-center bz-justify-center bz-flex-grow"
                  style={{ height: "79.5vh" }}
                >
                  <div className="bz-flex bz-flex-col bz-py-3 bz-text-lg bz-text-white bz-font-semibold">
                    <span className="bz-my-1 bz-capitalize bz-text-blueCrayola">
                      Sign In to Buzcamp
                    </span>
                  </div>
                  <div className="bz-flex bz-flex-col bz-w-3/5 cardClass bz-text-white bz-mb-6">
                    <Card className="bz-p-5">
                      <form onSubmit={handleSubmit}>
                        <div className="bz-flex">
                          <Box
                            sx={{
                              width: "100%",
                              mt: 3,
                              maxWidth: "100%",
                            }}
                            noValidate
                            autoComplete="off"
                          >
                            <CssTextField
                              error={
                                errors.username && touched.username
                                  ? true
                                  : false
                              }
                              id="username"
                              label="Username"
                              variant="outlined"
                              name="username"
                              size="small"
                              autoComplete="off"
                              onChange={handleChange("username")}
                              style={{ width: "102%", zIndex: 0 }}
                              value={values.username}
                              onBlur={handleBlur}
                              helperText={
                                touched.username ? errors.username : ""
                              }
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton edge="end">
                                      <PersonOutlinedIcon />
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </Box>
                        </div>

                        <div className="bz-flex">
                          <Box
                            sx={{
                              width: "100%",
                              mt: 3,
                              maxWidth: "100%",
                            }}
                            noValidate
                            autoComplete="off"
                          >
                            <CssTextField
                              error={
                                errors.password && touched.password
                                  ? true
                                  : false
                              }
                              id="password"
                              label="Password"
                              variant="outlined"
                              name="password"
                              size="small"
                              autoComplete="off"
                              onChange={handleChange("password")}
                              style={{ width: "102%", zIndex: 0 }}
                              type={showPassword ? "text" : "password"}
                              value={values.password}
                              onBlur={handleBlur}
                              helperText={
                                touched.password ? errors.password : ""
                              }
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="toggle password visibility"
                                      onClick={handleClickShowPassword}
                                      edge="end"
                                    >
                                      {showPassword ? (
                                        <VisibilityOff />
                                      ) : (
                                        <Visibility />
                                      )}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </Box>
                        </div>

                        <div className="bz-flex bz-w-full bz-justify-center bz-mt-6">
                          <div className="bz-w-auto bz-flex bz-justify-center">
                            <button
                              style={{ border: "2px solid #ffffff" }}
                              className={`bz-bg-primary-black bz-text-white bz-rounded-3xl bz-font-bold bz-py-2 bz-px-16`}
                              type="submit"
                              disabled={disableBtn}
                            >
                              Sign In
                            </button>
                          </div>
                        </div>

                        <div className="bz-flex bz-w-full bz-justify-center bz-mt-6">
                          <Link href="/forgot-password">
                            <span className="bz-text-blueCrayola bz-text-sm  bz-font-semibold">
                              Forgot Password ?
                            </span>
                          </Link>
                        </div>
                      </form>
                    </Card>
                  </div>
                </div>

                <div
                  className="bz-flex bz-w-auto bz-text-blueCrayola bz-flex-col"
                  style={{ marginTop: "auto" }}
                >
                  <div className="bz-flex">
                    <span className="bz-flex bz-w-20">
                      <a
                        href="#top"
                        className="bz-text-current bz-no-underline"
                      >
                        About us
                      </a>
                    </span>
                    <span className="bz-flex bz-w-20">
                      <a
                        href="#top"
                        className="bz-text-current bz-no-underline"
                      >
                        Help center
                      </a>
                    </span>
                    <span className="bz-flex bz-w-1/4">
                      <a
                        href="#top"
                        className="bz-text-current bz-no-underline"
                      >
                        Terms & Condition
                      </a>
                    </span>
                    <span className="bz-flex bz-w-20">
                      <a
                        href="#top"
                        className="bz-text-current bz-no-underline"
                      >
                        Privacy Policy
                      </a>
                    </span>
                    <span className="bz-flex bz-w-20">
                      <a
                        href="#top"
                        className="bz-text-current bz-no-underline"
                      >
                        Cookie Policy
                      </a>
                    </span>
                  </div>

                  <div className="bz-flex bz-w-full bz-justify-center bz-text-blueCrayola bz-mt-7">
                    <span className="bz-flex bz-w-auto bz-justify-center">
                      © 2022 Carrado.
                    </span>
                  </div>
                </div>
              </div>
            </AppBlock>
          </>
        );
      }}
    </Formik>
  );
}
