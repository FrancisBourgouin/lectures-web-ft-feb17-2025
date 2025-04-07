import useFormData from "../hooks/useFormData";

export default function QuestionForm(props) {
  const {question, onSubmit} = props

  const initialFormData = { answer: "" };
  const [formData, handleChange, handleSubmit] = useFormData(
    initialFormData,
    onSubmit
  );

  return (
    <form className="QuestionForm" onSubmit={handleSubmit}>
      <p>{question}</p>
      <input
        type="text"
        name="answer"
        placeholder="Enter your answer"
        onChange={handleChange}
        value={formData.answer}
      />
      <button>Answer!</button>
    </form>
  );
}
