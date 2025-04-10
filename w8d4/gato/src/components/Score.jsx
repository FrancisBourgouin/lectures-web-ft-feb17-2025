export default function Score(props) {
  const { game, restartMatch, users } = props;
  return (
    <section className="Score">
      <h1>{game.turn} WON!</h1>
      <p>Player1: {users.player1.wins} wins</p>
      <p>Player2: {users.player2.wins} wins</p>
      <button onClick={restartMatch}>Start again!</button>
    </section>
  );
}
