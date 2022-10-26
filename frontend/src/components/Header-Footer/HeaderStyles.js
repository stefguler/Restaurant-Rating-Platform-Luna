import styled from "styled-components";

export const HeaderMainContainerDiv = styled.div`
  display: flex;
  width: 100vw;
  height: 40px;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  /* z-index: 1000; */
`;

export const HeaderLunaParagraphContainerDiv = styled.div`
  display: flex;
  margin-left: 19px;

  button {
    border: none;
    background-color: white;
  }
  img {
    width: 55px;
  }
`;

export const HeaderHSPContainerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 480px;
  margin-left: 20px;
`;

export const HeaderHSPButtons = styled.button`
  /* border: 1px solid white; */
  background-color: white;
  border: none;
`;
export const HeaderHSPButtonsHover = styled.button`
  /* border: 1px solid white; */
  background-color: white;
  border: none;

  &::after {
    display: block;
    position: absolute;
    width: 25px;
    margin-top: 10px;
    margin-left: 5px;
    height: 2px;
    content: "";
    background-color: #e47d31;
  }
  &:nth-child(1)::after {
    margin-left: 5px;
  }
  &:nth-child(2)::after {
    margin-left: 8px;
  }
  &:nth-child(3)::after {
    margin-left: 5px;
  }
`;

export const HeaderSignLoginDiv = styled.div`
  display: flex;
  /* width: 200px; */
  margin-left: 30px;
  margin-right: 20px;
`;

export const HeaderSigninButton = styled.button`
  color: white;
  background-color: #e47d31;
  border: none;
  margin-left: 20px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  width: 100px;
  height: 30px;
  margin: 0.5px;
`;

export const HeaderSignButtonHover = styled.button`
  color: black;
  background-color: white;
  border: 1px solid #e47d31;
  margin-left: 20px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  width: 100px;
  height: 30px;
  margin: 0.5px;
`;

export const HeaderLoginButton = styled.button`
  color: white;
  background-color: #e47d31;
  border: none;
  width: 100px;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  margin: 0.5px;
`;

export const HeaderLoginButtonHover = styled.button`
  color: black;
  background-color: white;
  border: 1px solid #e47d31;
  width: 100px;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  margin: 0.5px;
  transition: 5s;
`;
