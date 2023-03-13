/*import { Formik } from "formik";
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
import Alert from '@mui/material/Alert';
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { styled } from "@mui/material/styles";
import BackButton from "../../components/BackButton";
import AppBlock from "../../components/appBlock";


var CryptoJS = require("crypto-js");

const axios = require("axios");

export default function ForgotPassword() {
    const { enqueueSnackbar } = useSnackbar();

    const [disableBtn, setDisabled] = useState(false);


    const testSchema = Yup.object().shape({
        email: Yup.string()
            .email("Enter a valid email")
            .required("Email is required"),
    });

    const initialValues = {
        email: "",
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
                                <div className="-bz-mt-4 bz-w-auto bz-flex bz-justify-start">
                                    <BackButton />
                                </div>

                                <div
                                    className="bz-flex bz-flex-col bz-items-center bz-justify-center bz-flex-grow"
                                    style={{ height: "79.5vh" }}
                                >
                                    <div className="bz-flex bz-flex-col bz-py-3 bz-text-3xl bz-text-white bz-font-black">
                                        <span className="bz-my-1 bz-capitalize bz-text-blueCrayola">
                                            Password Reset
                                        </span>
                                    </div>

                                    <div className="bz-flex bz-w-3/5 bz-p-1 bz-mb-4">
                                        <Alert icon={false} severity="info">
                                            Enter the email associated with your account and we will send an email with instructions to reset your password.
                                        </Alert>
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
                                                            error={errors.email && touched.email ? true : false}
                                                            id="email"
                                                            label="Email Address"
                                                            variant="outlined"
                                                            name="email"
                                                            size="small"
                                                            autoComplete="off"
                                                            onChange={handleChange("email")}
                                                            style={{ width: "102%", zIndex: 0 }}
                                                            value={values.email}
                                                            onBlur={handleBlur}
                                                            helperText={touched.email ? errors.email : ""}
                                                            InputProps={{
                                                                endAdornment: (
                                                                    <InputAdornment position="end">
                                                                        <IconButton edge="end">
                                                                            <EmailOutlinedIcon />
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
                                                            Reset
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
} */
