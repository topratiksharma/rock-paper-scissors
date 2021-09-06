import React, { useEffect, useState } from 'react';
import Player from './player';
import ResultComponent from './result';
import Computer from './computer';

const Game = ({ score, myChoice, setScore }) => {
  const [house, setHouse] = useState('');
  const [playerWin, setPlayerWin] = useState('');

  const GAME_COMBINATION = {
    rock: ['scissors'],
    scissors: ['paper'],
    paper: ['rock'],
  };

  const [counter, setCounter] = useState(3);

  const newHousePick = () => {
    const choices = ['rock', 'paper', 'scissors'];
    setHouse(choices[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    newHousePick();
  }, []);

  const Result = () => {
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
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1);
          }, 1000)
        : Result();

    return () => {
      clearInterval(timer);
    };
  }, [counter, house]);

  return (
    <div className='game'>
      <Player optionSelected={myChoice} result={playerWin} label='You' type='you' />
      {playerWin && <ResultComponent setHouse={setHouse} result={playerWin} player='You' />}
      <Computer optionSelected={house} result={playerWin} label='Computer' type='computer' counter={counter} />
    </div>
  );
};

export default Game;
