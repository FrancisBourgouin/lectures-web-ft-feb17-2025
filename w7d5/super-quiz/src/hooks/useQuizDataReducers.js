import { useReducer, useState } from "react";
import useWow from "./useWow";

// const quizData = {
//   currentQuestionIndex: 0,
//   correctAnswers: 0,
//   totalAnswers: 0,
//   questions: questions, // YAY!
// };

export default function useQuizData(initialQuizData) {
  const { sayWow } = useWow();

  // validate an answer
  // update score values

  const updateScore = (quizData, userAnswer) => {
    const isCorrectAnswer = quizData.questions[quizData.currentQuestionIndex].answer === userAnswer;

    const updatedQuizData = { ...quizData };

    if (isCorrectAnswer) {
      updatedQuizData.correctAnswers++;
      sayWow();
    }

    updatedQuizData.totalAnswers++;

    updatedQuizData.currentQuestionIndex = Math.floor(Math.random() * quizData.questions.length);

    return updatedQuizData;
  };

  // update the questions array

  const addQuestion = (quizData, questionData) => {
    const newId = String(questions.length + 1);

    const newQuestion = { ...questionData, id: newId };

    const updatedQuestions = [...quizData.questions, newQuestion];

    const updatedQuizData = { ...quizData, questions: updatedQuestions };

    return updatedQuizData;
  };

  const quizReducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_SCORE":
        return updateScore(state, action.payload);
      case "ADD_QUESTION":
        return addQuestion(state, action.payload);
    }
  };

  const [quizData, dispatch] = useReducer(quizReducer, initialQuizData);
  const { currentQuestionIndex, questions, correctAnswers, totalAnswers } = quizData;

  const score = totalAnswers
    ? Math.round((correctAnswers / totalAnswers) * 100) + "%"
    : "ANSWER A QUESTION!";
  const question = questions[currentQuestionIndex].question;

  return [question, score, dispatch];
}

// dispatch({type:"ADD_QUESTION", payload:formData})
// 0/1 => 0
// 1/0 => Infinity

// 0/0 => NaN

// actions.update
// actions.add
