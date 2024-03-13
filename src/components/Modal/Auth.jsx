import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Forgetpassword from "./Forgetpassword";

const Auth = ({ showModal, closeModal }) => {
  const [currentForm, setCurrentForm] = useState("login");
  if (!showModal) return;
  return currentForm === "login" ? (
    <Login closeModal={closeModal} setCurrentForm={setCurrentForm} />
  ) : currentForm === "register" ? (
    <Register closeModal={closeModal} setCurrentForm={setCurrentForm} />
  ) : currentForm === "forgetpassword" ? (
    <Forgetpassword closeModal={closeModal} setCurrentForm={setCurrentForm} />
  ) : (
    <Login closeModal={closeModal} setCurrentForm={setCurrentForm} />
  );
};

export default Auth;
