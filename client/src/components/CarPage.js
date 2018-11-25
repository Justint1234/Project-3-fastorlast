import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'


const CarContainerStyle = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap; 
`;


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
                <CarContainerStyle>
                    {this.state.car.map((car) => (
                        <div>
                            <div>Make: {car.Make}</div>
                            <div>Model: {car.Model}</div>
                            <div>Year: {car.Year}</div>
                            <div>Type: {car.Type}</div>
                            <div>Color: {car.Color}</div>
                            <div>Horsepower: {car.Horsepower}</div>
                            <img src={car.Image} alt="img" />
                        </div>
                    ))}
                </CarContainerStyle>
            </div>
        );
    }
}

export default CarPage;