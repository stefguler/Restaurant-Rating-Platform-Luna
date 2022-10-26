import React from "react";

import "./TestSignUpStyles.css";
import { TestRegister } from "./TestRegister";
import { TestLogin } from "./TestLogin";
import Header from "../components/Header-Footer/Header";

function TestSignUp() {
  return (
    <>
      <Header />
      <TestLogin />
      <TestRegister />
    </>
  );
}

export default TestSignUp;
