import React, { useState } from "react";
import "./Form.css";
import formLogo from "../../images/formLogo.png";
import microsoft from "../../images/microsoftLogo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    // Basic email/phone and password validation
    if (!emailOrPhone || !password) {
      setErrorMessage("Please fill in all fields.");
    } else if (!isValidEmailOrPhone(emailOrPhone)) {
      setErrorMessage(
        "Please enter a valid email address or a 10-digit phone number."
      );
    } else if (!isValidPassword(password)) {
      setErrorMessage(
        "Password must be 6 characters long, including an uppercase letter, a number, and a symbol."
      );
    } else {
      toast.success("Sign in successful!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        draggable: true,
      });
      setEmailOrPhone("");
      setPassword("");
      setErrorMessage("");
    }
  };

  const isValidEmailOrPhone = (input) => {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Basic phone number format validation (10 digits, not starting from 0)
    const phoneRegex = /^[1-9]\d{9}$/;

    return emailRegex.test(input) || phoneRegex.test(input);
  };

  const isValidPassword = (password) => {
    // Password must be 6 characters long, include an uppercase letter, a number, and a symbol
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className="form__container">
      <div className="form__container__logo">
        <img src={formLogo} alt="logo" />
      </div>
      <hr />
      <form className="form__container__form">
        <label htmlFor="emailOrPhone">Your Email/Phone<span>*</span></label>
        <input
          type="text"
          name="emailOrPhone"
          placeholder="Enter your email or phone"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Your password.."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="form__container__form__tc">
          <span>
            By continuing you agree to ours terms and conditions.
          </span>
          <span>Forgot password ?</span>
        </div>
        <div className="form__buttons">
          <button className="signin__button" onClick={handleSignIn}>
            Sign In
          </button>
          <button className="signin__button">Sign in with OTP</button>
          <button className="signin__button">
            <img src={microsoft} alt="" /> <span>Login with Microsoft</span>
          </button>
          <span>We will send you an OTP on your provided contact.</span>
        </div>
        <hr />
        <div className="form__container__form__signup">
          <span>Don't have an account?</span>
          <button>Sign up</button>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Form;
