import React  from  'react';
import PropTypes  from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';



const ForcastItem = ({ weekDay, hour,data })=>{

    return (
        <div>
        <div>
          {weekDay} - {hour} hs

          <WeatherData data = {data}/>
        </div>

        </div>


       
    )
};
ForcastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature : PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        winds: PropTypes.string.isRequired
   
    }),
}
export default ForcastItem;