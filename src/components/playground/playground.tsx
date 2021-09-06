import React from 'react';
import Triangle from '../../images/bg-triangle.svg';
import Choice from './choice';

type Props = {
  setMyChoice: (choice: string) => void;
  choices: string[];
};

const Playground: React.FC<Props> = ({ setMyChoice, choices }) => {
  const setChoice = (e: any) => {
    setMyChoice(e.target.dataset.id);
  };

  return (
    <div className="play">
      <img src={Triangle} alt="" className="triangle" />
      <div className="items">
        {choices.map((choice) => (
          <Choice type={choice} setChoice={setChoice} key={choice} />
        ))}
      </div>
    </div>
  );
};

export default Playground;
