export default function Game(props) {
  const { board, turn, winner, updateTile } = props;

  const parsedTiles = board.map((value, index) => (
    <button key={index} onClick={() => updateTile(index)}>
      {value}
    </button>
  ));
  return (
    <section className="Game">
      <h1>It's {turn} turn to play</h1>
      <div>{parsedTiles}</div>
    </section>
  );
}
