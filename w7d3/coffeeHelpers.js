const forumPost = {
  authorId: "5", // Author ID between 1 and 6
  id: "3", // Unique post ID
  title: "Coffee Recommendations",
  question:
    "I'm a coffee enthusiast, and I'm always looking for new coffee experiences. Can you recommend any unique coffee shops or hidden gems in our city? I appreciate your suggestions!",
  likes: 0, // Always 0 likes
  replies: [
    {
      id: "1", // Unique reply ID
      authorId: "2", // Author ID between 1 and 6
      content:
        "You should check out Brew Haven on 5th Avenue. They have a great selection of artisanal coffees!",
      likes: 0, // Always 0 likes
    },
    {
      id: "2", // Unique reply ID
      authorId: "4", // Author ID between 1 and 6
      content:
        "Cafe L'Amour in the old town district is a cozy spot with a unique atmosphere. You'll love it!",
      likes: 0, // Always 0 likes
    },
  ],
};

// Add a reply
const addReply = (content, authorId) => {
  const newReply = {
    id: forumPost.replies.length + 1,
    likes: 0,
    content,
    authorId,
  };

  const updatedForumPost = { ...forumPost };

  const updatedReplies = [...forumPost.replies, newReply];

  updatedForumPost.replies = updatedReplies;

  return updatedForumPost;
};

// console.log(forumPost, addReply("WAGGAGAGAGGAGAGAGA", 1));
// Update the likes

const updateLikes = (forumPost, replyId, isUpvote) => {
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

console.log(updateLikes(forumPost, "1", true))