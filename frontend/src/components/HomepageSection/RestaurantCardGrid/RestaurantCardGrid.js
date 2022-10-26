import {RestaurantCardsGrid} from '../HomepageSection.styled.js'
import RestaurantCard from '../RestaurantCard/RestaurantCard.js'

export default function RestaurantCardGrid(props) {

  console.log(props)

  return (
    <>
      <RestaurantCardsGrid>
        {
          props.data.map((restaurant, keyx) => {
            return <RestaurantCard key={keyx} restaurant={restaurant}></RestaurantCard>
          })
        }
      </RestaurantCardsGrid>
    </>
  )
}
