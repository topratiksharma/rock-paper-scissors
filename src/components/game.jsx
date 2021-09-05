import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Game = ({ score, myChoice, setScore }) => {
  const [house, setHouse] = useState('');
  const [playerWin, setPlayerWin] = useState('');

  const GAME_COMBINATION = {
    rock: ['scissors'],
    scissors: ['paper'],
    paper: ['rock'],
  };

  const newHousePick = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const houseChoice = choices[Math.floor(Math.random() * 3)];
    setHouse(houseChoice);
  };

  useEffect(() => {
    newHousePick();
  }, []);

  const result = () => {
    if (!myChoice || !house) return;
    if (myChoice === house) {
      return setPlayerWin('draw');
    }
    if (GAME_COMBINATION[myChoice].includes(house)) {
      setPlayerWin('win');
      setScore(score + 1);
    } else {
      setPlayerWin('lose');
      setScore(score - 1);
    }
  };

  useEffect(() => {
    result();
  }, [house]);

  return (
    <div className='game'>
      My Choice : {myChoice}
      <br />
      House Choice:{house}
      <br />
      Result:{playerWin}
      <br />
      <Link to='/' onClick={() => setHouse()}>
        Play Again
      </Link>
    </div>
  );
};

export default Game;
