import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  setComputer: any;
  result: string;
  player: string;
};

const ResultComponent: React.FC<Props> = ({ setComputer, result, player }) => {
  let label = result === 'win' ? player + ' Win' : player + ' Lose';
  if (result === 'draw') {
    label = 'Match Draw';
  }
  return (
    <div className="game__play">
      <span className="text">{label}</span>
      <Link to="/" className="play-again" onClick={setComputer}>
        Play Again
      </Link>
    </div>
  );
};

export default ResultComponent;
