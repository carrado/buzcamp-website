import { Formik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Alert from '@mui/material/Alert';
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { styled } from "@mui/material/styles";
import AppBlock from "../../components/appBlock";


var CryptoJS = require("crypto-js");

const axios = require("axios");

export default function ResetPassword() {
    const { enqueueSnackbar } = useSnackbar();

    const [disableBtn, setDisabled] = useState(false);
    const [showPassword, setValues] = useState(false);
    const [showConfirmPassword, setConfirmValues] = useState(false);
    const [token, setToken] = useState('');


    const testSchema = Yup.object().shape({
        password: Yup.string().required("Password Required"),
        confirmpassword: Yup.string().required("Confirm Password!!"),
    });

    const initialValues = {
        password: "",
        confirmpassword: "",
    };


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


    useEffect(() => {
        const url = (window.location.href).split("?reset_token=");
        const tokenNo = url[1].split("&_setMail=");

        var base64Url = tokenNo[0].split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        setToken(JSON.parse(jsonPayload));
    }, []);


    const submitData = (values) => {
        if (values.password !== values.confirmpassword) {
            enqueueSnackbar('Passwords do not match', { variant: "error" });
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


    const handleClickShowPassword = () => {
        setValues(!showPassword);
    };

    const handleClickConfirmPassword = () => {
        setConfirmValues(!showConfirmPassword);
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
                        <AppBlock title="Password Reset">
                            <div className="bz-flex bz-flex-col bz-flex-grow bz-w-full">

                                <div
                                    className="bz-flex bz-flex-col bz-items-center bz-justify-center bz-flex-grow"
                                    style={{ height: "79.5vh" }}
                                >
                                    <div className="bz-flex bz-flex-col bz-py-3 bz-text-3xl bz-text-white bz-font-black">
                                        <span className="bz-my-1 bz-capitalize bz-text-blueCrayola">
                                            Choose a Password
                                        </span>
                                    </div>

                                    <div className="bz-flex bz-w-3/5 bz-p-1 bz-mb-4 bz-justify-center">
                                        You can now proceed to update your password
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
                                                                errors.confirmpassword && touched.confirmpassword
                                                                    ? true
                                                                    : false
                                                            }
                                                            id="password"
                                                            label="Confirm Password"
                                                            variant="outlined"
                                                            name="confirmpassword"
                                                            size="small"
                                                            autoComplete="off"
                                                            onChange={handleChange("confirmpassword")}
                                                            style={{ width: "102%", zIndex: 0 }}
                                                            type={showConfirmPassword ? "text" : "password"}
                                                            value={values.confirmpassword}
                                                            onBlur={handleBlur}
                                                            helperText={
                                                                touched.confirmpassword ? errors.confirmpassword : ""
                                                            }
                                                            InputProps={{
                                                                endAdornment: (
                                                                    <InputAdornment position="end">
                                                                        <IconButton
                                                                            aria-label="toggle password visibility"
                                                                            onClick={handleClickConfirmPassword}
                                                                            edge="end"
                                                                        >
                                                                            {showConfirmPassword ? (
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
                                                            Submit
                                                        </button>
                                                    </div>
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
