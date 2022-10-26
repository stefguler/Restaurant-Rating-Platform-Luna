import styled from "styled-components"

export const RestaurantOverviewContainer = styled.div`
    width: 100%;
`;

export const SearchBarContainer = styled.div`

  select {
    cursor: pointer;
    width: 15%;
    color: #D8D8D8;
    border: 1px solid #EBEBEB;
    font-size: 20px;
    /* padding: 1rem; */

      option {
        cursor: pointer;
    }
  }
`;

export const SearchInput = styled.input`
  width: 85%;
  color: #D8D8D8;
  border: 1px solid #EBEBEB;
  font-size: 20px;
  font-weight: 700;
  padding: 1rem;

  /* :focus {
    outline: none;
  } */

`;

export const RestaurantListFilterContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 15%;
  padding: 1rem 0;
  border-bottom: #D8D8D8 solid 2px;  

  cursor: pointer;

  :hover {
    border-color: #E47D31;
  }

  .active {
    border-radius: red;
  }  
`

export const RestaurantListFilter = styled.span`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
`


export const FilterListGrid = styled.div`
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
