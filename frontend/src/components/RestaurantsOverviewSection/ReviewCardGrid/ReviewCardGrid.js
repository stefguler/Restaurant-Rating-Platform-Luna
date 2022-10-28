import {RestaurantCardsGrid} from '../../HomepageSection/HomepageSection.styled.js'
import ReviewCard from '../ReviewCard/ReviewCard.js'

export default function ReviewCardGrid(props) {

  return (
    <>
      <RestaurantCardsGrid>
        {
          props.length > 0 && props !== undefined ? props.data.map(review => {
            return <ReviewCard review={review}></ReviewCard>
          }) : props ==! undefined ? <ReviewCard review={props}></ReviewCard> : null
        }
      </RestaurantCardsGrid>
    </>
  )
}
