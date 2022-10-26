import styled from "styled-components";


export const HomepageContainer = styled.div`
 min-width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 background-color: #F8F8F9;
 padding: 4.5rem 0 ;
`

// export const SearchBannerContainer = styled.div`
//     display: flex;
//     min-width: 100%;
//     margin-bottom: 22rem;
// `

export const HomepageBanner = styled.img`
    min-width: 100%;
    height: 351px;
    position: fixed;
    z-index: 998;
    margin-bottom: 22rem;

`

export const InputContainer = styled.div`
    width: 100%;
    height: 351px;
    display: flex;
    gap: 1rem;
    left: 20%;
    position: fixed;
    align-items: center;
    z-index: 998;
    
`

export const SearchInput = styled.input`
    width: 60%;
    height: 58px;
    border-radius: 0.3rem;
    border: none;
    font-size: 20px;
    color: #4C4C4C;
    line-height: 20px;
    padding-left: 1rem;
`

export const Button = styled.button`
    background: #E47D31;
    border-radius: 2rem;
    width: 200px;
    height: 58px;
    border: none;
    color: white;
    font-weight: 400px;
    font-size: 20px;
    line-height: 23px;
 cursor: pointer;

 :hover {
      background: white;
      color: black;
      border: 2px solid #E47D31;
    }
`

export const PageTitle = styled.h1`
    text-transform: uppercase;
    color: #4C4C4C;
    margin-top: 3rem;
    font-size: 24px;
    margin-top: 25rem;
`

export const Separator = styled.div`
    height: 3px;
    width: 18rem;
    background: #E47D31;
    margin: 0.5rem 0 3rem ;
    `

export const RestaurantCardsGrid = styled.div`
    display: grid;
    align-items: center;
    width: 60%;
    /* justify-content: center; */
    grid-template-columns: repeat(4, 1fr);
    font-weight: 400;
    gap: 1rem 1rem;
    padding: 1rem; 
    margin: 0 auto;
`

