import {
    ReviewCardContainer, CardHeader, UserSection, UserAvatar, UserName, ReviewsAmount, ReviewSection,
    ReviewTitle, ReviewDescription, ReviewActions, LikesSection, CommentsSection, LatestCommentSection, CommentContainer,
    CommentAuthor, UserSectionText
} from './ReviewCard.styled'
import { IconContext } from "react-icons";
import { GoThumbsup } from 'react-icons/go';

export default function ReviewCard(props) {

    const reviewCard = props.review;
    const style = props.style;

    return (
        <>
            <ReviewCardContainer>
                <CardHeader />
                <UserSection>
                    <UserAvatar src={reviewCard.user.avatar}></UserAvatar>
                    <UserSectionText>
                        <UserName>{reviewCard.user.name}</UserName>
                        <ReviewsAmount>{reviewCard.user.reviews} Reviews in total</ReviewsAmount>
                    </UserSectionText>
                </UserSection>

                <ReviewSection>
                    <ReviewTitle>{reviewCard.review.title}</ReviewTitle>
                    <ReviewDescription>{reviewCard.review.description}</ReviewDescription>
                </ReviewSection>
                <ReviewActions>
                    <LikesSection>
                        <IconContext.Provider value={{ color: "white", size: "1.5rem" }}>
                            <GoThumbsup />
                        </IconContext.Provider>
                        Like {reviewCard.review.likes}
                    </LikesSection>
                    <CommentsSection>
                        Comment {reviewCard.review.comments}
                    </CommentsSection>
                </ReviewActions>
                <LatestCommentSection>
                    <span>Latest comments</span>
                    {
                        reviewCard.commentsList.map((comment, keyx) => {
                            return <>
                                {console.log(comment)}
                                <CommentContainer>
                                    <CommentAuthor key={keyx}>{comment.user}</CommentAuthor>
                                    <div key={keyx}>{comment.content}</div>
                                </CommentContainer>
                            </>
                        })
                    }
                </LatestCommentSection>
            </ReviewCardContainer>
        </>
    )
}