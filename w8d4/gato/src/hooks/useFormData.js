import { useState } from "react";

export default function useFormData(initialFormData, onSubmit) {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { value, name } = event.target;

    
      setFormData({ ...formData, [name]: value });
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(formData);

    setFormData(initialFormData);
  };

  return [formData, handleChange, handleSubmit];
}