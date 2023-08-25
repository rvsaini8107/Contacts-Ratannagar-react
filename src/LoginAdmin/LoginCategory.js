import React, { useState } from "react";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";

const LoginCategory = () => {
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // const phoneNumber = getPhoneNumberFromUserInput();
    // const appVerifier = window.recaptchaVerifier;

    // const auth = getAuth();
    // signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    //   .then((confirmationResult) => {
    //     // SMS sent. Prompt user to type the code from the message, then sign the
    //     // user in with confirmationResult.confirm(code).
    //     window.confirmationResult = confirmationResult;
    //     // ...
    //   })
    //   .catch((error) => {
    //     // Error; SMS not sent
    //     // ...
    //     console.log(error, "error login");
    //   });
  };
  return (
    <div className="LoginUser">
      <form onSubmit={handleSubmit}>
        <div className="input-phone-div">
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone Number :"
          />
        </div>
        <div className="input-password-div">
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Password :"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginCategory;
