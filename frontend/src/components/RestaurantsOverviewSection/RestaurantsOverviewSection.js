import CategoryDropdown from './CategoryDropdown/CategoryDropdown.js'
// import { RestaurantCardGrid } from '../HomepageSection/HomepageSection.styled.js'
import RestaurantCardGrid from '../HomepageSection/RestaurantCardGrid/RestaurantCardGrid.js'
import ReviewCardGrid from './ReviewCardGrid/ReviewCardGrid.js'
import ListFilterContainer from './ListFilterContainer/ListFilterContainer.js'
import { useState } from 'react'
import { RestaurantOverviewContainer, SearchBarContainer, SearchInput, RestaurantListFilterContainer } from './RestaurantOverviewSection.styled'
import ReviewCard from './ReviewCard/ReviewCard.js'
import UserCardGrid from './UserCardGrid/UserCardGrid.js'


export default function RestaurantOverview() {

    //const [restaurants, setRestaurants] = useState([])
    //const [reviews, setReviews] = useState([])
    //const [users, setUsers] = useState([])
    //const token = useSelector(state => state.auth.accessToken)
    const [activeFilter, setActiveFilter] = useState('Restaurants');

    /*FETCH SECTION

   //useEffect(() => {

    // if (token === undefined) navigate('/')

    // fetch restaurants
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

        // fetch reviews
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
               data => setReviews(data.results))

        // fetch users
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
               data => setUsers(data.results))

   }, [token]); */

    const restaurantObject1 = {
        title: "restaurant 1",
        adress: "dummyadress 1",
        rating: 2,
        ratingCount: 31
    }

    const restaurantObject2 = {
        title: "restaurant 2",
        adress: "dummyadress 2",
        rating: 4,
        ratingCount: 35
    }

    const restaurantObject3 = {
        title: "restaurant 3",
        adress: "dummyadress 3",
        rating: 3.5,
        ratingCount: 10
    }

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

    const review1 = {
        user: {
            avatar: 'star.svg',
            name: 'Laurent H.',
            reviews: 1,
        },
        review: {
            title: 'shitty stay!',
            description: 'Ugh. Dont waste your time. Pizza dough good, thin crust but ingredients so so. Side of mixed vegetables very oily and mainly bell..',
            likes: 44,
            comments: 12,
        },
        commentsList: [
            {
                user: "Colin Wirz",
                content: "Actually you have no taste!"
            },
            {
                user: "Laurent Meyer",
                content: "Sorry bro!"
            }
        ]

    }

    const review2 = {
        user: {
            avatar: 'star.svg',
            name: 'Marc W.',
            reviews: 12,

        },
        review: {
            title: 'Nice Dinner!',
            description: 'What a delicios dinner we were served there, nice!',
            likes: 467,
            comments: 233,
        },
        commentsList: [
            {
                user: "Fritz Weber",
                content: "I fully agree on this!"
            },
            {
                user: "Marcel Pain",
                content: "Smack that!"
            }
        ]
    }

    const review3 = {
        user: {
            avatar: 'star.svg',
            name: 'Fritz Wayne',
            reviews: 34,
        },
        review: {
            title: 'Noice one!',
            description: 'Bibeli babeli bubbiiiiii, lets talk!',
            likes: 1,
            comments: 69,
        },
        commentsList: [
            {
                user: "Hill Bill",
                content: "Beyond the rating!"
            },
            {
                user: "Roger Moore",
                content: "Ayayayay"
            }
        ]
    }

    const user1 = {
        avatar: 'star.svg',
        name: "Kitti Cat",
        reviews: 121,
        description: "Im professional photographer with an eye for details in every thing I do in my live. Every time a pass by a nice restaurant i have to stop and take notes...  read more",
    }
    const user2 = {
        avatar: 'star.svg',
        name: "Michael Mr. Night",
        reviews: 235,
        description: "Im professional photographer with an eye for details in every thing I do in my live. Every time a pass by a nice restaurant i have to stop and take notes...  read more",
    }
    const user3 = {
        avatar: 'star.svg',
        name: "Mother Sibel",
        reviews: 5,
        description: "Im professional photographer with an eye for details in every thing I do in my live. Every time a pass by a nice restaurant i have to stop and take notes...  read more",
    }
    const user4 = {
        avatar: 'star.svg',
        name: "Giorgi Bowser",
        reviews: 69,
        description: "Im professional photographer with an eye for details in every thing I do in my live. Every time a pass by a nice restaurant i have to stop and take notes...  read more",
    }
    const user5 = {
        avatar: 'star.svg',
        name: "Stef on Rails",
        reviews: 0,
        description: "Im professional photographer with an eye for details in every thing I do in my live. Every time a pass by a nice restaurant i have to stop and take notes...  read more",
    }

    const user6 = {
        avatar: 'star.svg',
        name: "Mrs. Ghost",
        reviews: 99,
        description: "Im professional photographer with an eye for details in every thing I do in my live. Every time a pass by a nice restaurant i have to stop and take notes",
    }
    


    const restaurantlist = [restaurantObject1, restaurantObject2, restaurantObject3, restaurantObject4, restaurantObject5, restaurantObject1, restaurantObject2, restaurantObject3, restaurantObject4, restaurantObject5, restaurantObject1, restaurantObject2, restaurantObject3, restaurantObject4, restaurantObject5]
    const reviewlist = [review1, review2, review3, review1, review2,review1, review2, review3, review1, review2,review1, review2, review3, review1, review2, ]
    const userlist = [user1, user2, user3, user4, user5, user6, user1, user6, user4, user3, user2, user1, user5, user1, user6, user6]

    const handleActivateFilter = (filter) => {
        setActiveFilter(filter)
        console.log('new filter', activeFilter)
    }

    return (
        <>
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
                    activeFilter === 'Restaurants' ? <RestaurantCardGrid data={restaurantlist} /> : null
                }
                {
                    activeFilter === 'Reviews' ? <ReviewCardGrid data={reviewlist} /> : null
                }
                {
                    activeFilter === 'Users' ? <UserCardGrid data={userlist} /> : null
                }

            </RestaurantOverviewContainer>
        </>
    )
}