import "./passwordInput.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
function PasswordInput({
  passwordVisible,
  password,
  setPassword,
  handlePasswordVisibility,
}) {
  return (
    <div className="input-container">
      <input
        className="password_input"
        placeholder="Enter password"
        type={passwordVisible ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <span class="icon" onClick={handlePasswordVisibility}>
        {passwordVisible ? (
          <VisibilityIcon id="togglePassword" fontSize="1rem" />
        ) : (
          <VisibilityOffIcon id="togglePassword" fontSize="1rem" />
        )}
      </span>
    </div>
  );
}
export default PasswordInput;
