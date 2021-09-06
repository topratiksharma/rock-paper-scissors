import React, { useEffect, useState } from 'react';
import Player from './player';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import ResultComponent from './result';
import Computer from './computer';

const Game = ({ score, myChoice, setScore }) => {
  const [house, setHouse] = useState('');
  const [playerWin, setPlayerWin] = useState('');
  const choices = ['rock', 'paper', 'scissors'];
  const userType = queryString.parse(useLocation().search);

  const isVsComputer = userType?.type === 'comp';

  const GAME_COMBINATION = {
    rock: ['scissors'],
    scissors: ['paper'],
    paper: ['rock'],
  };

  const [counter, setCounter] = useState(3);

  const newHousePick = () => {
    setHouse(choices[Math.floor(Math.random() * 3)]);
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
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1);
          }, 1000)
        : result();

    return () => {
      clearInterval(timer);
    };
  }, [counter, house]);

  return (
    <div className="game">
      {isVsComputer ? (
        <Computer
          option={myChoice}
          result={playerWin === 'win' ? 'lose' : 'win'}
          label="Computer 1"
          type="computer"
          counter={counter}
        />
      ) : (
        <Player option={myChoice} result={playerWin} label="You" type="you" />
      )}

      {playerWin && (
        <ResultComponent
          setHouse={setHouse}
          result={playerWin}
          player={isVsComputer ? 'Computer 1' : 'You'}
        />
      )}

      <Computer
        option={house}
        result={playerWin}
        label={isVsComputer ? 'Computer 2' : 'Computer'}
        type="computer"
        counter={counter}
      />
    </div>
  );
};

export default Game;
