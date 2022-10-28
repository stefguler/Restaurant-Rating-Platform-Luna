import { useNavigate } from 'react-router-dom';
import { UserSubSectionsContainer, UserSubSectionContent, CreateButton } from './UserProfileSubSections.styled';


const UserProfileRestaurants = () => {

    const navigate = useNavigate()

    const handleCreateRestaurant = () => {
        navigate("/createRestaurant")
    }

    return(
        <>
        <UserSubSectionsContainer>
            <address>
                <strong>Laurent H.</strong><br />
                Zurich, CH<br />
                6 Reviews<br />
                210 Comments
            </address>
            <UserSubSectionContent>
                <h2>RESTAURANTS</h2>
            </UserSubSectionContent>
        </UserSubSectionsContainer>
        <CreateButton onClick={handleCreateRestaurant}>create restaurant</CreateButton>
 
        </>
    )
};

export default UserProfileRestaurants;