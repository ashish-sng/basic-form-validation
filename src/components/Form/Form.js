// import React, { useState } from "react";
// import "./Form.css";
// import formLogo from "../../images/formLogo.png";
// import microsoft from "../../images/microsoftLogo.png";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Form = () => {
//   const [emailOrPhone, setEmailOrPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleNewFeature = (e) => {
//     e.preventDefault();
//     toast.info("This feature is not available yet.", {
//       position: toast.POSITION.TOP_CENTER,
//       autoClose: 3000,
//       draggable: true,
//     });
//   };

//   const handleSignIn = (e) => {
//     e.preventDefault();
//     // Basic email/phone and password validation
//     if (!emailOrPhone || !password) {
//       setErrorMessage("Please fill in all fields.");
//     } else if (!isValidEmailOrPhone(emailOrPhone)) {
//       setErrorMessage(
//         "Please enter a valid email address or a 10-digit phone number."
//       );
//     } else if (!isValidPassword(password)) {
//       setErrorMessage(
//         "Password must be 6 characters long, including an uppercase letter, a number, and a symbol."
//       );
//     } else {
//       toast.success("Sign in successful!", {
//         position: toast.POSITION.TOP_CENTER,
//         autoClose: 3000,
//         draggable: true,
//       });
//       setEmailOrPhone("");
//       setPassword("");
//       setErrorMessage("");
//     }
//   };

//   const isValidEmailOrPhone = (input) => {
//     // Basic email format validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     // Basic phone number format validation (10 digits, not starting from 0)
//     const phoneRegex = /^[1-9]\d{9}$/;

//     return emailRegex.test(input) || phoneRegex.test(input);
//   };

//   const isValidPassword = (password) => {
//     // Password must be 6 characters long, include an uppercase letter, a number, and a symbol
//     const passwordRegex =
//       /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
//     return passwordRegex.test(password);
//   };

//   return (
//     <div className="form__container">
//       <div className="form__container__logo">
//         <img src={formLogo} alt="logo" />
//       </div>
//       <hr />
//       <form className="form__container__form">
//         <label htmlFor="emailOrPhone">
//           Your Email/Phone<span>*</span>
//         </label>
//         <input
//           type="text"
//           name="emailOrPhone"
//           placeholder="Enter your email or phone"
//           value={emailOrPhone}
//           onChange={(e) => setEmailOrPhone(e.target.value)}
//           required
//         />

//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           name="password"
//           placeholder="Your password.."
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//         <div className="form__container__form__tc">
//           <span>By continuing you agree to ours terms and conditions.</span>
//           <span onClick={handleNewFeature}>Forgot password ?</span>
//         </div>
//         <div className="form__buttons">
//           <button className="signin__button" onClick={handleSignIn}>
//             Sign In
//           </button>
//           <button className="signin__button" onClick={handleNewFeature}>
//             Sign in with OTP
//           </button>
//           <button className="signin__button" onClick={handleNewFeature}>
//             <img src={microsoft} alt="" /> <span>Login with Microsoft</span>
//           </button>
//           <span>We will send you an OTP on your provided contact.</span>
//         </div>
//         <hr />
//         <div className="form__container__form__signup">
//           <span>Don't have an account?</span>
//           <button onClick={handleNewFeature}>Sign up</button>
//         </div>
//         <ToastContainer />
//       </form>
//     </div>
//   );
// };

// export default Form;

import React, { useState } from "react";
import "./Form.css";
import formLogo from "../../images/formLogo.png";
import microsoft from "../../images/microsoftLogo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNewFeature = (e) => {
    e.preventDefault();
    toast.info("This feature is not available yet.", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      draggable: true,
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // Basic email/phone and password validation
    if (!emailOrPhone || !password) {
      setErrorMessage("Please fill in all fields.");
    } else if (!isValidEmailOrPhone(emailOrPhone)) {
      setEmailError(
        "Please enter a valid email address or a 10-digit phone number."
      );
      setPasswordError("");
      setErrorMessage("");
    } else if (!isValidPassword(password)) {
      setEmailError("");
      setPasswordError(
        "Password must be 6 characters long, including an uppercase letter, a number, and a symbol."
      );
      setErrorMessage("");
    } else {
      toast.success("Sign in successful!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        draggable: true,
      });
      setEmailOrPhone("");
      setPassword("");
      setEmailError("");
      setPasswordError("");
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
      <div className="language__container">
        <div className="language__select">
          <i className="fa fa-globe"></i>
          <select>
            <option default>Languages</option>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
          </select>
          <i className="fa fa-chevron-down"></i>
        </div>
      </div>
      <div className="form__container__logo">
        <img src={formLogo} alt="logo" />
      </div>
      <hr />
      <form className="form__container__form">
        <label htmlFor="emailOrPhone">
          Your Email/Phone<span>*</span>
        </label>
        <input
          type="text"
          name="emailOrPhone"
          placeholder="Enter your email or phone"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          onBlur={() => {
            if (emailOrPhone) {
              if (!isValidEmailOrPhone(emailOrPhone)) {
                setEmailError(
                  "Please enter a valid email address or a 10-digit phone number."
                );
              } else {
                setEmailError("");
              }
            }
          }}
          required
        />
        {emailError && <p className="error-message">{emailError}</p>}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Your password.."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => {
            if (password) {
              if (!isValidPassword(password)) {
                setPasswordError(
                  "Password must be 6 characters long, including an uppercase letter, a number, and a symbol."
                );
              } else {
                setPasswordError("");
              }
            }
          }}
          required
        />
        {passwordError && <p className="error-message">{passwordError}</p>}

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="form__container__form__tc">
          <span>By continuing you agree to ours terms and conditions.</span>
          <span onClick={handleNewFeature}>Forgot password ?</span>
        </div>
        <div className="form__buttons">
          <button className="signin__button" onClick={handleSignIn}>
            Sign In
          </button>
          <button className="signin__button" onClick={handleNewFeature}>
            Sign in with OTP
          </button>
          <button className="signin__button" onClick={handleNewFeature}>
            <img src={microsoft} alt="" /> <span>Login with Microsoft</span>
          </button>
          <span>We will send you an OTP on your provided contact.</span>
        </div>
        <hr />
        <div className="form__container__form__signup">
          <span>Don't have an account?</span>
          <button onClick={handleNewFeature}>Sign up</button>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Form;
