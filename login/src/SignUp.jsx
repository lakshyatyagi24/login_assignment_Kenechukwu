import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import ButtonComp from "./components/button";
import "./SignUp.css";
import { FaSpinner } from "react-icons/fa";
import PasswordInput from "./components/passwordInput";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisibility] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisible);
  };
  const signUp = (e) => {
    setIsLoading(true);
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsLoading(false);
        console.log(userCredential);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signUp}>
        <h1>Create Account</h1>
        <div>
          <label className="text_label">Email</label>
          <input
            className="email_input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="password_div">
          <label className="text_label">Password</label>
          <PasswordInput
            passwordVisible={passwordVisible}
            password={password}
            setPassword={setPassword}
            handlePasswordVisibility={handlePasswordVisibility}
          />
        </div>
        <ButtonComp
          text={isLoading ? <FaSpinner className="spin" /> : "Sign Up"}
          type="submit"
        />
      </form>
    </div>
  );
};

export default SignUp;
