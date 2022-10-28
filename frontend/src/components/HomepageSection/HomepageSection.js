import Footer from "../Header-Footer/Footer";
import Header from "../Header-Footer/Header";
import { HomepageBanner, InputContainer, Button, SearchInput, HomepageContainer, PageTitle, Separator } from "./HomepageSection.styled";
import RestaurantCardGrid from "./RestaurantCardGrid";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {

  const [restaurants, setRestaurants] = useState()
  const [searchInput, setSearchInput] = useState()
  //const token = useSelector(state => state.auth.accessToken)
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3MzA3OTc0LCJpYXQiOjE2NjY4NzU5NzQsImp0aSI6IjY3NjY4MmNjYTc0NTQzMDliNDg4ZjQ4ZGE1N2YyYjRiIiwidXNlcl9pZCI6MX0.knkJJppK0jmWSjd5DEFxDHGyhMZHBQksb_qTfhBHbC4"

  const navigate = useNavigate()

  /*FETCH RESTAURANTS INIT*/
  useEffect(() => {

    if (token === undefined) navigate('/')

    const url = "https://team1.propulsion-learn.ch/backend/api/restaurants/"
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

  const handleChangeSearchInput = (e) => {
    setSearchInput(e.target.value)
  }

  const handleSearchRequest = () => {
    const url = `https://team1.propulsion-learn.ch/backend/api/search/}`
    const searchData = {
      type: "restaurants",
      text_content: searchInput,
    }

    const searchBody = JSON.stringify(searchData)

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
            setRestaurants(data)
          })
        }
      }
      )
  }

  return (
    <>
      <Header></Header>
      <HomepageContainer>
        <HomepageBanner src='restaurant_banner.jpg' alt='luna banner'></HomepageBanner>
        <InputContainer>
          <SearchInput type='text' placeholder='Search...' onChange={(e) => handleChangeSearchInput(e)}></SearchInput>
          <Button onClick={handleSearchRequest}>Search </Button>
        </InputContainer>
        <PageTitle> Best rated restaurants</PageTitle>
        <Separator></Separator>
        <RestaurantCardGrid data={restaurants} />
      </HomepageContainer>
      <Footer></Footer>
    </>
  )
}

