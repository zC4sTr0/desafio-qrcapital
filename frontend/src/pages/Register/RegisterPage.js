import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  registerUser,
  checkUsernameAvaiable,
  checkEmailAvaiable,
} from "../../api/user";
import InputLabel from "../../components/InputLabel";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
var usernameAvaiabilityCheckResolved = true;
var emailAvaiabilityCheckResolved = true;

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [statusUsername, setStatusUsername] = useState("");
  const [statusPassword, setStatusPassword] = useState("");
  const [statusDisplayName, setStatusDisplayName] = useState("");
  const [statusEmail, setStatusEmail] = useState("");
  const [statusConfirmPassword, setStatusConfirmPassword] = useState("");
  const [errorMessageUsername, setErrorMessageUsername] = useState("");
  const [errorMessagePassword, setErrorMessagePassword] = useState("");
  const [errorMessageDisplayName, setErrorMessageDisplayName] = useState("");
  const [errorMessageConfirmPassword, setErrorMessageConfirmPassword] =
    useState("");
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  useState(false);

  const onDisplayNameChange = (e) => {
    setDisplayName(e.target.value);

    if (e.target.value.length < 3) {
      setStatusDisplayName("error");
      setErrorMessageDisplayName("Name must be at least 3 characters");
      return;
    }
    setStatusDisplayName("success");
    setErrorMessageDisplayName("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //check if all status are success
    if (
      statusUsername !== "success" ||
      statusPassword !== "success" ||
      statusDisplayName !== "success" ||
      statusEmail !== "success" ||
      statusConfirmPassword !== "success"
    ) {
      return;
    }

    var retorno_api = await registerUser({
      username,
      password,
      displayName,
      email,
    });
    if (retorno_api.status === 401) {
    }
    if (retorno_api.status === 200) {
      navigate("/");
    }
    return retorno_api;
  };

  const onUsernameChange = async (e) => {
    setUsername(e.target.value);
    usernameAvaiabilityCheckResolved = true;
    const regex = /^[a-zA-Z0-9._-]{1,32}$/;

    if (!regex.test(e.target.value) && e.target.value.length > 0) {
      setStatusUsername("error");
      setErrorMessageUsername("Username must be alphanumeric");
      return;
    }

    if (e.target.value.length < 3 || e.target.value.length > 32) {
      setStatusUsername("error");
      setErrorMessageUsername("Username must be between 3 and 32 characters");
      return;
    }

    //show loading spinner while checking username
    setStatusUsername("loading");
    setErrorMessageUsername("Checking username availability...");
    usernameAvaiabilityCheckResolved = false;

    //simulate delay for interview purposes only
    await delay(1100);
    var username = e.target.value;
    var returnValidUserCheck = await checkUsernameAvaiable({
      username,
    });

    // if the user has already typed something else, don't update the state
    if (usernameAvaiabilityCheckResolved) {
      return;
    }

    if (returnValidUserCheck.status === 200) {
      setStatusUsername("success");
      setErrorMessageUsername("");
      usernameAvaiabilityCheckResolved = true;
      return;
    }

    if (returnValidUserCheck.status === 400) {
      setStatusUsername("error");
      setErrorMessageUsername("Username already exists");
      usernameAvaiabilityCheckResolved = true;
      return;
    }
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);

    if (e.target.value.length < 8) {
      setStatusPassword("error");
      setErrorMessagePassword("Password must be at least 8 characters");
      return;
    }
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/;
    if (!regex.test(e.target.value) && e.target.value.length > 0) {
      setStatusPassword("error");
      setErrorMessagePassword(
        "Passwords must contain at least one uppercase letter, one lowercase letter, one number and one special character"
      );
      return;
    }
    setStatusPassword("success");
    setErrorMessagePassword("");
  };

  const onConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setStatusConfirmPassword("error");
      setErrorMessageConfirmPassword("Passwords must match");
      return;
    }
    setStatusConfirmPassword("success");
    setErrorMessageConfirmPassword("");
  };

  const onEmailChange = async (e) => {
    setEmail(e.target.value);
    emailAvaiabilityCheckResolved = true;
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!regex.test(e.target.value) && e.target.value.length > 0) {
      setStatusEmail("error");
      setErrorMessageEmail("Email format is invalid");
      return;
    }

    if (e.target.value.length === 0) {
      setStatusEmail("error");
      setErrorMessageEmail("Please enter an email");
      return;
    }

    //show loading spinner while checking email
    setStatusEmail("loading");
    setErrorMessageEmail("Checking if email is available...");
    emailAvaiabilityCheckResolved = false;

    //simulate delay for interview purposes only
    await delay(2000);
    var email = e.target.value;
    var returnValidEmailCheck = await checkEmailAvaiable({
      email,
    });

    // if the user has already typed something else, don't update the state
    if (emailAvaiabilityCheckResolved) {
      return;
    }
    if (returnValidEmailCheck.status === 200) {
      setStatusEmail("success");
      setErrorMessageEmail("");
      emailAvaiabilityCheckResolved = true;
      return;
    }

    if (returnValidEmailCheck.status === 400) {
      setStatusEmail("error");
      setErrorMessageEmail("Email already in use");
      emailAvaiabilityCheckResolved = true;
      return;
    }
  };

  return (
    <div className="h-screen bg-gradient-to-r from-neutral-300 via-gray-200 to-slate-200 flex justify-center items-center w-full">
      <div className="bg-white shadow-xl relative shadow-2xl lg:shadow-lg rounded px-14 pt-6 pb-8 mb-4">
        <div className="flex justify-center items-center mt-5 ">
          <img src="/img/qrcapital_logo.png" alt="Logo QR Capital" />
        </div>
        <div className="py-4 mb-10 px-8 text-black text-xl border-b border-grey-lighter">
          Join our community
        </div>
        <form onSubmit={handleSubmit}>
          <div className="px-12">
            <InputLabel
              labelName="Display name"
              type="text"
              id="displayname"
              name="displayname"
              status={statusDisplayName}
              errorMessage={errorMessageDisplayName}
              value={displayName}
              onChange={onDisplayNameChange}
            ></InputLabel>
            <InputLabel
              labelName="Username"
              type="text"
              id="username"
              status={statusUsername}
              errorMessage={errorMessageUsername}
              name="username"
              value={username}
              onChange={onUsernameChange}
            ></InputLabel>

            <InputLabel
              labelName="E-mail"
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={onEmailChange}
              status={statusEmail}
              errorMessage={errorMessageEmail}
            ></InputLabel>

            <InputLabel
              labelName="Password"
              type="password"
              id="password"
              status={statusPassword}
              errorMessage={errorMessagePassword}
              name="password"
              value={password}
              onChange={onPasswordChange}
            ></InputLabel>

            <InputLabel
              labelName="Confirm Password"
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              status={statusConfirmPassword}
              errorMessage={errorMessageConfirmPassword}
              value={confirmPassword}
              onChange={onConfirmPasswordChange}
            ></InputLabel>

            <button
              type="submit"
              className="w-full py-3 mt-5 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-600 hover:shadow-none"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
