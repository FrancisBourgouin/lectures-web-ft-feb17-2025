import { useReducer, useState } from "react";

import { forumPost } from "./data/postData";
import { usersObj } from "./data/userData";

import Header from "./components/Header";
import Question from "./components/Question";

import "./App.css";
import { addReply, updateLikes } from "./helpers/questionHelpers";

// question: our current state
// action: {type:"", payload:""}

const questionReducer = (question, action) => {
  switch (action.type) {
    case "ADD_REPLY":
      const authorId = String(Math.floor(Math.random() * 6) + 1);
      return addReply(question, action.payload, authorId);

    case "UPVOTE_REPLY":
      return updateLikes(question, action.payload, true);

    case "DOWNVOTE_REPLY":
      return updateLikes(question, action.payload, false);
    default:
      throw new Error("DUDE WTH USE ONE OF THE TYPES YOU DUM DUM");
  }
};

// questionReducer(question, {type:"ADD_REPLY", payload:"SUPER MESSAGE"})

function App() {
  // const [question, setQuestion] = useState(forumPost);

  const [question, dispatch] = useReducer(questionReducer, forumPost);
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
      <Question question={question} users={users} dispatch={dispatch} />

      {/* dispatch({type:"ADD_REPLY", payload:"SUPER MESSAGE"}) */}
      {/* dispatch({type:"UPVOTE_REPLY", payload:"2"}) */}
    </>
  );
}

export default App;
