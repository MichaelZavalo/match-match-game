import React from 'react';
import '../src/App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import Welcome from './components/pages/Welcome-pg/Welcome';
import Game from './components/pages/Game-pg/Game';
import Records from './components/pages/Records-pg/Records';
import Profile from './components/pages/Profile-pg/Profile';
import Congratulations from './components/pages/Congratulations-pg/Congratulations';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/welcome' component={Welcome}/>
        <Route path='/game' component={Game}/>
        <Route path='/records' component={Records}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/congratulations' component={Congratulations}/>
        <Route exact path='/'>
          <Redirect to='/welcome'/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
