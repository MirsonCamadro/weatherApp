import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature'

const WeatherData = () => (
    <div>
        <WeatherTemperature />
        <WeatherExtraInfo humidity={80} wind={"10 m/s"}/>
    </div>
);
const numero = 5;
const text = `sadasdasdasads ${numero}`
console.log(text)

export default WeatherData;