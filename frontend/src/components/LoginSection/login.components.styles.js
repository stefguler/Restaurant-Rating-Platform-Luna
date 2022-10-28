import styled from "styled-components";

export const Title = styled.h2`
font-family: 'Helvetica';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
text-align: center;
text-transform: uppercase;
color: #4C4C4C;
padding-bottom: 16px;
margin-bottom: 77px;
margin-top: 50px;
&::after {
  content: "  ";
  display: block;
  position: absolute;
  background: #E47D31;
  height: 2px;
  width: 100px;
  left: calc(50% - 50px);
  top: 140px;
}
`;

export const FormButton = styled.button`
  color: white;
  background-color: #e47d31;
  border: none;
  width: 200px;
  height: 56px;
  border-radius: 28px;
  margin: 0.5px;
  padding: 6px;
  margin-top: 38px;
`;

export const FormInput = styled.input`
width: 340px;
    border: 1px solid #EBEBEB;
    border-radius: 3px;
    font-weight: bold;
    color: #979797;
    padding: 6px;
    &:focus {
        border: 1px solid #EBEBEB;
    }
    &::placeholder {
      color: #979797;
    }
`;

export const ErrorContainer = styled.div`
    color: #979797;
    padding: 24px;
    font-size: 18px;
    font-weight: bold;
`;