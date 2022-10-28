import styled from "styled-components";


export const CreateRestaurantContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
align-items: center;
background-color: #F2F2F2;
`;

export const TitleContainer = styled.div`
font-family: 'Helvetica';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
text-align: center;
text-transform: uppercase;
color: #4C4C4C;
padding-bottom: 16px;

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


export const CreateRestaurantForm = styled.form`
width: 300px;
display: grid;
grid-template-columns: repeat(3, 1fr);
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;

`;

export const SearchButtonContainer =  styled.div`
display:flex;
`;

export const CategoryName = styled.div`
width: 300px;
display: grid;
grid-template-columns: repeat(3, 1fr);
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
color: #979797;
font-family: Helvetica;
font-size: 20px;
font-weight: 700;
line-height: 23px;
letter-spacing: 0px;
text-align: left;

`;