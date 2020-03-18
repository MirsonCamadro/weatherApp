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

const location = "Talcahuano,cl";
const api_key  = "a2d52b8bf9125764ad1643334f9c4f66";
const url_base_weather   = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

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
        fetch(api_weather);
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
