import React from 'react';
import PropTypes from 'prop-types';
//importamos css:
import './style.css';

const WeatherExtrainfo = (props)=>{
    const{humidity} = props;
    const {winds} = props;

return(
    <div className='WeatherExtraInfoCont'>
        <span className='extraInfoText'>{`Humedad: ${humidity} %`}</span>
        <span className='extraInfoText'>{`Vientos: ${winds}`}</span>


    </div>
    )
};
WeatherExtrainfo.propsType ={
     humidity: PropTypes.number.isRequired,
     winds: PropTypes.string.isRequired
};
export default WeatherExtrainfo;