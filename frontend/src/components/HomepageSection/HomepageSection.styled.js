import styled from "styled-components";


export const HomepageContainer = styled.div`
 min-width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 background-color: #F2F2F2;
`

export const HomepageBanner = styled.img`
 min-width: 100vw;
`

export const InputContainer = styled.div`
 display: flex;
 position: absolute;
 width: 100vh;
 gap: 1rem;
 top: 20%;
 left: 25%; 
`

export const SearchInput = styled.input`
 width: 60%;
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
    }
`

export const PageTitle = styled.h1`
    text-transform: uppercase;
    /* background: white; */
    color: #4C4C4C;
    margin-top: 3rem;
    font-size: 24px;
`

export const Separator = styled.div`
    height: 3px;
    width: 18rem;
    background: #E47D31;
    margin: 0.5rem 0 3rem ;
    `

export const RestaurantCardGrid = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    width: 80vw;
    grid-template-columns: repeat(4, 1fr);
    font-weight: 400;
    gap: 1rem 1rem;
    padding: 1rem; 
    margin: 0 auto;
`

