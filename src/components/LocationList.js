import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
   <div>
       <WeatherLocation city = "Santiago,cl" />
       <WeatherLocation city = "Talcahuano,cl" />
   </div> 
);

export default LocationList;