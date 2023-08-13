import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { FaSpinner } from "react-icons/fa";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import ButtonComp from "./components/button";
import PasswordInput from "./components/passwordInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordVisible, setPasswordVisibility] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isResetSpinner, setIsResetSpinner] = useState(false);

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };
  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisible);
  };
  const handleLogin = (e) => {
    setIsLoading(true);
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsLoading(false);
        console.log(userCredential);
      })
      .catch((error) => {
        setIsLoading(false);
        const errorMessage = error.message;
        console.log(error.message);
        toast.error(errorMessage);
      });
  };
  const handlePasswordReset = () => {
    if (email.trim() !== "") {
      setIsResetSpinner(true);
      sendPasswordResetEmail(auth, email)
        .then((userCredential) => {
          toast.success("Check your email and reset password");
          console.log(userCredential);
          setIsResetSpinner(false);
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(error.message);
          toast.error(errorMessage);
          setIsResetSpinner(false);
        });
    } else {
      toast.warn("Please enter email to reset password");
    }
  };
  return (
    <div className="login">
      <ToastContainer />
      <div>
        <div className="centre-div">
          <div className="contents">
            <h1 className="login_title">Welcome back</h1>
            <p className="login_message">
              Welcome back! Please enter your details
            </p>
            <form className="form" onSubmit={handleLogin}>
              <div>
                <label className="text_label">Email</label>
                <input
                  className="email_input"
                  placeholder="Enter email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="text_label">Password</label>
                <PasswordInput
                  passwordVisible={passwordVisible}
                  password={password}
                  setPassword={setPassword}
                  handlePasswordVisibility={handlePasswordVisibility}
                />
              </div>
              <div className="action_div">
                <div className="rem_div">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={handleCheckboxChange}
                  />
                  Remember Me
                </div>
                <p className="text_forgot" onClick={handlePasswordReset}>
                  Forgot password
                </p>
                <FaSpinner
                  color="black"
                  className={
                    isResetSpinner ? "spin align_centre" : "spinner_hide"
                  }
                />
              </div>
              <ButtonComp
                text={isLoading ? <FaSpinner className="spin" /> : "Login"}
                type="submit"
              />
            </form>
            <div className="no_acct_div">
              <p>
                Dont have an account?{" "}
                <Link className="link_signup" to="/signup">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
