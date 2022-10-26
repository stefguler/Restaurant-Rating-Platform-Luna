import React, { useState } from "react";
import axios from "axios";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

import Header from "../components/Header-Footer/Header";
export const TestLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const submit = async e => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    const response = await axios.post("hhtp://localhost:3000/api/login", data);
    // config: {withCredentials: true}
    setRedirectToLogin(true);
  };

  if (redirectToLogin) {
    return Navigate("/Home");
  }

  return (
    <>
      <Header />
      <h1> This is fake and it's for testing purposes </h1>
      <main className="form-signin w-100 m-auto">
        <form onSubmit={submit}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              onChange={e => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              onChange={e => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
        </form>
      </main>
    </>
  );
};
