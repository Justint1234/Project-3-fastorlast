import React, { Component } from 'react';
import axios from 'axios';

class SingleDriver extends Component {
    state = {
        driver: {}
    }

    componentDidMount() {
        axios.get(`/api/driver/${this.props.match.params.driverId}`)
        .then((res) => {
            console.log(res.data)
            this.setState({driver: res.data})
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {   
        return (
            <div>
                <h1>Hello, {this.state.driver.Name}!</h1>
                <p>{this.state.driver.Experience}</p>
                <p>{this.state.driver.Location}</p>
                <p>Wins: {this.state.driver.Wins}</p>
                <p>Losses: {this.state.driver.Losses}</p>
            </div>
        );
    }
}

export default SingleDriver;