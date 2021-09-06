import { Link } from 'react-router-dom';

const Choice = ({ setChoice, type }) => {
  const className = 'icon icon--' + type;
  return (
    <Link to="/game">
      <div data-id={type} onClick={setChoice} className={className}></div>
    </Link>
  );
};

export default Choice;
