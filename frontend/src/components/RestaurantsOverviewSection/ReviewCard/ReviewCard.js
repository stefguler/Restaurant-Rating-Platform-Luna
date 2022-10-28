import {
    ReviewCardContainer, CardHeader, UserSection, UserAvatar, UserName, ReviewsAmount, ReviewSection,
    ReviewTitle, ReviewDescription, ReviewActions, LikesSection, CommentsSection, LatestCommentSection, CommentContainer,
    CommentAuthor, UserSectionText
} from './ReviewCard.styled'
import { IconContext } from "react-icons";
import { GoThumbsup } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ReviewCard(props) {

    const reviewCard = props.review.data;
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3MzA3OTc0LCJpYXQiOjE2NjY4NzU5NzQsImp0aSI6IjY3NjY4MmNjYTc0NTQzMDliNDg4ZjQ4ZGE1N2YyYjRiIiwidXNlcl9pZCI6MX0.knkJJppK0jmWSjd5DEFxDHGyhMZHBQksb_qTfhBHbC4"
    const [user, setUser] = useState();
    const navigate = useNavigate();

    useEffect(() => {

        if (token === undefined) navigate('/')
    
        const url = `https://team1.propulsion-learn.ch/backend/api/users/${reviewCard?.user}/`
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
                <CardHeader />
                <UserSection>
                    <UserAvatar src={"no_picture_found.png"}></UserAvatar>
                    <UserSectionText>
                        <UserName>{user?.first_name} {user?.last_name}</UserName>
                        <ReviewsAmount>{randomReviewCount} Reviews in total</ReviewsAmount>
                    </UserSectionText>
                </UserSection>

                <ReviewSection>
                    <ReviewTitle>{"{title missing in review api}"}</ReviewTitle>
                    <ReviewDescription>{reviewCard?.text_content}</ReviewDescription>
                </ReviewSection>
                <ReviewActions>
                    <LikesSection>
                        <IconContext.Provider value={{ color: "white", size: "1.5rem" }}>
                            <GoThumbsup />
                        </IconContext.Provider>
                        Like {
                            reviewCard?.liked_by_user !== undefined ?
                            reviewCard?.liked_by_user?.length : 0 
                        }
                    </LikesSection>
                    <CommentsSection>
                        Comment {randomReviewCount}
                    </CommentsSection>
                </ReviewActions>
                <LatestCommentSection>
                    <span>Latest comments</span>
                    {
                        commentsList.map((comment, keyx) => {
                            return <>
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