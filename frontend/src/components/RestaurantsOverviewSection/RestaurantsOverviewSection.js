import CategoryDropdown from "./CategoryDropdown/CategoryDropdown.js";
// import { RestaurantCardGrid } from '../HomepageSection/HomepageSection.styled.js'
import RestaurantCardGrid from '../HomepageSection/RestaurantCardGrid/RestaurantCardGrid.js'
import ReviewCardGrid from './ReviewCardGrid/ReviewCardGrid.js'
import ListFilterContainer from './ListFilterContainer/ListFilterContainer.js'
import { useState, useEffect } from 'react'
import { RestaurantOverviewContainer, SearchBarContainer, SearchInput, RestaurantListFilterContainer } from './RestaurantsOverviewSection.styled'
import ReviewCard from './ReviewCard/ReviewCard.js'
import UserCardGrid from './UserCardGrid/UserCardGrid.js'
import Header from '../Header-Footer/Header.js'
import Footer from '../Header-Footer/Footer.js'
import { useNavigate } from "react-router-dom";


export default function RestaurantOverview() {
    const [restaurants, setRestaurants] = useState()
    const [reviews, setReviews] = useState()
    const [users, setUsers] = useState()
    //const token = useSelector(state => state.auth.accessToken)
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3MzA3OTc0LCJpYXQiOjE2NjY4NzU5NzQsImp0aSI6IjY3NjY4MmNjYTc0NTQzMDliNDg4ZjQ4ZGE1N2YyYjRiIiwidXNlcl9pZCI6MX0.knkJJppK0jmWSjd5DEFxDHGyhMZHBQksb_qTfhBHbC4"
    const [activeFilter, setActiveFilter] = useState("Restaurants");
    const navigate = useNavigate()

    /*FETCH SECTION*/

    useEffect(() => {

        if (token === undefined) navigate('/')

        // fetch restaurants
        const urlRestaurant = "http://localhost:8001/backend/api/restaurants/"
        const configRestaurant = {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }),
        }
        fetch(urlRestaurant, configRestaurant).then(
            response => response.json())
            .then(
                data => setRestaurants(data))

        // fetch reviews
        const urlReviews = "http://localhost:8001/backend/api/reviews/1/"
        const configReviews = {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }),
        }
        fetch(urlReviews, configReviews).then(
            response => response.json())
            .then(
                data => setReviews(data))

        // fetch users
        const urlUsers = "http://localhost:8001/backend/api/users/list/"
        const configUsers = {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }),
        }
        fetch(urlUsers, configUsers).then(
            response => response.json())
            .then(
                data => setUsers(data))

    }, [token]);

    const handleActivateFilter = filter => {
        setActiveFilter(filter);
    };

    return (
        <>
            <Header></Header>
            <RestaurantOverviewContainer>
                <SearchBarContainer>
                    <SearchInput placeholder="Search"></SearchInput>
                    <CategoryDropdown />
                </SearchBarContainer>
                <RestaurantListFilterContainer>
                    <ListFilterContainer name={'Restaurants'} activeFilter={activeFilter} onClick={handleActivateFilter} />
                    <ListFilterContainer name={'Reviews'} activeFilter={activeFilter} onClick={handleActivateFilter} />
                    <ListFilterContainer name={'Users'} activeFilter={activeFilter} onClick={handleActivateFilter} />
                </RestaurantListFilterContainer>
                {
                    activeFilter === 'Restaurants' ? <RestaurantCardGrid data={restaurants} /> : null
                }
                {
                    activeFilter === 'Reviews' ? <ReviewCardGrid data={reviews} /> : null
                }
                {
                    activeFilter === 'Users' ? <UserCardGrid data={users} /> : null
                }

            </RestaurantOverviewContainer>
            <Footer></Footer>
        </>
    )
}
