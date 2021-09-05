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
      <div className='game__you'>
        <span className='text'>You Picked</span>
        <div className={`icon icon--${myChoice} ${playerWin === 'win' ? `icon icon--${myChoice}--winner` : ''}`}></div>
      </div>
      {playerWin === 'win' && (
        <div className='game__play'>
          <span className='text'>You Win</span>
          <Link to='/' className='play-again' onClick={() => setHouse()}>
            Play Again
          </Link>
        </div>
      )}
      {playerWin === 'lose' && (
        <div className='game__play'>
          <span className='text'>You Lose</span>
          <Link to='/' className='play-again' onClick={() => setHouse()}>
            Play Again
          </Link>
        </div>
      )}
      {playerWin === 'draw' && (
        <div className='game__play'>
          <span className='text'>Draw</span>
          <Link to='/' className='play-again' onClick={() => setHouse()}>
            Play Again
          </Link>
        </div>
      )}

      <div className='game__house'>
        <span className='text'>The House Picked</span>
        {counter === 0 ? <div className={`icon icon--${house} ${playerWin === 'lose' ? `icon icon--${house}--winner` : ''}`}></div> : <div className='counter'>{counter}</div>}
      </div>
    </div>
  );
};

export default Game;
