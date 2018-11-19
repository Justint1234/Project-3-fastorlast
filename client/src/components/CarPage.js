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
                    <div>
                        <div>Make: {car.Make}</div>
                        <div>Model: {car.Model}</div>
                        <div>Year: {car.Year}</div>
                        <div>Type: {car.Type}</div>
                        <div>Color: {car.Color}</div>
                        <div>Horsepower: {car.Horsepower}</div>
                    </div>
                ))}
            </div>
        );
    }
}

export default CarPage;