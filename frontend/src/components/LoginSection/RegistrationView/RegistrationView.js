import { useEffect, useState } from "react";

// styles
import Header from "../../Header-Footer/Header";
import Footer from "../../Header-Footer/Footer";
import {
  RegistrationViewContainer,
  RegistrationViewForm,
} from "./RegistrationView.styled";
import {
  FormButton,
  FormInput,
  Title,
  ErrorContainer,
} from "../login.components.styles";
import { Navigate } from "react-router-dom";
import axios, { Axios } from "axios";

const RegistrationView = props => {
  const [emailAddress, setEmailAddress] = useState("");
  const [error, setError] = useState("");

  const onSubmit = args => {
    args.preventDefault();
    console.log("hello");
    // check username and password are not empty
    if (emailAddress.length < 1) {
      setError("Please enter your e-mail.");
      return;
    }
  };
  const devURL = "https://localhost:8001/backend/api/register";
  const prodURL = "https://team1.propulsion-learn.ch/backend/api/register";

  return (
    <RegistrationViewContainer>
      <Header />
      <RegistrationViewForm>
        <Title>REGISTRATION</Title>
        <FormInput
          type="text"
          placeholder="Email Address"
          value={emailAddress}
          onChange={args => setEmailAddress(args.target.value)}
        />
        <FormButton type="submit">Register</FormButton>
        {error.length > 0 && <ErrorContainer>{error}</ErrorContainer>}
      </RegistrationViewForm>
      <Footer />
    </RegistrationViewContainer>
  );
};

export default RegistrationView;
