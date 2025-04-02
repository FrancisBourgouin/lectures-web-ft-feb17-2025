import { useState } from "react";

export default function ReplyForm(props) {
  const { onSubmit } = props;

  const [reply, setReply] = useState("")

  const handleChange = event => setReply(event.target.value)

  const handleSubmit = event => {
    event.preventDefault()

    onSubmit(reply)

    setReply("")
  }

  return (
    <form className="ReplyForm" onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your reply" value={reply} onChange={handleChange}/>
      <button>Add reply</button>
    </form>
  );
}
