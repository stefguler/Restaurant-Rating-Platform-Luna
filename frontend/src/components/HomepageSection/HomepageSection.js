import Footer from "../Header-Footer/Footer";
import Header from "../Header-Footer/Header";
import {
  HomepageBanner,
  InputContainer,
  Button,
  SearchInput,
  HomepageContainer,
  PageTitle,
  Separator,
  SearchBannerContainer,
} from "./HomepageSection.styled";
import RestaurantCardGrid from "./RestaurantCardGrid";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  //const [users, setUsers] = useState([])
  //const token = useSelector(state => state.auth.accessToken)
  // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3MzA3OTc0LCJpYXQiOjE2NjY4NzU5NzQsImp0aSI6IjY3NjY4MmNjYTc0NTQzMDliNDg4ZjQ4ZGE1N2YyYjRiIiwidXNlcl9pZCI6MX0.knkJJppK0jmWSjd5DEFxDHGyhMZHBQksb_qTfhBHbC4"
  
  // const navigate = useNavigate()
  
  // /*FETCH RESTAURANTS INIT*/
  //  useEffect(() => {

  //      if (token === undefined) navigate('/')

      
       const url = "https://motion.propulsion-home.ch/backend/api/users/?limit=250&offset=1000"
       const config = {
           method: "GET",
           headers: new Headers({
               "Content-Type": "application/json",
               "Authorization": `Bearer ${token}`
           }),
           // body: JSON.stringify(jsObject)
       }
   
       // fetch(url, config).then(
       //     response => response.json())
       //     // .then(
       //     //     data => setNotificationCount(data.count))
       //     .then(
       //         data => setUsers(data.results)
   // Gjorgi: i removed --->>>>      , [token]) i rly wanna sleep bro it's 2:22 AM  :'(

  const restaurantObject1 = {
    title: "restaurant 1",
    adress: "dummyadress 1",
    rating: 2,
    ratingCount: 31,
  };

  const restaurantObject2 = {
    title: "restaurant 2",
    adress: "dummyadress 2",
    rating: 4,
    ratingCount: 35,
  };

  const restaurantObject3 = {
    title: "restaurant 3",
    adress: "dummyadress 3",
    rating: 3.5,
    ratingCount: 10,
  };

  const restaurantObject4 = {
    title: "restaurant 4",
    adress: "dummyadress 4",
    rating: 5,
    ratingCount: 1210
  }

  const restaurantObject5 = {
    title: "restaurant 5",
    adress: "dummyadress 5",
    rating: 1,
    ratingCount: 2
  }

  const restaurantlist = [restaurantObject1, restaurantObject2, restaurantObject3, restaurantObject4, restaurantObject5, restaurantObject1]

  return (
    <>
    <Header></Header>
      <HomepageContainer>
        {/* <SearchBannerContainer> */}
          <HomepageBanner src='luna_banner.png' alt='luna banner'></HomepageBanner>
        {/* </SearchBannerContainer> */}
        <InputContainer>
          <SearchInput type='text' placeholder='Search...'></SearchInput>
          <Button>Search </Button>
        </InputContainer>
        <PageTitle> Best rated restaurants</PageTitle>
        <Separator></Separator>
        <RestaurantCardGrid data={restaurantlist} />
      </HomepageContainer>
      <Footer></Footer>
    </>
  )
}

