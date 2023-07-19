import React from "react";
import "./Form.css";
import formLogo from "../../images/formLogo.png";
import microsoft from "../../images/microsoftLogo.png";

const Form = () => {
  return (
    <div className="form__container">
      <div className="form__container__logo">
        <img src={formLogo} alt="logo" />
      </div>
      <hr />
      <form className="form__container__form">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email.."
        />

        <label htmlFor="passowrd">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Your password.."
        />
      </form>
      <div className="form__container__form__tc">
        <span>By continuing you agree</span>
        <span>Forgot password</span>
      </div>
      <div className="form__buttons">
        <button className="signin__button">Sign In</button>
        <button className="signin__button">Sign in with OTP</button>
        <button className="signin__button">
          <img src={microsoft} alt="" /> <span>Login with microsoft</span>
        </button>
        <span>We will send you an OTP on your provided contact.</span>
      </div>
      <hr />
      <div className="form__container__form__signup">
        <span>Don't have an account?</span>
        <button>Sign up</button>
      </div>
    </div>
  );
};

export default Form;
