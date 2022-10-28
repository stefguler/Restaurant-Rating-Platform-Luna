import styled from "styled-components";


export const RestaurantPageContainer = styled.div`
  width: 100%;
  padding: 4.5rem 0 ;
`

export const RestaurantAvatarOverlay = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  background: rgba(0, 0, 0, 10); 
  justify-content: center;

`

export const RestaurantAvatar = styled.img`
  width: 25%;
  opacity: 80%;
  height: 500px;

`

export const TopContainer = styled.div`
  display: flex;
  position: absolute;
  top: 7rem;
  justify-content: space-around;
  gap: 50rem;
  width: 100%;
`

export const RestaurantDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;

`

export const RestaurantTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
`
export const RestaurantInfo = styled.div`
  font-size: 24px;
  font-weight: 300;
`
export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 20px;
`
export const RestaurantDetailsPopOutContainer = styled.div`
  width: 361px;
  height: 336px;
  background: white;
  gap: 1rem;
  color: #4C4C4C;
  border-radius: 0.3rem;
`
export const MapImg = styled.img`
  width: 100%;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;

`

export const StreetContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 2rem;
`

export const PhoneContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 2rem;
`

export const HomepageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 2rem;
`

export const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20rem 5rem;
  gap: 2rem;
`

export const LeftPartContainer = styled.div`
  width: 50%;
`

export const ReviewSection = styled.div`
  display: flex;
  flex-direction: column;
`
export const FilterSection = styled.div`
  display: flex;
  gap: 1rem;
  height: 40px;
  margin-bottom: 1rem;
  justify-content: space-between;

  input {
    width: 70%;
    border-radius: 0.1rem;
    padding: 1rem;
    border-color: #EBEBEB
  }

  button {
    width: 20%;
    background: #E47D31;
    border: none;
    color: white;
    border-radius: 1rem;
    text-transform: uppercase;
    cursor: pointer;
    :hover {
      background: white;
      border: 1px solid #E47D31;
      color: black;
    }
  }

`

export const ReviewList = styled.div`
  width: 100%;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;


`
export const RightPartContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`
export const OpeningsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 2rem;
  border-bottom: 1px solid #D8D8D8;
  span {
      font-size: 20px;
    }

`

export const PricelevelContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 2rem;

    span{
      font-size: 20px;
    }
`

export const ButtonsContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  
  
  button {
    width: 200px;
    height: 39px;
    border: none;
    background: #E47D31;
    border-radius: 1rem;
    color: white;
    text-transform: uppercase;

    cursor: pointer;
    :hover {
      background: white;
      border: 1px solid #E47D31;
      color: black;
    }
    
  }
 
`