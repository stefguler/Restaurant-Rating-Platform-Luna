import { CommentContainer, CommentAuthor, CommentContent } from './CommentCard.styled'

export default function CommentCard(props) {

  const comment = props.comment;

  return (
    <>

      <CommentContainer>
        <CommentAuthor>{comment.user}</CommentAuthor>
        <CommentContent>
          <div>{comment.content}</div>
          <div>{comment.created}</div>
        </CommentContent>
      </CommentContainer>
    </>
  )
}