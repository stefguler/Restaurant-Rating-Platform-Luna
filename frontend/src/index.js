import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/Store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomepageSection from "./components/HomepageSection/HomepageSection";
import RestaurantsOverviewSection from "./components/RestaurantsOverviewSection";
import { GlobalStyle } from "./styles/GlobalStyles";
import TestSignUp from "./TestingAuthentication/TestSignUp";
import { TestLogin } from "./TestingAuthentication/TestLogin";
import { TestRegister } from "./TestingAuthentication/TestRegister";
import TestFetching from "./TestingAuthentication/TestFetching";
import LoginView from "./components/LoginSection/LoginView";
import ValidationView from "./components/LoginSection/ValidationView";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomepageSection />} />
        <Route path="/home" element={<HomepageSection />} />
        <Route path="/restaurants" element={<RestaurantsOverviewSection />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/validation" element={<ValidationView />} />

        {/* TestSignUp is only temporary */}
        <Route path="/TestSignUp" element={<TestSignUp />} />
        <Route path="TestLogin" element={<TestLogin />} />
        <Route path="TestRegister" element={<TestRegister />} />
        <Route path="TestFetching" element={<TestFetching />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
