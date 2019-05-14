import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtrainfo from './WeatherExtrainfo';
import WeatherTempature from './WeatherTemperature';

//importamos css:
import './style.css';
//importamos las constantes de weather que utilizaremos como propiedad en weatherState:
/*import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY 
} from './../../../constans/weather'; // se importo cada constante los archivos de constantes y funciones van en minuscula solo los componentes comienzan con mayuscula.

*/
//Este tipo de constante se llama componente funcional.

const WeatherData = ({ data }) => {
    /*OPCION DESTRUCTURING:
    const WeatherData = ({data: {temperature, weatherState, humidity, winds}})*/

    //llaves y return () cuando es mas de una linea.
    const { temperature, weatherState, humidity, winds } = data;
    return (
        <div className='WeatherDataCont'>
            <WeatherTempature temperature={temperature} weatherState={weatherState} />
            <WeatherExtrainfo humidity={humidity} winds={winds} />


        </div>)
};

WeatherData.propTypes = {
    //shape es propio de proptypes y valida objeto y propiedades:
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        winds: PropTypes.string.isRequired

    }),
};
export default WeatherData;