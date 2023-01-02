import { Formik } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import { useSnackbar } from "notistack";
import BackButton from "../../components/BackButton";
import AppBlock from "../../components/appBlock";

var CryptoJS = require("crypto-js");

const axios = require("axios");

var ng_universities = require('ng_universities');



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
    const federalUniversities = JSON.parse(ng_universities.getUniversities("federal"));
    const arr = [];
    federalUniversities.map((university) => {
      arr.push({ name: university.name, label: university.name });
    });
    getSchools(arr);
  }, []);
  

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
            <AppBlock title="Sign Up">
              <div className="bz-flex bz-flex-col bz-flex-grow bz-w-full">
                <div className="-bz-mt-4 bz-w-auto bz-flex bz-justify-start">
                  <BackButton />
                </div>

                <div className="bz-flex bz-flex-col bz-items-center bz-justify-center bz-flex-grow">
                  <div className="bz-flex bz-flex-col bz-py-3 bz-text-lg bz-text-white bz-font-semibold">
                    <span className="bz-my-1 bz-uppercase bz-text-blueCrayola">
                      Join Buzcamp
                    </span>
                  </div>
                  <div className="bz-flex bz-flex-col bz-w-3/4 bz-text-white bz-mt-2 bz-mb-6 bz-h-full">
                    <form onSubmit={handleSubmit}>
                      <div className="bz-flex w-full">
                        <div className="bz-flex bz-w-1/2 mr-2">
                          <Box
                            sx={{
                              width: 320,
                              maxWidth: "100%",
                            }}
                            noValidate
                            autoComplete="off"
                          >
                            <CssTextField
                              error={
                                errors.firstName && touched.firstName
                                  ? true
                                  : false
                              }
                              id="firstName"
                              label="First name"
                              variant="outlined"
                              size="small"
                              name="firstName"
                              autoComplete="off"
                              onChange={handleChange("firstName")}
                              style={{ width: "100%", zIndex: 0 }}
                              value={values.firstName}
                              onBlur={handleBlur}
                              helperText={
                                touched.firstName ? errors.firstName : ""
                              }
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="personality"
                                      edge="end"
                                    >
                                      <PersonOutlinedIcon />
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </Box>
                        </div>

                        <div className="bz-flex bz-w-1/2 bz-ml-2">
                          <Box
                            sx={{
                              width: 320,
                              maxWidth: "100%",
                            }}
                            noValidate
                            autoComplete="off"
                          >
                            <CssTextField
                              error={
                                errors.surName && touched.surName ? true : false
                              }
                              id="surName"
                              label="Last name"
                              variant="outlined"
                              name="surName"
                              autoComplete="off"
                              size="small"
                              onChange={handleChange("surName")}
                              style={{ width: "100%", zIndex: 0 }}
                              value={values.surName}
                              onBlur={handleBlur}
                              helperText={touched.surName ? errors.surName : ""}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="personality"
                                      edge="end"
                                    >
                                      <PersonOutlinedIcon />
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </Box>
                        </div>
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
                            select
                            error={
                              touched.nationality && Boolean(errors.nationality)
                            }
                            id="nationality"
                            label="Nationality"
                            variant="outlined"
                            name="nationality"
                            size="small"
                            onChange={handleChange("nationality")}
                            style={{ width: "102%", zIndex: 0 }}
                            value={values.nationality}
                            helperText={
                              touched.nationality ? errors.nationality : ""
                            }
                            onBlur={handleBlur}
                          >
                            {nations.map((option) => (
                              <MenuItem key={option.name} value={option.name}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </CssTextField>
                        </Box>
                      </div>

                      {/*<div className='bz-flex'>
										<Box
											sx={{
												width: '100%',
												mt: 3,
												maxWidth: '100%',
											}}
											noValidate
											autoComplete='off'
										>
											<CssTextField
												select
												error={touched.states && Boolean(errors.states)}
												id='states'
												label='State'
												variant='outlined'
												name='states'
												size='small'
												onChange={handleChange('states')}
												style={{ width: '102%', zIndex: 0 }}
												value={values.states}
												helperText={touched.states ? errors.states : ''}
												onBlur={handleBlur}
											>
												{statesOptions.map((option) => (
													<MenuItem key={option.name} value={option.name}>
														{option.label}
													</MenuItem>
												))}
											</CssTextField>
										</Box>
									</div> */}

                      {/*<div className='bz-flex'>
										<Box
											sx={{
												width: '100%',
												mt: 3,
												maxWidth: '100%',
											}}
											noValidate
											autoComplete='off'
										>
											<CssTextField
												select
												error={touched.gender && Boolean(errors.gender)}
												id='gender'
												label='Gender'
												variant='outlined'
												name='gender'
												size='small'
												onChange={handleChange('gender')}
												style={{ width: '102%', zIndex: 0 }}
												value={values.gender}
												helperText={touched.gender ? errors.gender : ''}
												onBlur={handleBlur}
											>
												{genderOptions.map((option) => (
													<MenuItem key={option.name} value={option.name}>
														{option.label}
													</MenuItem>
												))}
											</CssTextField>
										</Box>
									</div>*/}

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
                            select
                            error={
                              touched.institution && Boolean(errors.institution)
                            }
                            id="institution"
                            label="Institution"
                            variant="outlined"
                            name="institution"
                            size="small"
                            onChange={handleChange("institution")}
                            style={{ width: "102%", zIndex: 0 }}
                            value={values.institution}
                            helperText={
                              touched.institution ? errors.institution : ""
                            }
                            onBlur={handleBlur}
                          >
                            {schoolOptions.map((option) => (
                              <MenuItem key={option.name} value={option.name}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </CssTextField>
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
                              errors.department && touched.department
                                ? true
                                : false
                            }
                            id="department"
                            label="Department"
                            variant="outlined"
                            name="department"
                            autoComplete="off"
                            size="small"
                            onChange={handleChange("department")}
                            style={{ width: "102%", zIndex: 0 }}
                            value={values.department}
                            onBlur={handleBlur}
                            helperText={
                              touched.department ? errors.department : ""
                            }
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton edge="end">
                                    <SchoolOutlinedIcon />
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
                              errors.username && touched.username ? true : false
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
                            helperText={touched.username ? errors.username : ""}
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
                              errors.password && touched.password ? true : false
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
                            helperText={touched.password ? errors.password : ""}
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
                            Sign up
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="bz-flex bz-w-auto bz-text-blueCrayola bz-mt-6">
                  <span className="bz-flex bz-w-20">
                    <a href="#top" className="bz-text-current bz-no-underline">
                      About us
                    </a>
                  </span>
                  <span className="bz-flex bz-w-20">
                    <a href="#top" className="bz-text-current bz-no-underline">
                      Help center
                    </a>
                  </span>
                  <span className="bz-flex bz-w-1/4">
                    <a href="#top" className="bz-text-current bz-no-underline">
                      Terms & Condition
                    </a>
                  </span>
                  <span className="bz-flex bz-w-20">
                    <a href="#top" className="bz-text-current bz-no-underline">
                      Privacy Policy
                    </a>
                  </span>
                  <span className="bz-flex bz-w-20">
                    <a href="#top" className="bz-text-current bz-no-underline">
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
            </AppBlock>
          </>
        );
      }}
    </Formik>
  );
}
