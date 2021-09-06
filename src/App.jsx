import React, { useState } from 'react';
import Header from './components/common/header';
import Playground from './components/playground/playground';
import Game from './components/game/game';
import Footer from './components/common/footer';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/home/home';

export const App = (props) => {
  const [myChoice, setMyChoice] = useState('');
  const [score, setScore] = useState(0);
  const choices = ['paper', 'scissors', 'rock'];
  return (
    <>
      <div className='container'>
        <Header score={score} />
        <Switch>
          <Route exact path='/'>
            <HomePage />
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
