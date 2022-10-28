import { UserSubSectionsContainer, UserSubSectionContent } from './UserProfileSubSections.styled';

const UserProfileRestaurants = () => {
    return(
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
    )
};

export default UserProfileRestaurants;