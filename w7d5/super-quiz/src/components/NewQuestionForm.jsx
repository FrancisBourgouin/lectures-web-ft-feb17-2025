import { useState } from "react";
import useFormData from "../hooks/useFormData";

export default function NewQuestionForm(props) {
  // const [question, setQuestion] = useState("")
  // const [answer, setAnswer] = useState("")

  const initialFormData = { question: "", answer: "" };
  const [formData, handleChange, handleSubmit] = useFormData(
    initialFormData,
    props.onSubmit
  );

  return (
    <form className="NewQuestionForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="question"
        placeholder="Enter your question"
        onChange={handleChange}
        value={formData.question}
      />
      <input
        type="text"
        name="answer"
        placeholder="Enter your answer"
        onChange={handleChange}
        value={formData.name}
      />
      <button>Add question!</button>
    </form>
  );
}
