import Footer from "../Header-Footer/Footer";
import Header from "../Header-Footer/Header";
import ReviewCard from "./ReviewCard/ReviewCard.js"
import StarsRating from 'stars-rating'
import { useSelector } from "react-redux";
import { IconContext } from "react-icons";
import { CiLocationOn } from 'react-icons/ci';
import { BsPhone, BsLaptop, BsClock, BsCashCoin } from 'react-icons/bs';
import {
  RestaurantPageContainer, RestaurantAvatar, RestaurantDetailsContainer, RestaurantTitle, RestaurantInfo, RatingContainer, ReviewsInfo, RestaurantDetailsPopOutContainer,
  MapImg, StreetContainer, PhoneContainer, HomepageContainer, BottomContainer, LeftPartContainer, ReviewSection, FilterSection, ReviewList, RightPartContainer,
  OpeningsContainer, PricelevelContainer, ButtonsContainer, TopContainer, RestaurantAvatarOverlay
} from './RestaurantPageSection.styled'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RestaurantPageSection() {

  const restaurant = useSelector(state => state.restaurant.currentRestaurant)
  //const [restaurant, setRestaurants] = useState()
  //const token = useSelector(state => state.auth.accessToken)
  //const user = useSelector(state => state.auth.currentUser)
  const [reviews, setReviews] = useState()
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3MzA3OTc0LCJpYXQiOjE2NjY4NzU5NzQsImp0aSI6IjY3NjY4MmNjYTc0NTQzMDliNDg4ZjQ4ZGE1N2YyYjRiIiwidXNlcl9pZCI6MX0.knkJJppK0jmWSjd5DEFxDHGyhMZHBQksb_qTfhBHbC4"
  const navigate = useNavigate()
  const [filterInput, setFilterInput] = useState()

  useEffect(() => {

    if (token === undefined) navigate('/')


    const url = `https://team1.propulsion-learn.ch/backend/api/reviews/restaurant/${restaurant.id}`
    const config = {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }),

    }

    fetch(url, config).then(
      response => response.json())
      .then(
        data => setReviews(data))

  }, [token]);

  let randomRating = Math.round(Math.floor(Math.random() * 5) * 2) / 2;
  let randomReviewCount = Math.floor(Math.random() * 99);
  let pricelevel = '';
  {
    for (let i = 0; i < restaurant.price_level; i++) {
      pricelevel = pricelevel + '$';
    }
  }

  const handleNavigateToCreateReview = () => {
    navigate("/createreview")
  }

  const handleChangeFilterInput = (e) => {
    setFilterInput(e.target.value)
  }


  const handleFilterRequest = () => {
    const url = `https://team1.propulsion-learn.ch/backend/api/search/}`
    const searchData = {
      type: "reviews",
      text_content: filterInput,
    }
    console.log(searchData)
    const searchBody = JSON.stringify(searchData)
    console.log(searchBody)
    const config = {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }),
      body: searchBody
    }
    fetch(url, config)
      .then(result => {
        if (!result.ok) {
          console.log(result.text())
        } else {
          result.json().then(data => {
            console.log(data)
            setReviews(data)
          })
        }
      }
      )
  }

  return (
    <>
      <Header></Header>
      <RestaurantPageContainer>
        <RestaurantAvatarOverlay>
          <RestaurantAvatar src={'no_picture_found.png'}></RestaurantAvatar>
        </RestaurantAvatarOverlay>
        <TopContainer>
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
              <span>{randomReviewCount} reviews</span>
            </RatingContainer>
          </RestaurantDetailsContainer>
          <RestaurantDetailsPopOutContainer>
            <MapImg src={"map_sample.png"} alt='location in map of restaurant'></MapImg>
            <StreetContainer>
              <IconContext.Provider value={{ color: "#4C4C4C", size: "2rem" }}>
                <CiLocationOn />
              </IconContext.Provider>
              <span>{restaurant.street}, {restaurant.city}</span>
            </StreetContainer>
            <PhoneContainer>
              <IconContext.Provider value={{ color: "#4C4C4C", size: "2rem" }}>
                <BsPhone />
              </IconContext.Provider>
              <span>{restaurant.phone}</span>
            </PhoneContainer>
            <HomepageContainer>
              <IconContext.Provider value={{ color: "#4C4C4C", size: "2rem" }}>
                <BsLaptop />
              </IconContext.Provider>
              <span>{restaurant.website}</span>
            </HomepageContainer>
          </RestaurantDetailsPopOutContainer>
        </TopContainer>
        <BottomContainer>
          <LeftPartContainer>
            <ReviewSection>
              <FilterSection>
                <input input='text' placeholder="Filter list..." onChange={(e) => handleChangeFilterInput(e)}></input>
                <button onClick={handleFilterRequest}>Filter</button>
              </FilterSection>
              <ReviewList>
                {
                  reviews !== undefined ?
                    reviews.map((review, idx) => {
                      return <ReviewCard key={idx} review={review} />
                    }) : null
                }
              </ReviewList>
            </ReviewSection>
          </LeftPartContainer>
          <RightPartContainer>
            <OpeningsContainer>
              <IconContext.Provider value={{ color: "#4C4C4C", size: "2rem" }}>
                <BsClock />
              </IconContext.Provider>
              <span>{restaurant.opening_hours}</span>
            </OpeningsContainer>
            <PricelevelContainer>
              <IconContext.Provider value={{ color: "#4C4C4C", size: "2rem" }}>
                <BsCashCoin />
              </IconContext.Provider>
              <span>Pricelevel: {pricelevel}</span>
            </PricelevelContainer>
            <ButtonsContainer>
              <button onClick={handleNavigateToCreateReview}>write review</button>
              <button>edit data</button>
            </ButtonsContainer>
          </RightPartContainer>
        </BottomContainer>
      </RestaurantPageContainer>
      <Footer></Footer>
    </>
  )
}


/* RestaurantAvatar, RestaurantDetailsContainer, RestaurantTitle, RestaurantInfo, RatingContainer, ReviewsInfo, RestaurantDetailsPopOutContainer,
, MapImg,  StreetContainer, PhoneContainer, BottomContainer, LeftPartContainer, ReviewSection, FilterSection, ReviewList, RightPartContainer,
OpeningsContainer,PricelevelContainer, ButtonsContainer  */