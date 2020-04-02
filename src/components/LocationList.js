import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types'

const LocationList = ({ cities }) => {
    console.log(cities);
    return (
    <div>
        <WeatherLocation city = "Santiago,cl" />
        <WeatherLocation city = "Talcahuano,cl" />
    </div> 
    );
};


LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
};

export default LocationList;