import React from "react";
import {
  FooterMainContainerDiv,
  FooterUpperContainerDive,
  FooterUpperLeftSideDiv,
  FooterUpperRightSideDiv,
  FooterDownDiv,
  FooterDownLeftSideDiv,
} from "./FooterStyles";

import facebook from "../images/facebook.png";
import googleplus from "../images/googleplus.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";

function Footer() {
  return (
    <FooterMainContainerDiv>
      <FooterUpperContainerDive>
        <FooterUpperLeftSideDiv>
          <a href="#"> About Us </a>
          <a href="#"> Press </a>
          <a href="#"> Blog </a>
          <a href="#"> iOS </a>
          <a href="#"> Android </a>
        </FooterUpperLeftSideDiv>
        <FooterUpperRightSideDiv>
          <img src={facebook} />
          <img src={instagram} />
          <img src={googleplus} />
          <img src={twitter} />
        </FooterUpperRightSideDiv>
      </FooterUpperContainerDive>
      <FooterDownDiv>
        <FooterDownLeftSideDiv>
          <small> &#169; Copyright Luna 2018</small>
        </FooterDownLeftSideDiv>
      </FooterDownDiv>
    </FooterMainContainerDiv>
  );
}

export default Footer;
