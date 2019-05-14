//creamos una funcion para importar la api :
/*El motivo de esta funcion es el dinamismo en  props.city*/ 
import {url_base_weather, api_key} from './../constans/url_api';

const getUrlWeatherByCity = city =>{


    //añadir &units=metric en la ultima parte en la url cambia los grados kelvin a celsius: '${url_base_weather}?q=${location}&appid=${api_key}&units=metric`
 return  `${url_base_weather}?q=${city}&appid=${api_key}`;
 //**
};
export default getUrlWeatherByCity ;