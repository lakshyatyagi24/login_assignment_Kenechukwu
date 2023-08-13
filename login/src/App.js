import "./App.css";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import SignUp from "./SignUp";
import { useEffect, useState } from "react";
import HomePage from "./HomePage";

function App() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);
  return (
    <>
      <p style={{ marginLeft: "2rem" }}>Logo</p>
      <Routes>
        {authUser ? (
          <Route path="/" element={<HomePage />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
