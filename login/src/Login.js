import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Button } from "@mui/material";
import ButtonComp from "./components/button";
import PasswordInput from "./components/passwordInput";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordVisible, setPasswordVisibility] = useState(false);

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };
  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisible);
  };
  const handleLogin = () => {
    // You can handle the login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <div className="login">
      <div>
        <p>Logo</p>
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
                <p className="text_forgot">Forgot password</p>
              </div>
              <ButtonComp text="Login" type="submit" />
            </form>
            <div className="no_acct_div">
              <p>
                Dont have an account? <Link to="/signup">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
