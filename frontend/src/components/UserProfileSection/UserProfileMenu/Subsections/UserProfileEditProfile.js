import { UserSubSectionsContainer, UserSubSectionContent } from './UserProfileSubSections.styled';

const UserProfileEditProfile = () => {
    return(
        <UserSubSectionsContainer>
            <address>
                <strong>Laurent H.</strong><br />
                Zurich, CH<br />
                6 Reviews<br />
                210 Comments
            </address>
            <UserSubSectionContent>
                <h2>EDIT</h2>
            </UserSubSectionContent>
        </UserSubSectionsContainer>
    )
};

export default UserProfileEditProfile;