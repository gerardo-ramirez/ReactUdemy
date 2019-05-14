import React from 'react';
//proptypes para validar el valor de las propiedades.
import PropTypes from 'prop-types';
//importamos su css:
import './Location.css';


//Este tipo de constante se llama componente funcional.

const Location = (props) => {
    const city = props.cito;

    return (
        <div className='LocationCont'><h1> {city}</h1></div>
    )
};
//dando a la propiedad la obligación.
Location.propTypes = {
    cito: PropTypes.string.isRequired
};
export default Location;
