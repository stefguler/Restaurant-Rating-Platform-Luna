import Footer from "../Header-Footer/Footer";
import Header from "../Header-Footer/Header";
import { CreateReviewContainer, RatingContainer, AvatarOverlay, RestaurantAvatar, RestaurantDetailsContainer, RestaurantTitle, RestaurantInfo, ReviewsInfo, ReviewForm, FormRatingContainer, FormRatingDescriptionLabel, Submit } from "./CreateReviewSection.styled";
import StarsRating from 'stars-rating'
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateReview() {
  //const restaurant = props.restaurant

  //const [restaurant, setRestaurants] = useState([])
  //const token = useSelector(state => state.auth.accessToken)
  //const user = useSelector(state => state.auth.currentUser)
  const [rating, setRating] = useState();
  const [ratingDescription, setRatingDescription] = useState();
  const restaurant = useSelector(state => state.restaurant.currentRestaurant)
  const navigate = useNavigate();
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3MzA3OTc0LCJpYXQiOjE2NjY4NzU5NzQsImp0aSI6IjY3NjY4MmNjYTc0NTQzMDliNDg4ZjQ4ZGE1N2YyYjRiIiwidXNlcl9pZCI6MX0.knkJJppK0jmWSjd5DEFxDHGyhMZHBQksb_qTfhBHbC4"


   const ratingChanged = (newRating) => {
    setRating(newRating)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

  
      const url = `https://team1.propulsion-learn.ch/backend/api/reviews/new/${restaurant.id}`
      const reviewData = {
        rating: rating,
        text_content: ratingDescription,
      }
      console.log(reviewData)
      const reviewBody = JSON.stringify(reviewData)
      console.log(reviewBody)
      const config = {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }),
        body: reviewBody
      }
      fetch(url, config)
        .then(result => {
          if (!result.ok) {
            console.log(result.text())
          } else {
            result.json().then(data => {
              console.log(data)
            })
          }
        }
        )
        navigate('/restaurant')
    }
      
   const changeDescription = (e) => {
    setRatingDescription(e.target.value)
  }

  let randomRating = Math.round( Math.floor(Math.random() * 5)*2)/2;
  let randomReviewCount = Math.floor(Math.random() * 99);


  return (
    <>
      <Header></Header>
      <CreateReviewContainer>
        <AvatarOverlay>
          <RestaurantAvatar src='no_picture_found.png' alt='restaurant avatar'></RestaurantAvatar>
        </AvatarOverlay>
        <RestaurantDetailsContainer>
          <RestaurantTitle>{restaurant.name}</RestaurantTitle>
          <RestaurantInfo>{restaurant.category}</RestaurantInfo>
          <RatingContainer>
            <StarsRating
              count={5}
              value={randomRating}
              edit={false}
              size={40}
              color2={'#ffd700'}
              color1={'#EBEBEB'}
            />
            <ReviewsInfo>{randomReviewCount} reviews</ReviewsInfo>
          </RatingContainer>
        </RestaurantDetailsContainer>
        {/* </RestaurantBannerContainer> */}

        <ReviewForm onSubmit={handleSubmit}>
          <FormRatingContainer>
            <StarsRating
              count={5}
              value={rating}
              edit={true}
              onChange={ratingChanged}
              size={40}
              color2={'#ffd700'}
              color1={'#EBEBEB'}
            />
            <span>Select your rating</span>
          </FormRatingContainer>
          <FormRatingDescriptionLabel>
            <textarea type='text' placeholder="Add your Review Description here ..." className="reviewDescription" onChange={changeDescription}></textarea>
          </FormRatingDescriptionLabel>
          <Submit type='submit'>Submit</Submit>
        </ReviewForm>
      </CreateReviewContainer>
      <Footer></Footer>
    </>
  )
}
