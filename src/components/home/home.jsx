import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='home'>
      <div className='home__option'>
        <span className='text'>Player vs Computer</span>
        <Link className={`icon icon--player`} to='/play'></Link>
      </div>
      <div className='home__option'>
        <span className='text'>Computer vs Computer</span>
        <Link className={`icon icon--computer`} to='/game'></Link>
      </div>
    </div>
  );
};

export default HomePage;
