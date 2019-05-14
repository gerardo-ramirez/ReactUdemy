import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import ForcastItem from './ForcastItem';
const renderProgress = () => {
    return "cargando pronostico extendido";
}
const renderFoscastItemDay = (forecastData) => {

    return forecastData.map(forecast => (
        <ForcastItem
            key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay}
            hour={forecast.hour}
            data={forecast.data}></ForcastItem>));
}


const ForcastExtended = ({ city, forecastData }) => (

    <div>

        <h2 className='forcast-title'> Aqui pronostico extendido con  {city} </h2>
        {forecastData ?
            renderFoscastItemDay(forecastData)
            :
            renderProgress()
        }
    </div>


);

ForcastExtended.propType = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array.isRequired
}
export default ForcastExtended;