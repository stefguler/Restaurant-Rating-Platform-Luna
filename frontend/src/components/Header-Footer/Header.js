import React from "react";
// import { useEffect, useState, useReducer, useRef } from "react";

// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";

import {
  HeaderMainContainerDiv,
  HeaderLunaParagraphContainerDiv,
  HeaderHSPContainerDiv,
  HeaderSignLoginDiv,
  HeaderHSPButtons,
  HeaderHSPSignButton,
  HeaderHSPLoginButton,
} from "./HeaderStyles";

import lunaIMG from "../images/luna_font.png";

import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  // {location.pathname === "/findFriends" ? (
  //   <BottomBorderButtom
  //     onClick={() => {
  //       navigate("../posts");
  //     }}

  return (
    <HeaderMainContainerDiv>
      <HeaderLunaParagraphContainerDiv>
        <button>
          <img src={lunaIMG} />
        </button>
      </HeaderLunaParagraphContainerDiv>
      <HeaderHSPContainerDiv>
        <HeaderHSPButtons>Home</HeaderHSPButtons>
        <HeaderHSPButtons>Search</HeaderHSPButtons>
        <HeaderHSPButtons>Profile</HeaderHSPButtons>
        <HeaderSignLoginDiv>
          <HeaderHSPSignButton>SINGUP</HeaderHSPSignButton>
          <HeaderHSPLoginButton>LOGIN</HeaderHSPLoginButton>
        </HeaderSignLoginDiv>
      </HeaderHSPContainerDiv>
    </HeaderMainContainerDiv>
  );
}

export default Header;
