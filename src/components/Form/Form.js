import React from "react";
import "./Form.css";
import formLogo from "../../images/formLogo.png";

const Form = () => {
  return (
    <div className="form__container">
      <div className="form__container__logo">
        <img src={formLogo} alt="logo" />
      </div>
      <hr />
      <div className="form__container__form">
        <form>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email.."
          />

          <label htmlFor="passowrd">Passowrd</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Your password.."
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
