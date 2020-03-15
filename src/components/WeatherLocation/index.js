import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';
import {
    CLOUD,
    CLOUDY, 
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../../constants/weathers';

const data = {
    temperature: 5,
    weatherState: RAIN,
    humidity: 10,
    wind: '10 m/s',
};

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Santiago',
            data: data, 
        };
    };
    handdleUpdateClick = () => {
        this.setState({
            city: 'Otro Santiago'
        })
    };

    render(){
        const { city, data } = this.state 
        return(
            <div className="weatherLocationCont">
                <Location city={city}/>
                <WeatherData data = {data}/>
                <button onClick={this.handdleUpdateClick}>Actualizar</button>
            </div>
        );
    }
};
export default WeatherLocation;
