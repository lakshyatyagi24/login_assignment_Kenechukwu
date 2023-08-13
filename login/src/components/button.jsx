import "./button.css";
function ButtonComp({ text, type }) {
  return (
    <div>
      <button type={type} className="login_btn">
        {text}
      </button>
    </div>
  );
}
export default ButtonComp;
