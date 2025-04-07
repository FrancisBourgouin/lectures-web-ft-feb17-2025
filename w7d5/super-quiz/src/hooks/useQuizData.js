import { useState } from "react";
import useWow from "./useWow";

// const quizData = {
//   currentQuestionIndex: 0,
//   correctAnswers: 0,
//   totalAnswers: 0,
//   questions: questions, // YAY!
// };

export default function useQuizData(initialQuizData) {
  const [quizData, setQuizData] = useState(initialQuizData);
  const { sayWow } = useWow();

  const { currentQuestionIndex, questions, correctAnswers, totalAnswers } = quizData;

  // validate an answer
  // update score values

  const updateScore = (userAnswer) => {
    const isCorrectAnswer = questions[currentQuestionIndex].answer === userAnswer;

    const updatedQuizData = { ...quizData };

    if (isCorrectAnswer) {
      updatedQuizData.correctAnswers++;
      sayWow();
    }

    updatedQuizData.totalAnswers++;

    updatedQuizData.currentQuestionIndex = Math.floor(Math.random() * questions.length);

    setQuizData(updatedQuizData);
  };

  // update the questions array

  const addQuestion = (questionData) => {
    const newId = String(questions.length + 1);

    const newQuestion = { ...questionData, id: newId };

    const updatedQuestions = [...questions, newQuestion];

    const updatedQuizData = { ...quizData, questions: updatedQuestions };

    setQuizData(updatedQuizData);

    // setQuizData({
    //   ...quizData,
    //   questions: [...questions, { ...questionData, id: newId }],
    // }); // HARDER TO MAINTAIN
  };

  const score = totalAnswers
    ? Math.round((correctAnswers / totalAnswers) * 100) + "%"
    : "ANSWER A QUESTION!";
  const question = questions[currentQuestionIndex].question;

  return [question, score, updateScore, addQuestion];
}

// 0/1 => 0
// 1/0 => Infinity

// 0/0 => NaN
