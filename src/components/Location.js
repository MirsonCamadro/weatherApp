import React from 'react';

const Location = ({ city }) => (
    <div>
        <h1>
            {city}
        </h1>
    </div>
);
export default Location;

//const Location = (props) => {
        // Destructuring
    //const city = props.city;
    //const { city } = props;
    //return (
    //    <div><h1>{city}</h1></div>
    //);