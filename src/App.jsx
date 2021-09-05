import React, { useState } from 'react';
import Header from './components/header';
import Play from './components/play';
import Game from './components/game';
import Footer from './components/footer';
import { Switch, Route } from 'react-router-dom';

export const App = (props) => {
  const [myChoice, setMyChoice] = useState('');
  const [score, setScore] = useState(0);

  return (
    <>
      <div className='container'>
        <Header score={score} />
        <Switch>
          <Route exact path='/'>
            <Play setMyChoice={setMyChoice} />
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
