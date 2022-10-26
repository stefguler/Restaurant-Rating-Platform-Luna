import { RestaurantCardContainer, CardHeader, RestaurantTitle, RestaurantAdress, RestaurantRatingContainer, RestaurantRating, RestaurantRatingCount, RestaurantAvatar } from './RestaurantCard.styled'
import StarsRating from 'stars-rating'


export default function RestaurantCard(props) {

    const restaurantCard = props.restaurant;

    const ratingChanged = (newRating) => {
        console.log(newRating)
      }

    return (
        <>
            <RestaurantCardContainer>
                <CardHeader></CardHeader>
                <RestaurantTitle>{restaurantCard.title}</RestaurantTitle>
                <RestaurantAdress>{restaurantCard.adress}</RestaurantAdress>
                <RestaurantRatingContainer>
                     <StarsRating
                            count={5}
                            value={restaurantCard.rating}
                            edit={false}
                            size={40}
                            color2={'#ffd700'}
                            color1={'#EBEBEB'}
                        />
                    <RestaurantRatingCount>{restaurantCard.ratingCount}</RestaurantRatingCount>
                </RestaurantRatingContainer>
                <RestaurantAvatar src='restaurant_logo.jpg'></RestaurantAvatar>
            </RestaurantCardContainer>
        </>
    )
}