import {UserCardContainer, CardHeader, UserAvatar, UserName, ReviewsAmount, UserSection, UserSectionText, DescriptionSection} from './UserCard.styled'


export default function UserCard(props) {

    const userCard = props.user;
    let randomReviewCount = Math.floor(Math.random() * 99);

    return (
        <>
            <UserCardContainer>
                <CardHeader />
                <UserSection>
                    <UserAvatar src={"no_picture_found.png"}></UserAvatar>
                    <UserSectionText>
                        <UserName>{userCard.first_name} {userCard.last_name}</UserName>
                        <ReviewsAmount>{randomReviewCount} Reviews in total</ReviewsAmount>
                    </UserSectionText>
                </UserSection>
                <DescriptionSection>
                    {userCard.description}
                </DescriptionSection>
            </UserCardContainer>
        </>
    )
}