import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBarStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  height: 50px;
  
  a {
    text-decoration: underline;
    padding-left: 10px;
    color: white;
    &:active {
      color: red;
    }
  }

  .right {
    width: 15vw;
    display: flex;
    justify-content: space-around;
  }
`

class NavBar extends Component {
  render() {
    return (
      <NavBarStyles id="nav-container" class="some-class">
        <Link to="/carpage">Car Page</Link>
        <div className="right">
          <Link to="/driverpage">Driver Page</Link>
          <Link to="/login">Log-In</Link>
        </div>
        
      </NavBarStyles>
    );
  }
}

export default NavBar;
