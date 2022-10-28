import styled from "styled-components";


export const ReviewCardContainer = styled.div`
display: flex;
background: white;
box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 20px 40px rgba(0, 0, 0, 0.15);
border-radius: 0.5rem;
flex-direction: column;
align-items: center;
max-height: 410px;
width: 271px;
margin: 0 auto;
`;

export const CardHeader = styled.div`
height: 8px;
width: 100%;
background: #E47D31;
border-top-left-radius: 0.5rem;
border-top-right-radius: 0.5rem;
`

export const UserSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: #EBEBEB 1px solid;
`
export const UserSectionText = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 0 1rem;

`
export const UserAvatar = styled.img`
    width: 75px;
    border: 2px dashed #b3b2b2;

`
export const UserName = styled.div`
    font-size: 20px;
    color: #E47D31;
    font-weight: 700;
`
export const ReviewsAmount = styled.div`
    font-size: 14px;
    color: #4C4C4C;
    font-weight: 700;
    padding-top: 0.2rem;

`
export const ReviewSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
`
export const ReviewTitle = styled.div`
    font-size: 18px;
    color: #E47D31;
    font-weight: 700;
    padding-bottom: 0.5rem;
`

export const ReviewDescription = styled.div`
    font-size: 14px;
    height: 50px;
    text-align: left;
    justify-self: flex-start;
`
export const ReviewActions = styled.div`
    width: 95%;
    display: flex;
    align-items: center;
    background: #919191;
    color: white;
    border-radius: 5rem;
    font-size: 14px;
    font-weight: 300;

    div {
        :hover {
            background: white;
            border: 1px solid #EBEBEB;
            color: #EBEBEB;
        }
    }
`
export const LikesSection = styled.div`
    display: flex;
    align-items: center;
    border-right: 1px white solid;
    padding: 0.1rem;
    width: 50%;
    height: 33px;
    padding: 0 1rem;
    gap: 0 1rem;
    cursor: pointer;
    :hover {
            border-top-left-radius: 1rem;
            border-bottom-left-radius: 1rem;
        }
`
export const CommentsSection = styled.div`
    display: flex;
    align-items: center;
    border-left: 1px white solid;
    padding: 0 1rem;
    width: 50%;
    height: 33px;
    cursor: pointer;
    :hover {
            border-top-right-radius: 1rem;
            border-bottom-right-radius: 1rem;
        }
`
export const LatestCommentSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    padding: 1rem;

    span {
        font-size: 20px;
    }
`

export const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 14px; 
`
export const CommentAuthor = styled.div`
    color: #E47D31;
    padding-bottom: 0.3rem;
`