import React from 'react';

type Props = {
  option: string;
  result: string;
  label: string;
  type: string;
  counter: number;
};

const Computer: React.FC<Props> = ({
  option,
  result,
  label,
  type,
  counter
}) => {
  const iconClass = `icon icon--${option} ${result === 'lose' ? `icon--${option}--winner` : ''}`;
  const parentClass = 'game__' + type;
  let iconType;

  if (counter === 0) {
    iconType = <div className={iconClass}></div>;
  } else {
    iconType = <div className="counter">{counter}</div>;
  }

  return (
    <div className={parentClass}>
      <span className="text">{label} Picked</span>
      {iconType}
    </div>
  );
};

export default Computer;
