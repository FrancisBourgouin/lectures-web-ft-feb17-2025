export default function Header(props){
  const {mode, toggleMode} = props

  return(
    <header className="Header">
      <h1>Super Quiz of Destiny!</h1>
      <button onClick={toggleMode}>Current in {mode} mode, click to change</button>
    </header>
  )
}