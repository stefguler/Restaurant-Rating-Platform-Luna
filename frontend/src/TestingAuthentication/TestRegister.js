import React, { useState } from "react";
import Header from "../components/Header-Footer/Header";

import axios from "axios";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export const TestRegister = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const data = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    password: password,
    password_confirm: passwordConfirm,
  };

  const submit = async e => {
    e.preventDefault();
    try {
      // await axios.post("http://localhost:8000/api/register", data: {
      let response = await axios.post(
        "http://localhost:3000/TestFetching",
        data.first_name
      );
      return response;
    } catch (err) {
      console.log("error: ", err);
    }

    setRedirectToLogin(true);
  };

  if (redirectToLogin) {
    return Navigate("/testLogin");
  }

  return (
    <>
      <Header />
      {location.pathname === "/TestLogin" ? true : false}
      <main className="form-signin w-100 m-auto">
        <form onSubmit={submit}>
          <h1 className="h3 mb-3 fw-normal">Please Register</h1>

          <div className="form-floating">
            <input
              onChange={e => {
                setFirstName(e.target.value);
              }}
              className="form-control"
              id="floatingInput"
              placeholder="First Name"
            />
            <label htmlFor="floatingInput">First Name</label>
          </div>
          <div className="form-floating">
            <input
              onChange={e => {
                setLastName(e.target.value);
              }}
              className="form-control"
              id="floatingInput"
              placeholder="Last Name"
            />
            <label htmlFor="floatingInput">Last Name</label>
          </div>
          <div className="form-floating">
            <input
              onChange={e => {
                setEmail(e.target.value);
              }}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              onChange={e => {
                setPassword(e.target.value);
              }}
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Pasword Confirm</label>
          </div>
          <div className="form-floating">
            <input
              onChange={e => {
                setPasswordConfirm(e.target.value);
              }}
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password Confirm</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Submit
          </button>
        </form>
      </main>
    </>
  );
};
