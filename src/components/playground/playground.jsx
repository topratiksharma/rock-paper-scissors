import React from 'react';
import Triangle from '../../images/bg-triangle.svg';
import Choice from './choice';

const Playground = ({ setMyChoice, choices }) => {
  const setChoice = (e) => {
    setMyChoice(e.target.dataset.id);
  };

  return (
    <div className='play'>
      <img src={Triangle} alt='' className='triangle' />
      <div className='items'>
        {choices.map((choice) => (
          <Choice type={choice} setChoice={setChoice} key={choice} />
        ))}
      </div>
    </div>
  );
};

export default Playground;
