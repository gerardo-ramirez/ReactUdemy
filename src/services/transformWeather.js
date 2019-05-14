
//importamos libreria para cambio de grados centigrados.
import convert from 'convert-units';
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
} from './../constans/weather'; // se importo cada constante los archivos de constantes y funciones van en minuscula solo los componentes comienzan con mayuscula.
 

//***********fincion para traer   y transformar los datos del servidor:*************
//funcion para weatherState:********************************************************
const getWeatherState = weather_data => {
    const {id } = weather_data;
    if(id < 300){
        return THUNDER;
    } else if(id <400){
        return DRIZZLE;
    } else if(id < 500){
        return RAIN;
    }else if (id<700){
       return SNOW;
    }else if (id === 800 ){
         return SUN;
    } else{
        return CLOUD;
    }
       
}

//funcion para transformar grados kelvin a celsius con libreria convert-unites ****************
const getTemp = Kelvin =>{
    //sintaxis propia de la libreria:
    return Number (convert(Kelvin).from("K").to("C").toFixed(0));
}

//**************************************************************************** */
// esta va a recibir un solo parametro (weather_data)
const transformWeather = (weather_data)=>{
    //const {weather} = weather_data;
    const {humidity, temp} = weather_data.main;
    const {speed} = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather[0]);
    const temperature = getTemp(temp)
    /*Traduccion o codigo extendido:
    const data = {
            temperature: weather_data.main.temp,
            weatherState: this.getWeatherState(this.weather),
            humidity: weather_data.main.hymidity,
            wind: weather_data.wind
        }
    */ 

    const data = {
        temperature,
        weatherState,
        humidity,
        winds:`${speed} m/s` ,
    }
    return data;

}
//*************************************************************************************** */
export default transformWeather;