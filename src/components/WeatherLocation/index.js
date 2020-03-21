import React, { Component } from 'react';
import convert from 'convert-units';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';
import {
    RAIN,
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

    getTemp = kelvin => {
        return Number(
            convert(kelvin).from("K").to("C").toFixed(2)
            );        
    };

    getWeatherState = weather_data => {
        return RAIN;
    };

    getData = weather_data => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data);
        const temperature = this.getTemp(temp);

        const data = {
            humidity,
            temperature,
            weatherState,
            wind: `${speed} m/s`,
        }
        return data;
    }

    handdleUpdateClick = () => {
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = this.getData(data);
            console.log(newWeather);
            this.setState({
                data: newWeather
            })
        });
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
