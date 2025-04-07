export default function CurrentScore(props) {
  const { score } = props;
  return (
    <section>
      <h1>{score}</h1>
      {/* <h2>Total Answered: ...</h2> */}
    </section>
  );
}
