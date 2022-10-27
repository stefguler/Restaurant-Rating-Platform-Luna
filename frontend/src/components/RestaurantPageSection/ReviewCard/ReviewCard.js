import {
    ReviewCardContainer, HeaderSection, UserSection, UserAvatar, UserName, ReviewsAmount, ReviewSection,
    ReviewTitle, ReviewDescription, ReviewActions, LikesSection, CommentsSection, LatestCommentSection, CommentContainer,
    CommentAuthor, UserSectionText, ReviewDate, ReviewsActionSectionOne, ReviewsActionSectionTwo, PostSection, PostInput
} from './ReviewCard.styled'
import StarsRating from 'stars-rating'
import { IconContext } from "react-icons";
import { GoThumbsup } from 'react-icons/go';
import Collapsible from 'react-collapsible';
import CommentCard from '../CommentCard';

export default function ReviewCard(props) {

    const reviewCard = props.review;

    return (
        <>
            <ReviewCardContainer>
                <HeaderSection>
                    <UserSection>
                        <UserAvatar src={reviewCard.user.avatar}></UserAvatar>
                        <UserSectionText>
                            <UserName>{reviewCard.user.name}</UserName>
                            <ReviewsAmount>{reviewCard.user.reviews} Reviews in total</ReviewsAmount>
                        </UserSectionText>
                    </UserSection>
                    <StarsRating
                        count={5}
                        value={reviewCard.review.rating}
                        edit={false}
                        size={30}
                        color2={'#ffd700'}
                        color1={'#EBEBEB'}
                    />
                    <ReviewDate>{reviewCard.review.created}</ReviewDate>
                </HeaderSection>
                <ReviewSection>
                    <ReviewDescription>{reviewCard.review.description}</ReviewDescription>
                </ReviewSection>
                <ReviewActions>
                    <ReviewsActionSectionOne>
                        <LikesSection>
                            <IconContext.Provider value={{ color: "white", size: "1.5rem" }}>
                                <GoThumbsup />
                            </IconContext.Provider>
                            Like {reviewCard.review.likes}
                        </LikesSection>
                        <CommentsSection>
                            Comment {reviewCard.review.comments}
                        </CommentsSection>
                    </ReviewsActionSectionOne>
                    <Collapsible trigger="View all comments">
                            <PostSection>
                                <PostInput placeholder='Type comment here...'></PostInput>
                                <button>post</button>
                            </PostSection>
                            {
                                reviewCard.commentsList.map((comment, keyx) => {
                                    return <CommentCard key={keyx} comment={comment} />
                                })
                            }

                    </Collapsible>
                </ReviewActions>
            </ReviewCardContainer>

        </>
    )
}