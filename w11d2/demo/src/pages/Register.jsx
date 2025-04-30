import { useState } from "react";

export default function Login(props) {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(formData);

    setFormData({ email: "", password: "" });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <h1>LOG ME INNNNN</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={handleChange}
          value={formData.password}
        />
        <button>Log in!</button>
      </form>
    </>
  );
}
