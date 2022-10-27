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
import RegistrationMessageView from "./components/LoginSection/RegistrationMessageView";
import RegistrationView from "./components/LoginSection/RegistrationView";

import CreateReviewSection from "./components/CreateReviewSection";
import RestaurantPageSection from "./components/RestaurantPageSection";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomepageSection />} />
        <Route path="/home" element={<HomepageSection />} />
        <Route path="/restaurants" element={<RestaurantsOverviewSection />} />
        <Route path="/restaurant/" element={<RestaurantPageSection />} />
        <Route path="/createreview" element={<CreateReviewSection />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/validation" element={<ValidationView />} />
        <Route path="/registrationMessage" element={<RegistrationMessageView />} />
        <Route path="/registration" element={<RegistrationView />} />


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
