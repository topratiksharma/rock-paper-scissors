import React from 'react';
import { Link } from 'react-router-dom';

const Play = ({ setMyChoice }) => {
  const setChoice = ({ target }) => {
    setMyChoice(target.dataset.id);
  };

  return (
    <div className='play'>
      <Link to='/game'>
        <div data-id='paper' className='icon icon--paper' onClick={setChoice}>
          Paper
        </div>
      </Link>
      <Link to='/game'>
        <div data-id='scissors' className='icon icon--paper' onClick={setChoice}>
          Scissors
        </div>
      </Link>
      <Link to='/game'>
        <div data-id='rock' className='icon icon--paper' onClick={setChoice}>
          Rock
        </div>
      </Link>
    </div>
  );
};

export default Play;
