import { Link } from 'react-router-dom';

const ResultComponent = ({ setComputer, result, player }) => {
  let label = result === 'win' ? player + ' Win' : player + ' Lose';
  if (result === 'draw') {
    label = 'Match Draw';
  }
  return (
    <div className="game__play">
      <span className="text">{label}</span>
      <Link to="/" className="play-again" onClick={() => setComputer()}>
        Play Again
      </Link>
    </div>
  );
};

export default ResultComponent;
