import React, { Component } from 'react';
// import axios from 'axios'
// import { Link } from 'react-router-dom'



class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Welcome Racers</h1>
                <form action="http://localhost:3000/login">
                    <input type="submit" value="Log In Racer" />
                </form>
            </div>
        );
    }
}

export default HomePage;