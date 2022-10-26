import React, { useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import {
  HeaderMainContainerDiv,
  HeaderLunaParagraphContainerDiv,
  HeaderHSPContainerDiv,
  HeaderSignLoginDiv,
  HeaderHSPButtons,
  HeaderHSPButtonsHover,
  HeaderSigninButton,
  HeaderSignButtonHover,
  HeaderLoginButton,
  HeaderLoginButtonHover,
} from "./HeaderStyles";

import lunaIMG from "../images/luna_font.png";

function Header() {
  // Navigate trough URL
  const navigate = useNavigate();
  const location = useLocation();

  // Hover States
  // Home Search Profile
  const [hoverHomeButtonState, setHoverHomeButtonState] = useState(false);
  const [hoverSearchButtonState, setHoverSearchButtonState] = useState(false);
  const [hoverProfileButtonState, setHoverProfileButtonState] = useState(false);
  // SignUp Login States
  const [loginButtonState, setLoginButtonState] = useState(false);
  const [signupButtonState, setsignupButtonState] = useState(false);

  // // Change Bold Text depending on which page we are
  // const [boldText, setBoldText] = useState(false);
  // const handleBoldText = () => {
  //   setBoldText(currnet => !currnet);
  // };

  return (
    <HeaderMainContainerDiv>
      <HeaderLunaParagraphContainerDiv>
        <button onClick={() => navigate("/")}>
          <img src={lunaIMG} />
        </button>
      </HeaderLunaParagraphContainerDiv>
      <HeaderHSPContainerDiv>
        {hoverHomeButtonState === true || location.pathname === "/Home" ? (
          <HeaderHSPButtonsHover
            // style={{
            //   fontWeight: boldText ? "bold" : "normal",
            // }}
            // onClick={() => {
            //   setHoverHomeButtonState(true);
            // }}
            onClick={() => {
              navigate("/Home");
              setHoverHomeButtonState(true);
            }}
            // onClick={handleBoldText}
            onMouseEnter={() => {
              setHoverHomeButtonState(true);
            }}
            onMouseLeave={() => {
              setHoverHomeButtonState(false);
            }}
          >
            Home
          </HeaderHSPButtonsHover>
        ) : (
          <HeaderHSPButtons
            onMouseEnter={() => {
              setHoverHomeButtonState(true);
            }}
            onMouseLeave={() => {
              setHoverHomeButtonState(false);
            }}
          >
            Home
          </HeaderHSPButtons>
        )}

        {hoverSearchButtonState === true ||
        location.pathname === "/restaurants" ? (
          <HeaderHSPButtonsHover
            // style={{
            //   fontWeight: boldText ? "bold" : "normal",
            // }}
            // onClick={() => {
            //   setHoverSearchButtonState(true);
            // }}
            onClick={() => {
              navigate("/restaurants");
              setHoverSearchButtonState(true);
            }}
            // onClick={handleBoldText}
            onMouseEnter={() => {
              setHoverSearchButtonState(true);
            }}
            onMouseLeave={() => {
              setHoverSearchButtonState(false);
            }}
          >
            Search
          </HeaderHSPButtonsHover>
        ) : (
          <HeaderHSPButtons
            onMouseEnter={() => {
              setHoverSearchButtonState(true);
            }}
            onMouseLeave={() => {
              setHoverSearchButtonState(false);
            }}
          >
            Search
          </HeaderHSPButtons>
        )}

        {hoverProfileButtonState === true ||
        location.pathname === "/Profile" ? (
          <HeaderHSPButtonsHover
            // style={{
            //   fontWeight: boldText ? "bold" : "normal",
            // }}
            // onClick={() => {
            //   setHoverProfileButtonState(true);
            // }}
            onClick={() => {
              navigate("/Profile");
              setHoverProfileButtonState(true);
            }}
            // onClick={handleBoldText}
            onMouseEnter={() => {
              setHoverProfileButtonState(true);
            }}
            onMouseLeave={() => {
              setHoverProfileButtonState(false);
            }}
          >
            Profile
          </HeaderHSPButtonsHover>
        ) : (
          <HeaderHSPButtons
            onMouseEnter={() => {
              setHoverProfileButtonState(true);
            }}
            onMouseLeave={() => {
              setHoverProfileButtonState(false);
            }}
          >
            Profile
          </HeaderHSPButtons>
        )}

        <HeaderSignLoginDiv>
          {signupButtonState === true || location.pathname === "/Signup" ? (
            <HeaderSignButtonHover
              onClick={() => {
                navigate("/Signup");
                setsignupButtonState(true);
              }}
              // onClick={handleBoldText}
              onMouseEnter={() => {
                setsignupButtonState(true);
              }}
              onMouseLeave={() => {
                setsignupButtonState(false);
              }}
            >
              SIGNUP
            </HeaderSignButtonHover>
          ) : (
            <HeaderSigninButton
              onMouseEnter={() => {
                setsignupButtonState(true);
              }}
              onMouseLeave={() => {
                setsignupButtonState(false);
              }}
            >
              SIGNUP
            </HeaderSigninButton>
          )}

          {loginButtonState === true || location.pathname === "/Login" ? (
            <HeaderLoginButtonHover
              onClick={() => {
                navigate("/Login");
                setHoverHomeButtonState(true);
              }}
              onMouseEnter={() => {
                setLoginButtonState(true);
              }}
              onMouseLeave={() => {
                setLoginButtonState(false);
              }}
            >
              LOGIN
            </HeaderLoginButtonHover>
          ) : (
            <HeaderLoginButton
              onMouseEnter={() => {
                setLoginButtonState(true);
              }}
              onMouseLeave={() => {
                setLoginButtonState(false);
              }}
            >
              LOGIN
            </HeaderLoginButton>
          )}
        </HeaderSignLoginDiv>
      </HeaderHSPContainerDiv>
    </HeaderMainContainerDiv>
  );
}

export default Header;
