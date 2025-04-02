import { useState } from "react";

import { forumPost } from "./data/postData";
import { usersObj } from "./data/userData";

import Header from "./components/Header";
import Question from "./components/Question";

import "./App.css";
import { addReply, updateLikes } from "./helpers/questionHelpers";

function App() {
  const [question, setQuestion] = useState(forumPost);
  const [users, setUsers] = useState(usersObj);

  const addReplyToQuestion = (content) => {
    const authorId = String(Math.floor(Math.random() * 6) + 1);

    const updatedQuestion = addReply(question, content, authorId);

    setQuestion(updatedQuestion);
  };

  const updateLikeOfReply = (replyId, isUpvote) => {
    const updatedQuestion = updateLikes(question, replyId, isUpvote);

    setQuestion(updatedQuestion);
  };

  return (
    <>
      <Header />
      <Question
        question={question}
        users={users}
        addReplyToQuestion={addReplyToQuestion}
        updateLikeOfReply={updateLikeOfReply}
      />
    </>
  );
}

export default App;
