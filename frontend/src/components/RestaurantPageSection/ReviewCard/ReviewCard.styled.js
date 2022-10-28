import styled from "styled-components";


export const ReviewCardContainer = styled.div`
display: flex;
background: white;
box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 20px 40px rgba(0, 0, 0, 0.15);
border-radius: 0.2rem;
flex-direction: column;
max-height: 410px;
width: 100%;
margin: 0 auto;
`;

export const HeaderSection = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    border-bottom: #EBEBEB 1px solid;
    align-items: center;
`

export const UserSection = styled.div`
    display: flex;
    align-items: center;
`

export const UserSectionText = styled.div`
    display: flex;
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
export const ReviewDate = styled.span`
    padding: 0.5rem 1rem;
    font-size: 16px;
    width: 14rem;
    text-align: end;
`

export const ReviewSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem 1rem;
`

export const ReviewDescription = styled.div`
    display: flex;
    font-size: 16px;
    align-self: flex-start;
    padding-left: 1rem;
`

export const ReviewActions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;

  .Collapsible {
    text-align: end;

    div {
        text-align: start;
    }
}

  .Collapsible__trigger {
    color: #E47D31;
  }

  .Collapsible__contentInner {
    margin-top: 1rem;
  }

`
export const ReviewsActionSectionOne = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    background: #919191;
    color: white;
    border-radius: 5rem;
    font-size: 14px;
    font-weight: 300;
    align-self: flex-start;
    margin-left: 1rem;
`

export const ReviewsActionSectionTwo = styled.span`
    color: #E47D31;
    font-size: 16px;
    padding: 0 0.1rem;
    vertical-align: middle;
    display: inline-flex;
    align-items: center;
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
    :hover{
        background: white;
        color: #D8D8D8;
        border: 1px #D8D8D8 solid;
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
export const PostSection = styled.div`
  display: flex;
  width: 100%;
  height: 31px;
  margin-bottom: 1rem;
  gap: 1rem;

  input {
    width: 80%;
    border-color: #EBEBEB;
  }

  button {
    width: 120px;
    height: 100%;
    border: none;
    background: #E47D31;
    border-radius: 1rem;
    font-size: 16px;
    color: white;
    text-transform: uppercase;

    cursor: pointer;
    :hover {
      background: white;
      border: 1px solid #E47D31;
      color: black;
    }

  }`

export const PostInput = styled.input`
    padding: 0.5rem;
  `