import ReplyListItem from "./ReplyListItem";

export default function ReplyList(props) {
  const { replies, users, updateLikeOfReply } = props;

  const parsedReplies = replies.map((reply) => (
    <ReplyListItem
      key={reply.id}
      {...reply}
      user={users[reply.authorId]}
      updateLikeOfReply={updateLikeOfReply}
    />
  ));

  return <section className="ReplyList">{parsedReplies}</section>;
}
