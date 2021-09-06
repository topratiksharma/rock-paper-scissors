import React, { useEffect, useState } from 'react';
import Player from './player';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import ResultComponent from './result';
import Computer from './computer';
import get from 'lodash/get';

const GAME_COMBINATION = {
  rock: ['scissors'],
  scissors: ['paper'],
  paper: ['rock'],
};

type Props = {
  score: number;
  myChoice: string;
  setScore: (s: number) => void;
};

const Game: React.FC<Props> = ({ score, myChoice, setScore }) => {
  const [computer, setComputer] = useState('');
  const [playerWin, setPlayerWin] = useState('');
  const choices = ['rock', 'paper', 'scissors'];
  const userType = queryString.parse(useLocation().search);

  const isVsComputer = userType?.type === 'comp';

  const [counter, setCounter] = useState(3);

  const newComputerPick = () => {
    setComputer(choices[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    newComputerPick();
  }, []);

  const result = () => {
    if (!myChoice || !computer) return;

    if (myChoice === computer) {
      return setPlayerWin('draw');
    }
    const values = get(GAME_COMBINATION, [myChoice]);

    if (values.includes(computer)) {
      setPlayerWin('win');
      setScore(score + 1);
    } else {
      setPlayerWin('lose');
      setScore(score - 1);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (counter > 0) {
      timer = setInterval(() => {
        setCounter(counter - 1);
      }, 1000);
    } else {
      result();
    }
    return () => {
      clearInterval(timer);
    };
  }, [counter, computer]);

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
          setComputer={setComputer}
          result={playerWin}
          player={isVsComputer ? 'Computer 1' : 'You'}
        />
      )}

      <Computer
        option={computer}
        result={playerWin}
        label={isVsComputer ? 'Computer 2' : 'Computer'}
        type="computer"
        counter={counter}
      />
    </div>
  );
};

export default Game;
