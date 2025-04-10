import useFormData from "../hooks/useFormData"

export default function GameForm(props){
  const initialValues = {player1:"", player2:""}

  const [formData, handleChange, handleSubmit] = useFormData(initialValues, props.onSubmit)

  return(
    <form className="GameForm" onSubmit={handleSubmit}>
      <input type="text" name="player1" placeholder="Enter the first player name" onChange={handleChange} value={formData.player1}/>
      <input type="text" name="player2" placeholder="Enter the second player name" onChange={handleChange} value={formData.player2}/>
      <button>Start the game!</button>
    </form>
  )
}