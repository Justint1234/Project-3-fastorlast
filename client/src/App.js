import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import CarPage from './components/CarPage'
import HomePage from './components/HomePage'
import DriverPage from './components/DriverPage'
import NavBar from './components/Navbar'
import styled from 'styled-components'

const AppStyles = styled.div`
display: flex;
justify-content: center;
}
`


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path='/carpage' component={CarPage} />
            <Route exact path='/' component={HomePage} />
            <Route exact path='/driverpage' component={DriverPage} />
          </Switch>
          <AppStyles id='app-container' class='some-class'>
            <h1>Welcome Racers</h1>
          </AppStyles>

        </div>
      </Router>
    );
  }
}

export default App;
