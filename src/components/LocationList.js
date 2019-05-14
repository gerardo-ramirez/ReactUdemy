import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';
import './style.css';

//Haremos que LocationList acepte parametros:
const LocationList = ({cities,onSelectedLocation })=>{


//creamos la funcion handleWeatherLocationClick() que lleva a otra función que esta en app(burbujeo).
const handleWeatherLocationClick = city =>{
console.log('handleWeatherLocationClick');
onSelectedLocation(city);// esta es una funcion creada en APP js, (burbujeo) A quí viene como parametro. 
};


/* Creamos una funcion donde pasamos como parametro el array (cities) y por cada elemento obtenemos city
entonces creamos el coponente WeatherLocation a cada elemento. */
const ComponenteDeCities = cities=> (
    cities.map(city =>
        ( <WeatherLocation
             key={city.index}
              city={city}
              onWeatherLocationClick = {()=>handleWeatherLocationClick(city)}
              
              />))
    /*La key es siempre nesesaria para el uso de map
    por sugerencias de react. La forma más facil de obtenerla
    es trayendo el indice de cada elemento */ 
);

    return (<div className="locationList">
        
        { ComponenteDeCities(cities)}
        

        </div>)
};
//Condicionamos a que reciba un array, una lista de  ciudades.
LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
};
export default LocationList;