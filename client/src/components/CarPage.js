import React, { Component } from 'react';
// import styled from 'styled-components'
import axios from 'axios'
import styled from 'styled-components'
const DriverContainerStyle = styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
align-content: flex-start;


`

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
                 <DriverContainerStyle>
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
                </DriverContainerStyle>
            </div>
        );
    }
}

export default CarPage;