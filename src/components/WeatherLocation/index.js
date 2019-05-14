//pasamos de funtionalComponent A ClassComponent.
import React, { Component } from  'react';//importamos Component clase que nos brinda react.
import Location from './Location';
import WeatherData from './WeatherData/index';
// importamos la costantes que transforman el contenido de la api:********
import transformWeather from './../../services/transformWeather';
//********************************************************************* */
/* 1-importamos la api!!! :************************
import {api_weather} from './../../constans/url_api';
********************************************* */
//2-importamos la api con una funcion getUrlWeatherByCity!!! :************************
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
//********************************************* */
//importamos su css:
import './Location.css';
//************************************************************************ */
//importamos material desing para icono de cargando dinamico .
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';

//Este tipo de constante se llama Class component.
class WeatherLocation  extends Component {
    constructor(props){//constructor donde se empieza a crear.Pasamos props para pasar ciudad cin setear.
        super(props);//super es el constructor base de nuestro componente sin ello no funciona.Siempre antes del render.
        const {city} = props;
        this.state ={
            city ,
            data : null,
        }
    console.log('constructor')

    }
    //LAS FUNCIONES SE CREAN ARRIBA DEL RENDER
componentDidMount (){
    console.log('did mount');
    this.handlerUpdate();

};
/*componentDidUpdate(prevProps,prevState) {
    console.log('did update')

};*/




    handlerUpdate = ()=>{

        const api_weather = getUrlWeatherByCity(this.state.city) ;
        //usamos fetch(NO REQUIERE LIBRERIA ) en este punto para ver simplemente si api responde al llamado.
        //luego como fetch es una promesa usamos then y body.json(), que son metodos de fetch que podemos obtener en la documentacion
        fetch(api_weather).then( resolve =>{
            return  resolve.json();
           //entonces mostra el dato:
        }).then (data =>{
            const newWeather = transformWeather(data);
         //   console.log(newWeather);
            //debugger;
          this.setState({
            data: newWeather
          });
        });
     
    };
 render() {
    const {onWeatherLocationClick} = this.props;//esta sera una funcion que lleva a otra funcion(burbujeo)

     const {city, data}= this.state;//es destucturing
     /*Es lo mismo que agregar : this.state.city*/ 
     return (
          <div className='WeatherLocationCont' onClick ={onWeatherLocationClick}>
        <Location cito={city}/>
        {/* usamos shorthand (ternario)*/}
        {data ? <WeatherData data ={data}/> : 
        <CircularProgress/>
        }
        {/* para eliminar el  boton y que actualice solo agregamos la funcion en componentdidMount()
        <button onClick={this.handlerUpdate}>Actualizar</button>*/}
     </div>
     ); 
 }

}
WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}
   

export default WeatherLocation;