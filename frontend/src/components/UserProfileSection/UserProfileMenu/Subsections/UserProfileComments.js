import { UserSubSectionsContainer, UserSubSectionContent } from './UserProfileSubSections.styled';

const UserProfileComments = () => {
    return(
        <UserSubSectionsContainer>
            <address>
                <strong>Laurent H.</strong><br />
                Zurich, CH<br />
                6 Reviews<br />
                210 Comments
            </address>
            <UserSubSectionContent>
                <h2>COMMENTS</h2>
            </UserSubSectionContent>
        </UserSubSectionsContainer>
    )
};

export default UserProfileComments;