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
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ReviewCard(props) {

    const reviewCard = props.review;
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3MzA3OTc0LCJpYXQiOjE2NjY4NzU5NzQsImp0aSI6IjY3NjY4MmNjYTc0NTQzMDliNDg4ZjQ4ZGE1N2YyYjRiIiwidXNlcl9pZCI6MX0.knkJJppK0jmWSjd5DEFxDHGyhMZHBQksb_qTfhBHbC4"
    const [user, setUser] = useState();
    const navigate = useNavigate();


    useEffect(() => {

        if (token === undefined) navigate('/')
    
        const url = `http://localhost:8001/backend/api/users/${reviewCard.user}/`
        const config = {
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    
        }
    
        fetch(url, config).then(
          response => response.json())
          .then(
            data => setUser(data))
    
      }, [token]);
    
       let randomReviewCount = Math.floor(Math.random() * 99);

      const commentsList = [
        {
          created: "01.01.2022 11:40",
          user: "Hill Bill",
          content: "Beyond the rating!",
        },
        {
          created: "01.01.2022 11:45",
          user: "Roger Moore",
          content: "Ayayayay",
        },
      ]

    return (
        <>
            <ReviewCardContainer>
                <HeaderSection>
                    <UserSection>
                        <UserAvatar src={"no_picture_found.png"}></UserAvatar>
                        <UserSectionText>
                            <UserName>{user?.first_name} {user?.last_name}</UserName>
                            <ReviewsAmount>{randomReviewCount} Reviews in total</ReviewsAmount>
                        </UserSectionText>
                    </UserSection>
                    <StarsRating
                        count={5}
                        value={reviewCard.rating}
                        edit={false}
                        size={30}
                        color2={'#ffd700'}
                        color1={'#EBEBEB'}
                    />
                    <ReviewDate>{reviewCard.created}</ReviewDate>
                </HeaderSection>
                <ReviewSection>
                    <ReviewDescription>{reviewCard.text_content}</ReviewDescription>
                </ReviewSection>
                <ReviewActions>
                    <ReviewsActionSectionOne>
                        <LikesSection>
                            <IconContext.Provider value={{ color: "white", size: "1.5rem" }}>
                                <GoThumbsup />
                            </IconContext.Provider>
                            Like {reviewCard.liked_by_user.length}
                        </LikesSection>
                        <CommentsSection>
                            Comment {randomReviewCount}
                        </CommentsSection>
                    </ReviewsActionSectionOne>
                    <Collapsible trigger="View all comments">
                            <PostSection>
                                <PostInput placeholder='Type comment here...'></PostInput>
                                <button>post</button>
                            </PostSection>
                            {
                                commentsList.map((comment, keyx) => {
                                    return <CommentCard key={keyx} comment={comment} />
                                })
                            }
                    </Collapsible>
                </ReviewActions>
            </ReviewCardContainer>

        </>
    )
}