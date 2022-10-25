import styled from "styled-components";

export const FooterMainContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  position: relative;
  bottom: 0px;
  left: 0px;
  right: 0px;
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
  width: 60%;
  margin: 3px;
  position: relative;
  right: 0px;
  justify-content: space-between;

  a,
  p {
    text-decoration: none;
    color: black;
    margin-left: 10px;
  }
`;

export const FooterUpperRightSideDiv = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 40%;

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
  width: 100%;

  position: relative;

  p {
    font-size: 10px;
    width: 100%;
    margin-left: 15px;
    vertical-align: top;
    /* position: relative; */
    /* top: -5px; */
  }
`;

export const EmptyDiv = styled.div`
  display: flex;
  width: 80%;
`;
