import styled from "styled-components";

export const FormButton = styled.button`
  color: white;
  background-color: #e47d31;
  border: none;
  width: 150px;
  border-radius: 20px;
  margin: 0.5px;
  padding: 6px;
`;

export const FormInput = styled.input`
    border: 1px solid #cdc3c3;
    font-weight: bold;
    color: #cdc3c3;
    padding: 6px;
    &:focus {
        border: 1px solid #cdc3c3;
    }
`;