import {RestaurantCardsGrid} from '../../HomepageSection/HomepageSection.styled.js'
import UserCard from '../UserCard/UserCard.js'

export default function UserCardGrid(props) {

  console.log(props)

  return (
    <>
      <RestaurantCardsGrid>
        {
          props.data.map(user => {
            return <UserCard user={user}></UserCard>
          })
        }
      </RestaurantCardsGrid>
    </>
  )
}
