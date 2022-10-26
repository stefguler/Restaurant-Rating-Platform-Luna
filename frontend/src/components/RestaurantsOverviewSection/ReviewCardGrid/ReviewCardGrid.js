import {RestaurantCardsGrid} from '../../HomepageSection/HomepageSection.styled.js'
import ReviewCard from '../ReviewCard/ReviewCard.js'

export default function ReviewCardGrid(props) {

  console.log(props)

  return (
    <>
      <RestaurantCardsGrid>
        {
          props.data.map(review => {
            return <ReviewCard review={review}></ReviewCard>
          })
        }
      </RestaurantCardsGrid>
    </>
  )
}
