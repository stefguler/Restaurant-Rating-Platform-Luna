import Footer from "../Header-Footer/Footer";
import Header from "../Header-Footer/Header";
import ReviewCard from "./ReviewCard/ReviewCard.js"
import StarsRating from 'stars-rating'
import { useSelector } from "react-redux";
import { useState } from "react";
import { IconContext } from "react-icons";
import { CiLocationOn } from 'react-icons/ci';
import { BsPhone, BsLaptop, BsClock, BsCashCoin } from 'react-icons/bs';
import {
  RestaurantPageContainer, RestaurantAvatar, RestaurantDetailsContainer, RestaurantTitle, RestaurantInfo, RatingContainer, ReviewsInfo, RestaurantDetailsPopOutContainer,
  MapImg, StreetContainer, PhoneContainer, HomepageContainer, BottomContainer, LeftPartContainer, ReviewSection, FilterSection, ReviewList, RightPartContainer,
  OpeningsContainer, PricelevelContainer, ButtonsContainer, TopContainer, RestaurantAvatarOverlay
} from './RestaurantPageSection.styled'

export default function CreateReview(props) {
  //const restaurant = props.restaurant
  //const [restaurant, setRestaurants] = useState()
  //const token = useSelector(state => state.auth.accessToken)
  //const user = useSelector(state => state.auth.currentUser)
  //const [reviews, setReview] = useState(undefined)

  //useEffect(() => {

  // if (token === undefined) navigate('/')

  /*
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
    avatar: 'restaurant_sample_big.png',
    title: "Ramen Ichiraku",
    details: "Ramen & Noodlesoups",
    adress: "Konoha Valley 69",
    phone: "+41 44 322 11 22",
    map: "map_sample.png",
    homepage: "ichiraku-ramen.ch",
    rating: 5,
    reviews: 69,
    openings: "Monday-Friday, 9:00 am - 8:00 pm",
    pricelevel: 3,
  }


  const review1 = {
    user: {
      avatar: "star.svg",
      name: "Laurent H.",
      reviews: 1,
    },
    review: {
      created: "01.01.2022 07:45",
      title: "shitty stay!",
      description:
        "Ugh. Dont waste your time. Pizza dough good, thin crust but ingredients so so. Side of mixed vegetables very oily and mainly bell..",
      likes: 44,
      comments: 12,
      rating: 4,
    },
    commentsList: [
      {
        created: "01.01.2022 13:45",
        user: "Colin Wirz",
        content: "Actually you have no taste!",
      },
      {
        created: "01.01.2022 14:35",
        user: "Laurent Meyer",
        content: "Sorry bro!",
      },
    ],
  };

  const review2 = {
    user: {
      avatar: "star.svg",
      name: "Marc W.",
      reviews: 12,
    },
    review: {
      created: "01.01.2022 08:00",
      title: "Nice Dinner!",
      description: "What a delicios dinner we were served there, nice!",
      likes: 467,
      comments: 233,
    },
    commentsList: [
      {
        created: "01.01.2022 11:45",
        user: "Fritz Weber",
        content: "I fully agree on this!",
      },
      {
        created: "01.01.2022 12:00",
        user: "Marcel Pain",
        content: "Smack that!",
      },
    ],
  };

  const review3 = {
    user: {
      avatar: "star.svg",
      name: "Fritz Wayne",
      reviews: 34,
    },
    review: {
      created: "01.01.2022 08:30",
      title: "Noice one!",
      description: "Bibeli babeli bubbiiiiii, lets talk!",
      likes: 1,
      comments: 69,
    },
    commentsList: [
      {
        created: "01.01.2022 11:40",
        user: "Hill Bill",
        content: "Beyond the rating!",
      },
      {
        created: "01.01.2022 11:45",
        user: "Roger Moore",
        content: "Ayayayay",
      },
    ],
  };

  const reviews = [review1, review2, review3]

  let pricelevel = '';
  {
    for (let i = 0; i < restaurant.pricelevel; i++) {
      pricelevel = pricelevel + '$';
    }
  }

  return (
    <>
      <Header></Header>
      <RestaurantPageContainer>
        <RestaurantAvatarOverlay>
          <RestaurantAvatar src={restaurant.avatar}></RestaurantAvatar>
        </RestaurantAvatarOverlay>
        <TopContainer>
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
              <span>{restaurant.reviews} reviews</span>
            </RatingContainer>
          </RestaurantDetailsContainer>
          <RestaurantDetailsPopOutContainer>
            <MapImg src={restaurant.map} alt='location in map of restaurant'></MapImg>
            <StreetContainer>
              <IconContext.Provider value={{ color: "#4C4C4C", size: "2rem" }}>
                <CiLocationOn />
              </IconContext.Provider>
              <span>{restaurant.adress}</span>
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
              <span>{restaurant.homepage}</span>
            </HomepageContainer>
          </RestaurantDetailsPopOutContainer>
        </TopContainer>
        <BottomContainer>
          <LeftPartContainer>
            <ReviewSection>
              <FilterSection>
                <input input='text' placeholder="Filter list..."></input>
                <button>Filter</button>
              </FilterSection>
              <ReviewList>
                {reviews.map((review, idx) => {
                  return <ReviewCard key={idx} review={review} />
                })
                }
              </ReviewList>
            </ReviewSection>
          </LeftPartContainer>
          <RightPartContainer>
            <OpeningsContainer>
              <IconContext.Provider value={{ color: "#4C4C4C", size: "2rem" }}>
                <BsClock />
              </IconContext.Provider>
              <span>{restaurant.openings}</span>
            </OpeningsContainer>
            <PricelevelContainer>
              <IconContext.Provider value={{ color: "#4C4C4C", size: "2rem" }}>
                <BsCashCoin />
              </IconContext.Provider>
              <span>Pricelevel: {pricelevel}</span>
            </PricelevelContainer>
            <ButtonsContainer>
              <button>write review</button>
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