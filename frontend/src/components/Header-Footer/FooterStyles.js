import styled from "styled-components";

export const FooterMainContainerDiv = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100vw;
  position: fixed;
  bottom: 0px;
  background-color: white;
  flex: 1;
  z-index: 1000;
  margin-top: 300rem;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 20px 40px rgba(0, 0, 0, 0.15);
`;

export const FooterUpperContainerDive = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
  padding: 5px;
  /* background-color: red; */
`;
export const FooterUpperLeftSideDiv = styled.div`
  display: flex;
  width: 40%;
  margin: 3px;
  position: relative;
  right: 0px;
  justify-content: space-between;


  a,
  p {
    text-decoration: none;
    color: black;
    margin-left: 10px;
    color: #646363;
  }
`;

export const FooterUpperRightSideDiv = styled.div`
  display: flex;
  justify-content: flex-end;


  width: 60%;

  img {
    object-fit: contain;
    width: 40px;
    height: 30px;
    margin-right: 15px;
  }
`;
export const FooterDownDiv = styled.div`
  display: flex;
`;

export const FooterDownLeftSideDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: #646363;
  height: 36.84px;
  justify-content: center;

  position: relative;

  small {
    font-size: 12px;
    width: 100%;
    margin-left: 15px;
  }
`;

export const EmptyDiv = styled.div`
  display: flex;
  width: 80%;
`;
