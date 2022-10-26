import {UserCardContainer, CardHeader, UserAvatar, UserName, ReviewsAmount, UserSection, UserSectionText, DescriptionSection} from './UserCard.styled'


export default function UserCard(props) {

    const userCard = props.user;

    return (
        <>
            <UserCardContainer>
                <CardHeader />
                <UserSection>
                    <UserAvatar src={userCard.avatar}></UserAvatar>
                    <UserSectionText>
                        <UserName>{userCard.name}</UserName>
                        <ReviewsAmount>{userCard.reviews} Reviews in total</ReviewsAmount>
                    </UserSectionText>
                </UserSection>
                <DescriptionSection>
                    {userCard.description}
                </DescriptionSection>
            </UserCardContainer>
        </>
    )
}