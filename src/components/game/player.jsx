const Player = ({ option, result, label, type, counter }) => {
  const iconClass = `icon icon--${option} ${result === 'win' ? `icon--${option}--winner` : ''}`;
  const parentClass = 'game__' + type;
  let iconType;
  if (type === 'computer') {
    if (counter === 0) {
      iconType = <div className={iconClass}></div>;
    } else {
      iconType = <div className='counter'>{counter}</div>;
    }
  } else {
    iconType = <div className={iconClass}></div>;
  }
  return (
    <div className={parentClass}>
      <span className='text'>{label} Picked</span>
      {iconType}
    </div>
  );
};

export default Player;
