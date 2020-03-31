import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import transformWeather from './../../services/transformWeather';
import { api_weather } from './../../constants/api_url';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Santiago',
            data: null, 
        };
    };

    componentDidMount() {
        this.handdleUpdateClick();
    }

    handdleUpdateClick = () => {
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
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
                {data ? <WeatherData data = {data}/> : <CircularProgress/>}
            </div>
        );
    }
};
export default WeatherLocation;
