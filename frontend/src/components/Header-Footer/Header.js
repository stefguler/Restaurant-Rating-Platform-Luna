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
  HeaderLoginButton,
  HeaderSignButtonHover,
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

  // Change Bold Text depending on which page we are
  const [boldText, setBoldText] = useState(false);
  const handleBoldText = () => {
    setBoldText(currnet => !currnet);
  };

  return (
    <HeaderMainContainerDiv>
      <HeaderLunaParagraphContainerDiv>
        <button onClick={() => navigate("/")}>
          <img src={lunaIMG} />
        </button>
      </HeaderLunaParagraphContainerDiv>
      <HeaderHSPContainerDiv>
        {hoverHomeButtonState === true ? (
          <HeaderHSPButtonsHover
            // style={{
            //   fontWeight: boldText ? "bold" : "bold",
            // }}
            onClick={() => navigate("/Home")}
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

        {hoverSearchButtonState === true ? (
          <HeaderHSPButtonsHover
            onClick={() => navigate("/Search")}
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

        {hoverProfileButtonState === true ? (
          <HeaderHSPButtonsHover
            onClick={() => navigate("/Profile")}
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
          {signupButtonState == true ? (
            <HeaderSignButtonHover
              onClick={() => navigate("/Signup")}
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

          {loginButtonState == true ? (
            <HeaderLoginButtonHover
              onClick={() => navigate("/Signin")}
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
