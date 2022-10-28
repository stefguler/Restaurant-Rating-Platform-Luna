import styled from "styled-components";


export const UserCardContainer = styled.div`
display: flex;
background: white;
box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 20px 40px rgba(0, 0, 0, 0.15);
border-radius: 0.5rem;
flex-direction: column;
align-items: center;
height: 192px;
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

export const UserSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: #EBEBEB 1px solid;
`
export const UserSectionText = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 0 1rem;

`
export const UserAvatar = styled.img`
    width: 75px;

`
export const UserName = styled.div`
    font-size: 20px;
    color: #E47D31;
    font-weight: 700;
`
export const ReviewsAmount = styled.div`
    font-size: 14px;
    color: #4C4C4C;
    font-weight: 700;
    padding-top: 0.2rem;

`

export const DescriptionSection = styled.div`
    padding: 1rem;
    font-size: 14px;
      
`