import useFormData from "../hooks/useFormData";

export default function CityForm(props) {
  const { onSubmit } = props;
  const initialFormData = { city: "" };

  const [formData, handleChange, handleSubmit] = useFormData(initialFormData, onSubmit);

  return (
    <form className="CityForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="city"
        placeholder="Enter the city name"
        onChange={handleChange}
        value={formData.city}
      />
      <button>Fetch weather!</button>
    </form>
  );
}
