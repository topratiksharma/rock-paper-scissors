import React, { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  setChoice: MouseEventHandler<HTMLDivElement>;
  type: string;
};

const Choice: React.FC<Props> = ({ setChoice, type }) => {
  const className = 'icon icon--' + type;
  return (
    <Link to="/game">
      <div data-id={type} onClick={setChoice} className={className}></div>
    </Link>
  );
};

export default Choice;
