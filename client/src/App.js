import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import CarPage from './components/CarPage'
import HomePage from './components/HomePage'
import DriverPage from './components/DriverPage'
import NavBar from './components/Navbar'
import styled from 'styled-components'
import LoginPage from './components/LoginPage'
import SingleDriver from './components/SingleDriver';

const AppStyles = styled.div`
display: flex;
justify-content: center;
background-image: url('https://www.colourbox.com/preview/17759483-racing-background.jpg') 
text: white;
}
`


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
          <Route exact path="/login" component={LoginPage}/>
            <Route exact path='/carpage' component={CarPage} />
            <Route exact path='/' component={HomePage} />
            <Route exact path='/DriverPage' component={DriverPage} />
            <Route exact path='/drivers/:driverId' component={SingleDriver} />
          </Switch>
          <AppStyles id='app-container' className='some-class'>
            
          </AppStyles>

        </div>
      </Router>
    );
  }
}

export default App;
