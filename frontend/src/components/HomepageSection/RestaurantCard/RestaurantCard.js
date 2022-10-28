import { RestaurantCardContainer, CardHeader, RestaurantTitle, RestaurantAdress, RestaurantRatingContainer, RestaurantRating, RestaurantRatingCount, RestaurantAvatar } from './RestaurantCard.styled'
import StarsRating from 'stars-rating'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentRestaurant } from '../../../redux/slices/Restaurant';


export default function RestaurantCard(props) {

    const restaurantCard = props.restaurant;
    const navigate = useNavigate()
    const dispatch = useDispatch()

    let randomRating = Math.round( Math.floor(Math.random() * 5)*2)/2;
    let randomReviewCount = Math.floor(Math.random() * 99);

    const handleNavigateToRestaurantPage = () =>  {
        
        dispatch(setCurrentRestaurant(restaurantCard))
        console.log()
        navigate("/restaurant")
      }

    return (
        <>
            <RestaurantCardContainer onClick={handleNavigateToRestaurantPage}>
                <CardHeader></CardHeader>
                <RestaurantTitle>{restaurantCard.name}</RestaurantTitle>
                <RestaurantAdress>{restaurantCard.street}, {restaurantCard.city}</RestaurantAdress>
                <RestaurantRatingContainer>
                     <StarsRating
                            count={5}
                            value={randomRating}
                            edit={false}
                            size={40}
                            color2={'#ffd700'}
                            color1={'#EBEBEB'}
                        />
                    <RestaurantRatingCount>{randomReviewCount}</RestaurantRatingCount>
                </RestaurantRatingContainer>
                <RestaurantAvatar src={"no_picture_found.png"}></RestaurantAvatar>
            </RestaurantCardContainer>
        </>
    )
}