import "./App.css";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
