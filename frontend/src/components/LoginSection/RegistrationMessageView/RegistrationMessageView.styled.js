import styled from "styled-components";

export const RegistrationMessageViewContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
align-items: center;
background-color: #F2F2F2;
`;

export const MessageView = styled.div`
margin-top:48px;
width: 500px;
font-family: 'Helvetica';
font-style: normal;
font-weight: 400;
line-height: 23px;
text-align: center;
flex-grow:1;
&p {
    font-size: 20px;
}
`;