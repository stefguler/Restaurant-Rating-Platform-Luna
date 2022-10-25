import { useState } from 'react';
import { ListContainer, RestaurantListFilter } from '../RestaurantOverviewSection.styled'

export default function ListFilterContainer(props) {

  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    
    props.onClick(props.name)
   
    
  };

  return (
    <>
      {/* everything else */}
      <ListContainer className='active'
        style={{
          borderColor: props.activeFilter === props.name ? '#E47D31' : '#D8D8D8', //
        }}
        onClick={handleClick}>
        <RestaurantListFilter>{props.name}</RestaurantListFilter>
      </ListContainer>
    </>
  );
}