import styled from "styled-components";


export const CreateReviewContainer = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F8F8F9;
  padding: 4.5rem 0 ;
`

export const AvatarOverlay = styled.div`
  background: rgba(0, 0, 0, 10);
  width: 100%;
  display: flex;
  justify-content: center;
`

export const RestaurantAvatar = styled.img`
  width: 25%;
  max-height: 204px;
  opacity: 70%;

`

export const RestaurantDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  color: white;
  flex-direction: column;
  position: absolute;
  padding-left: 7rem;
  top: 7rem;

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
  gap: 2rem;

`

export const ReviewsInfo = styled.div`
  font-size: 20px;

`

export const ReviewForm = styled.form`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  width: 832px;
`

export const FormRatingContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 2rem;

  span {
    color: #7E7E7E;
  }
`

export const FormRatingDescriptionLabel = styled.form`
  
  textarea {
      width: 100%;
      height: 265px;
      border: 1px #E3E3E3 solid;
      padding: 1rem;
      color: #E3E3E3;
      vertical-align: top;
  }
`

export const Submit = styled.button`
  margin-top: 1rem;
  width: 20%;
  align-self: flex-end;
  background: #E47D31;
  border: none;
  border-radius: 4rem;
  height: 57px;
  font-size: 20px;
  text-transform: uppercase;

  :hover{
    background: white;
    border: 1px solid #E47D31;
  }

`
