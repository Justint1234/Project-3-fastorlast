import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import CarPage from './components/CarPage'
import HomePage from './components/HomePage'
import DriverPage from './components/DrivePage'
import NavBar from './components/NavBar'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Global />
          <NavBar />
          <Switch>
            <Router exact path='/carpage' component={CarPage}/>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/driverpage' component={DriverPage}/>
          </Switch>
          <h3>Hi</h3>
        </div>
      </Router>
    );
  }
}

export default App;
