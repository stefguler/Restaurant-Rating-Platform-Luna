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

  // Registration
  // Hooks
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [redirect, setRedirect] = useState(false);

  const onSubmit = args => {
    args.preventDefault();
    console.log("hello");
    // check username and password are not empty
    if (emailAddress.length < 1) {
      setError("Please enter your e-mail.");
      return;
    }

    // first_name: firstName,
    // last_name: lastName,
    // email,
    // password,
    // password_confirm: passwordConfirm

    // setError("");
    // // fetch login
    // // error show error
    // // ok update redux
  };
  const devURL = "https://localhost:8001/backend/api/register";
  const prodURL = "https://team1.propulsion-learn.ch/backend/api/register";

  // componentDidMount() {
  //       const requestOptions = {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({
  //           first_name: "dzoce",
  //           last_name: "delev",
  //           email: "delevdzoce@gmail.com",
  //           password: "123",
  //           password_confirm: "123",
  //           username: "curiosity110",
  //         }),
  //         fetch(devURL, requestOptions)
  //           .then(response => response.json())
  //           .then(data => console.log(data))
  //           .catch(err => console.log("err", err));
  //       }
  //     };
  // // }

  //   useEffect(() => {
  //     const requestOptions = {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         first_name: "dzoce",
  //         last_name: "delev",
  //         email: "delevdzoce@gmail.com",
  //         password: "123",
  //         password_confirm: "123",
  //         username: "curiosity110",
  //       }),
  //     };
  //     fetch(devURL, requestOptions)
  //       .then(async response => {
  //         const data = await response.json();

  //         if (!response.ok) {
  //           const error = (data && data.message) || response.status;
  //           return Promise.reject(error);
  //         }
  //       })
  //       .catch(error => {
  //         console.log("error type: ", error);
  //       });
  //   });

  //   useEffect(() => {
  //     const requestOptions = {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         first_name: "dzoce",
  //         last_name: "delev",
  //         email: "delevdzoce@gmail.com",
  //         password: "123",
  //         password_confirm: "123",
  //         username: "curiosity110",
  //       }),
  //     };
  //     fetch(devURL)
  //       .then(response => response.json())
  //       .then(data => console.log(data))
  //       .catch(err => console.log("err", err));
  //   });

  //   const TryMe = e => {
  //     useEffect(() => {
  //       // if (token === undefined) navigate('/')

  //   const url = "https://localhost:8001/backend/api/register";
  //       const config = {
  //         method: "POST",
  //         headers: new Headers({
  //           "Content-Type": "application/json",
  //           //    "Authorization": `Bearer ${token}`
  //         }),
  //         body: JSON.stringify({ email: e.target.email.value }),
  //       };
  //       fetch(url, config).then(response => response.json());
  //       //    // .then(
  //       //    //     data => setNotificationCount(data.count))
  //       //    .then(
  //       //        data => setRestaurants(data.results))
  //     }, []);

  // const [data, setData] = useState({ hits: [] });

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const result = await axios(
  //         'https://hn.algolia.com/api/v1/search?query=redux',
  //       );

  //       setData(result.data);
  //     }
  // };
  //   let loginUser = async e => {
  //     e.preventDefault();
  //     let response = await fetch(
  //       "https://team1.propulsion-learn.ch/backend/api/register",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ email: e.target.email.value }),
  //         console.log(response)
  //       }
  //     );
  //     let data = await response.json();
  //     console.log(data);

  // if (response.status === 200) {
  //   setAuthTokens(data);
  //   setUser(jwt_decode(data.access));
  //   localStorage.setItem("authTokens", JSON.stringify(data));
  //   history.push("/");
  // }
  // else {
  //   alert("something went wrong");
  // }
  //   };

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
