export const updateLikes = (forumPost, replyId, isUpvote) => {
  // Create a shallow copy of forumPost & replies
  const updatedForumPost = { ...forumPost };
  const updatedReplies = [...forumPost.replies];

  // Find the index of the reply to change
  const replyIndex = updatedReplies.findIndex((reply) => reply.id === replyId);

  // Create a shallow copy of the reply
  const updatedReply = { ...updatedReplies[replyIndex] };

  // Apply modifications to the copy of the reply
  updatedReply.likes += isUpvote ? 1 : -1;

  // Overwrite the old reply with the updated reply
  updatedReplies[replyIndex] = updatedReply;

  // Overwrite replies with updated replies
  updatedForumPost.replies = updatedReplies;

  return updatedForumPost;
};

// Add a reply
export const addReply = (forumPost, content, authorId) => {
  const newReply = {
    id: String(forumPost.replies.length + 1),
    likes: 0,
    content,
    authorId,
  };

  const updatedForumPost = { ...forumPost };

  const updatedReplies = [...forumPost.replies, newReply];

  updatedForumPost.replies = updatedReplies;

  return updatedForumPost;
};