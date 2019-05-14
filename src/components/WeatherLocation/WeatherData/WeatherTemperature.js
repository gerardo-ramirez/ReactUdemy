import React from 'react';
//importamos css:
import './style.css';
//importamos los iconos porque es aqui donde lo utilizaremos:
import WeatherIcons from 'react-weathericons';
//importamos prop-types para justamente donde tenemos las propiedades que queremos estructurar
//es decir vamos a decirle que temperature debe ser numero y weatherState debe ser texto.
import PropTypes from 'prop-types';

//para minimizar errores asi como en weatherData aqui tambien importamos las constantes de weather:
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
   
} from './../../../constans/weather'; // se importo cada constante.


//objeto que tendra el nombre de los icons:
const icon = {
    //los nombres son los que figuran en openWeatherMap en la proiedad weather.
 [CLOUD]:"cloud",
 [SUN]:"day-sunny",
 [RAIN]:"rain",
 [SNOW]: "snow",
 [THUNDER]:"day-thunderstorm", 
 [DRIZZLE] : "day-showers",
};
//creamos una funcion q retorne el componente con el icono.
const getWeatherIcon = weatherState =>{
    //almacenamos en icon2.En base a icon con lo que venga en weatherState (propiedades de icon)es decir el nombre. ej:sunny,fog
    const icon2 = icon[weatherState];
    //si hay dato:
    if(icon2){
         return <WeatherIcons className="wIcon" name={icon2} size={sizeIcon}/>;
    } else{ //si es null:
        return <WeatherIcons className="wIcon" name={"day-sunny"} size={sizeIcon}/>;
    }

};
const sizeIcon = "4x";
//las props estan declaradas en WheaterData:
const WeatherTempeture = (props)=>{
    const {temperature} = props;//props.temperature.
   const {weatherState}= props;//props.weatherState.
    return(
    <div className='WeatherTemperatureCont'>
        {// invocamos funcion: con el parametro weatherState que es el nombre generico para props de icon.
            getWeatherIcon(weatherState)
        }
        
        <span className='temperature'>{`${temperature}`}</span><span className='temperatureType'>{'°C'}</span>
       

    </div>
    )
};
// las propiedades solo va a aceptar el tipo de dato que seteamos con proptypes
WeatherTempeture.propTypes = {
   temperature:PropTypes.number.isRequired,
   weatherState:PropTypes.string.isRequired,//is.Required lo hacemos obligatorio.

   
};
export default WeatherTempeture;