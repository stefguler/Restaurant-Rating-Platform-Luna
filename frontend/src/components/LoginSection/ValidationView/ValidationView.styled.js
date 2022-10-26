import styled from "styled-components";

export const ValidationContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
align-items: center;
background-color: #F2F2F2;
`;
export const ValidationForm = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 48px;
.rows {
    display: flex;
    flex-direction: row; 
    gap: 20px;
    .cols {
        display: flex;
        flex-direction: column;
        gap: 20px;        
    }   
}
`;