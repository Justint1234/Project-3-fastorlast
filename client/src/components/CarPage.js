import React, { Component } from 'react';
// import styled from 'styled-components'
import axios from 'axios'



class CarPage extends Component {
    state = {
        car: []
    }
    componentDidMount() {
        this.getAllCars()
    }

    getAllCars = () => {
        const carId = this.props.match.params.carId
        axios.get(`/api/car/`).then(res => {
            console.log(res)
            this.setState({
                car: res.data
            })

        })
    }
    render() {
        return (
            <div>
                <h1>Choose The Car</h1>
                {this.state.car.map((car) => (
                    <div>{car.Model}</div>
                ))}
            </div>
        );
    }
}

export default CarPage;