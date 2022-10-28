import { UserSubSectionsContainer, UserSubSectionContent } from './UserProfileSubSections.styled';


const UserProfileReviews = () => {
    return(
        <UserSubSectionsContainer>
            <address>
                <strong>Laurent H.</strong><br />
                Zurich, CH<br />
                6 Reviews<br />
                210 Comments
            </address>
            <UserSubSectionContent>
                <h2>REVIEWS</h2>
                <label></label>
            </UserSubSectionContent>
        </UserSubSectionsContainer>
    )
};

export default UserProfileReviews;