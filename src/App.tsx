// System Imports
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

// Dev Imports
import Footer from './components/common/footer';
import Header from './components/common/header';
import Game from './components/game/game';
import HomePage from './components/home/home';
import Playground from './components/playground/playground';


export const App: React.FC = () => {
  const [myChoice, setMyChoice] = useState('');
  const [score, setScore] = useState(0);
  const choices = ['paper', 'scissors', 'rock'];
  
  return (
    <>
      <div className='container'>
        <Header score={score} />
        <Switch>
          <Route exact path='/'>
            <HomePage setMyChoice={setMyChoice} />
          </Route>
          <Route exact path='/play'>
            <Playground setMyChoice={setMyChoice} choices={choices} />
          </Route>
          <Route path='/game'>
            <Game myChoice={myChoice} score={score} setScore={setScore} />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default App;
