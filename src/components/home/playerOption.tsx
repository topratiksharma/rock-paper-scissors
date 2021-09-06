import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  setChoice?: MouseEventHandler<HTMLAnchorElement>;
  label: string;
  redirectTo: string;
  linkStyling: string;
};

const PlayerOption: React.FC<Props> = ({
  setChoice,
  label,
  redirectTo,
  linkStyling,
}) => {
  return (
    <div className="home__option">
      <span className="text">{label}</span>
      <Link className={linkStyling} to={redirectTo} onClick={setChoice}></Link>
    </div>
  );
};

export default PlayerOption;
