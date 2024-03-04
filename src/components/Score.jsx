const Score = ({score}) => {
  return (
    <div className="scoreNumber">
      <div id="playerScore">
        <h1>{score}</h1>
        <h3>Total Score</h3>
      </div>
    </div>
  );
};

export default Score;
