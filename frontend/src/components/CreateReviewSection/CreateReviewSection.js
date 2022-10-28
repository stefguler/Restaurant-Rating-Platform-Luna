import Footer from "../Header-Footer/Footer";
import Header from "../Header-Footer/Header";
import { CreateReviewContainer, RatingContainer, AvatarOverlay, RestaurantAvatar, RestaurantDetailsContainer, RestaurantTitle, RestaurantInfo, ReviewsInfo, ReviewForm, FormRatingContainer, FormRatingDescriptionLabel, Submit } from "./CreateReviewSection.styled";
import StarsRating from 'stars-rating'
import { useSelector } from "react-redux";
import { useState } from "react";

export default function CreateReview(props) {
  //const restaurant = props.restaurant

  //const [restaurant, setRestaurants] = useState([])
  //const token = useSelector(state => state.auth.accessToken)
  //const user = useSelector(state => state.auth.currentUser)
  const [rating, setRating] = useState();
  const [ratingDescription, setRatingDescription] = useState();


  /*FETCH RESTAURANTS INIT

   //useEffect(() => {

       // if (token === undefined) navigate('/')

      
       const url = "https://motion.propulsion-home.ch/backend/api/users/?limit=250&offset=1000"
       const config = {
           method: "GET",
           headers: new Headers({
               "Content-Type": "application/json",
               "Authorization": `Bearer ${token}`
           }),
           // body: JSON.stringify(jsObject)
       }
   
       fetch(url, config).then(
           response => response.json())
           // .then(
           //     data => setNotificationCount(data.count))
           .then(
               data => setRestaurants(data.results))

   }, [token]); */

  const restaurant = {
    avatar: 'restaurant_sample_banner.png',
    title: "Ramen Ichiraku",
    details: "Ramen & Noodlesoups",
    rating: 5,
    reviews: 69,
  }

  const ratingChanged = (newRating) => {
    console.log(newRating)
    setRating(newRating)
    console.log('newRating:', rating)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submit clicked')
    console.log('value Rating:', rating)
    console.log('value Description:', ratingDescription)
  }

  const changeDescription = (e) => {
    setRatingDescription(e.target.value)
    console.log('newRatingDescription:', ratingDescription)
  }


  return (
    <>
      <Header></Header>
      <CreateReviewContainer>
        {/* <RestaurantBannerContainer> */}
        <AvatarOverlay>
          <RestaurantAvatar src={restaurant.avatar} alt='restaurant avatar'></RestaurantAvatar>
        </AvatarOverlay>
        <RestaurantDetailsContainer>
          <RestaurantTitle>{restaurant.title}</RestaurantTitle>
          <RestaurantInfo>{restaurant.details}</RestaurantInfo>
          <RatingContainer>
            <StarsRating
              count={5}
              value={restaurant.rating}
              edit={false}
              size={40}
              color2={'#ffd700'}
              color1={'#EBEBEB'}
            />
            <ReviewsInfo>{restaurant.reviews} reviews</ReviewsInfo>
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
