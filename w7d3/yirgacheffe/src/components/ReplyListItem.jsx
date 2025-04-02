export default function ReplyListItem(props) {
  const { user, content, id, likes, updateLikeOfReply } = props;

  const upvote = () => updateLikeOfReply(id, true);
  const downvote = () => updateLikeOfReply(id, false);

  return (
    <article className="ReplyListItem">
      <img src={user.profile_url} alt="" />
      <p className="name">{user.name}</p>
      <p className="content">{content}</p>
      <div>
        <button onClick={downvote}>-</button>
        <span>{likes}</span>
        <button onClick={upvote}>+</button>
      </div>
    </article>
  );
}
