import React, { useEffect, useState } from "react";

import "./TestSignUpStyles.css";
import { TestRegister } from "./TestRegister";
import { TestLogin } from "./TestLogin";

import { useDispatch } from "react-redux";
import { setLogin } from "../redux/Store";

function TestSignUp() {
  const [message, setMessage] = useState("You are not authenticated");

  const dispatch = useDispatch();

//  useEffect(() => {
//    async () => {
//      try {
//
//        // const response = await axios.get('http://localhost:8000/api/user')
//        const response = await axios.get('user')
//
//        const user = response.data;
//
//        setMessage(`Hi ${user.first_name} ${user.last_name}`);
//        dispatch(setLogin(true));
//      } catch(e) {
//        setMessage(message)
//        dispatch(setLogin(false));
//
//      }
//    }();
//  }, []);
  return (
    <>
      <h3>{message}</h3>
      <TestLogin />
      <TestRegister />
    </>
  );
}

export default TestSignUp;
