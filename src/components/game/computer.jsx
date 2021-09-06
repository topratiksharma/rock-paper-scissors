const Computer = ({ optionSelected, result, label, type, counter }) => {
  const iconClass = `icon icon--${optionSelected} ${result === 'lose' ? `icon--${optionSelected}--winner` : ''}`;
  const parentClass = 'game__' + type;
  let iconType;

  if (counter === 0) {
    iconType = <div className={iconClass}></div>;
  } else {
    iconType = <div className='counter'>{counter}</div>;
  }

  return (
    <div className={parentClass}>
      <span className='text'>{label} Picked</span>
      {iconType}
    </div>
  );
};

export default Computer;
