import Header from "./components/Header";
import CurrentScore from "./components/CurrentScore";
import NewQuestionForm from "./components/NewQuestionForm";
import QuestionForm from "./components/QuestionForm";

import { questions } from "./data/questionData";

import "./App.css";
import useMode from "./hooks/useMode";
import useQuizData from "./hooks/useQuizData";

function App() {
  const initialQuizData = {
    currentQuestionIndex: 0,
    correctAnswers: 0,
    totalAnswers: 0,
    questions: questions, // YAY!
  };

  const [question, score, updateScore, addQuestion] = useQuizData(initialQuizData)

  const [mode, toggleMode] = useMode("QUIZ");

  return (
    <>
      <Header mode={mode} toggleMode={toggleMode} />
      {mode === "QUIZ" && (
        <>
          <CurrentScore score={score}/>
          <QuestionForm question={question} onSubmit={formData => updateScore(formData.answer)}/>
        </>
      )}
      {mode === "ADD" && <NewQuestionForm onSubmit={addQuestion}/>}
    </>
  );
}

export default App;
