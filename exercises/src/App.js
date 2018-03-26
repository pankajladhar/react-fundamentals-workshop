import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import JSX from './mycode/jsx';
import FunctionalComponent from './mycode/FunctionalComponent';
import ClassComponent from './mycode/ClassComponent';
import State from './mycode/state';
import Props from './mycode/props';
import Children from './mycode/children'

import Events from './mycode/events'
import LifeCycleMethods from './mycode/life-cycle-methods'



class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <aside className="sidebar">
            <ul>
              <li><Link to='/'>JSX</Link></li>
              <li><Link to='/FunctionalComponent'>Functional Component</Link></li>
              <li><Link to='/ClassComponent'>Class Component</Link></li>
              <li><Link to='/state'>State</Link></li>
              <li><Link to='/props'>Props</Link></li>
              <li><Link to='/children'>Children</Link></li>
              <li><Link to='/events'>Events</Link></li>
              <li><Link to='/life-cycle-methods'>LifeCycleMethods</Link></li>
            </ul>
          </aside>
          <div className="content">
            <Route exact path='/' component={JSX} />
            <Route path='/FunctionalComponent' component={FunctionalComponent} />
            <Route path='/ClassComponent' component={ClassComponent} />
            <Route path='/state' component={State} />
            <Route path='/props' component={Props} />
            <Route path='/children' component={Children} />
            <Route path='/events' component={Events} />
            <Route path='/life-cycle-methods' component={LifeCycleMethods} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
