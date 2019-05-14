//ESTE ES UN CONRAINER QUE CONECTA REDUX CON REACT

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LocationList from './../components/LocationList';
//import { store } from './../store/index';
//tbn importamos la connection:
import { connect } from 'react-redux';
//incorporamos redux 18/03/2019

import { setSelectedCity } from './../actions';

class LocationListContainer extends Component {
    handleSelectionLocation = city => {
        this.props.setCity(city);
        //  console.log(`handleSelectionLocation  ${city}` );
        //disparamos la accion 
    };
    render() {
        return (
            <div>
                <LocationList cities={this.props.cities} onSelectedLocation={this.handleSelectionLocation} />
            </div>
        );
    }
}
LocationListContainer.propTypes = {

    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired


};
const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value))
});
//connect es de react redux:Esto es un high order component porque toma un componente y retorna otro componente. 
const AppConnected = connect(null, mapDispatchToPropsActions)(LocationListContainer);


export default AppConnected;

