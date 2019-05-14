import transformForecast from './../services/transformForecast';
export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';


//TRAEMOS ACCIONES A CARPETA SEPARADA:
export const setForcastData = payload => ({
    type: SET_FORECAST_DATA, payload
})

//esto es un actionCreatore: 

const api_key = "7dcb15597b9b7fb849b322222c9adfef";
const url = "http://api.openweathermap.org/data/2.5/forecast";

const setCity = payload => ({ type: SET_CITY, payload });
export const setSelectedCity = payload => {

    //este dispatch se logra con el middleware thunk
    return dispatch => {
        //activar en el estado un indicador de busqueda de datos.
        dispatch(setCity(payload));
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;
        return fetch(url_forecast).then(
            data => (data.json()).then(weather_data => {

                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                //modificar el estado con el resultado de la promise (fetch)
                dispatch(setForcastData({ city: payload, forecastData }))

            }));

    };
};
