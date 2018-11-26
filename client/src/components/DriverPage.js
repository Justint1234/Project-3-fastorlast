import React, { Component } from 'react';
// import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'

class DriverPage extends Component {
    state = {
        driver: []
    }
    componentDidMount() {
        this.getAllDrivers()
    }
    getAllDrivers = () => {
        const driverId = this.props.match.params.driverId
        axios.get(`/api/driver`).then(res => {
            console.log(res)
            this.setState({
                driver: res.data
            })
        })
    }
    render() {
        return (
            <div>
                <h1>Choose your opponent</h1>
                {this.state.driver.map((driver) => (
                    <div>
                        <Link to={`/drivers/${driver._id}`}><div>Name: {driver.Name}</div></Link>
                        <div>Wins: {driver.Wins}</div>
                        <div>Losses: {driver.Losses}</div>
                        <div>Experience: {driver.Experience}</div>
                        <div>Location: {driver.Location}</div>
                    </div>
                ))}
            </div> 
        );
    }
}

export default DriverPage;