import { useState } from 'react';
import { ListContainer, RestaurantListFilter } from '../RestaurantOverviewSection.styled'

export default function ListFilterContainer(props) {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(current => !current);

    console.log(isActive)
    console.log(props.name)
    props.onClick(props.name)
    
  };

  return (
    <>
      {/* everything else */}
      <ListContainer className='active'
        style={{
          borderColor: isActive && props.activeFilter === props.name ? '#E47D31' : '#D8D8D8',
        }}
        onClick={handleClick}>
        <RestaurantListFilter>{props.name}</RestaurantListFilter>
      </ListContainer>
    </>
  );
}