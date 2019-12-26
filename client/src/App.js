import React, {Component} from 'react';

import './App.css';
import Home from './components/shared/Home';
import NoMatch from './components/shared/NoMatch';
import { Route, Switch } from 'react-router-dom';
import Planets from './components/displays/Planets';
import Bio from './components/me/Bio';
import Skills from './components/me/Skills';
import Work from './components/me/Work';

class App extends Component {
  render() {
    return (
      <div ClassName="mainPage">
        <div>
      <Planets/>
      </div>
      <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/bio' component={Bio} />
        <Route exact path='/work' component={Work} />
        <Route exact path='/skills' component={Skills} />
        
        <Route component={NoMatch} />
      </Switch>
      </div>
      </div>
    )
  }
}

export default App;
