import { Link } from 'react-router-dom';

const PlayerOption = ({ setChoice, label, redirectTo, linkStyling }) => {
  return (
    <div className="home__option">
      <span className="text">{label}</span>
      <Link className={linkStyling} to={redirectTo} onClick={setChoice}></Link>
    </div>
  );
};

export default PlayerOption;
