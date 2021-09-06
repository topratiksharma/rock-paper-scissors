import React from 'react';
import PlayerOption from './playerOption';

type Props = {
  setMyChoice: (choice: string) => void;
};

const HomePage: React.FC<Props> = ({ setMyChoice }) => {
  const setChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    setMyChoice(choices[Math.floor(Math.random() * 3)]);
  };

  return (
    <div className="home">
      <PlayerOption
        label="Player vs Computer"
        redirectTo="/play"
        linkStyling="icon icon--player"
      />
      <PlayerOption
        label="Computer vs Computer"
        redirectTo="/game?type=comp"
        linkStyling="icon icon--computer"
        setChoice={setChoice}
      />
    </div>
  );
};

export default HomePage;
