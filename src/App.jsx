import Header from './components/header';
import Play from './components/play';
import Footer from './components/footer';
import Modal from './components/modal';
import Game from './components/game';
import { Route, Switch } from 'react-router-dom';
import React from 'react';

export const App = (props) => {
  const [myChoice, setMyChoice] = React.useState('');
  const [score, setScore] = React.useState(0);

  return (
    <h1>
      <div className='container'>
        <Header score={score}></Header>
        <Switch>
          <Route exact path='/'>
            <Play setMyChoice={setMyChoice} />
          </Route>
          <Route exact path='/game'>
            <Game myChoice={myChoice} score={score} setScore={setScore} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </h1>
  );
};

export default App;
