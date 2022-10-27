import Footer from "../Header-Footer/Footer";
import Header from "../Header-Footer/Header";
import { HomepageBanner, InputContainer, Button, SearchInput, HomepageContainer, PageTitle, Separator } from "./HomepageSection.styled";
import RestaurantCardGrid from "./RestaurantCardGrid";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  
  const [restaurants, setRestaurants] = useState()
  //const token = useSelector(state => state.auth.accessToken)
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3MzA3OTc0LCJpYXQiOjE2NjY4NzU5NzQsImp0aSI6IjY3NjY4MmNjYTc0NTQzMDliNDg4ZjQ4ZGE1N2YyYjRiIiwidXNlcl9pZCI6MX0.knkJJppK0jmWSjd5DEFxDHGyhMZHBQksb_qTfhBHbC4"

  const navigate = useNavigate()

  /*FETCH RESTAURANTS INIT*/
  useEffect(() => {

    if (token === undefined) navigate('/')

    const url = "http://localhost:8001/backend/api/restaurants/"
    const config = {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }),
    }

    fetch(url, config).then(
      response => response.json()
    )
      .then(
        data => setRestaurants(data),
      )

  }, [token]);

  return (
    <>
      <Header></Header>
      <HomepageContainer>
        <HomepageBanner src='luna_banner.png' alt='luna banner'></HomepageBanner>
        <InputContainer>
          <SearchInput type='text' placeholder='Search...'></SearchInput>
          <Button>Search </Button>
        </InputContainer>
        <PageTitle> Best rated restaurants</PageTitle>
        <Separator></Separator>
        <RestaurantCardGrid data={restaurants} />
      </HomepageContainer>
      <Footer></Footer>
    </>
  )
}
