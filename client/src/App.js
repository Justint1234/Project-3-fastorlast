import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import CarPage from './components/CarPage'
import HomePage from './components/HomePage'
import DriverPage from './components/DriverPage'
import NavBar from './components/Navbar'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path='/carpage' component={CarPage}/>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/driverpage' component={DriverPage}/>
          </Switch>
          <h3>Welcome Racers</h3>
        </div>
      </Router>
    );
  }
}

export default App;
