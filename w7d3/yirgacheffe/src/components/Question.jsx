import ReplyForm from "./ReplyForm";
import ReplyList from "./ReplyList";

export default function Question(props){
  const {question, users, addReplyToQuestion, updateLikeOfReply} = props

  return(
    <section className="Question">
      <header>
        <h1>{question.question}</h1>
        <p>
          <img src={users[question.authorId].profile_url} alt="" />
          <span>{users[question.authorId].name}</span>
        </p>
      </header>
      <ReplyList replies={question.replies} users={users} updateLikeOfReply={updateLikeOfReply}/>
      <ReplyForm onSubmit={addReplyToQuestion}/>    
    </section>
  )
}