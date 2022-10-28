import styled from "styled-components";


export const RestaurantCardContainer = styled.div`
display: flex;
background: white;
box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 20px 40px rgba(0, 0, 0, 0.15);
border-radius: 0.5rem;
flex-direction: column;
align-items: center;
gap:  1rem;
width: 271px;
margin: 0 auto;
cursor: pointer;
`;

export const CardHeader = styled.div`
height: 8px;
width: 100%;
background: #E47D31;
border-top-left-radius: 0.5rem;
border-top-right-radius: 0.5rem;
`

export const RestaurantTitle = styled.div`
font-size: 20px;
line-height: 23px;

`
export const RestaurantAdress = styled.div`
font-size: 18px;
line-height: 21px;

`

export const RestaurantRatingContainer= styled.div`
display: flex;
align-items: center;
width: 100%;
justify-content: space-around;

span {
    display: inline-flex !important;
    align-items: center;
    line-height: 2rem;
}

`

export const RestaurantRatingCount= styled.div`
font-size: 20px;
color: #4C4C4C;

`

export const RestaurantAvatar= styled.img`
    width: 100%;
`

