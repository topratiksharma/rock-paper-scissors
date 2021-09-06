import React from 'react';

type Props = {
  option: string;
  result: string;
  label: string;
  type: string;
};

const Player: React.FC<Props> = ({ option, result, label, type }) => {
  const iconClass = `icon icon--${option} ${
    result === 'win' ? `icon--${option}--winner` : ''
  }`;
  const parentClass = 'game__' + type;
  let iconType = <div className={iconClass}></div>;
  return (
    <div className={parentClass}>
      <span className="text">{label} Picked</span>
      {iconType}
    </div>
  );
};

export default Player;
