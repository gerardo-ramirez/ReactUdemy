import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography' ;
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';
import LocationListContainer from './containers/LocationListContainer';
//import ForcastExtended from './components/ForcastExtended';
import ForcastExtendedContainer from './containers/ForecastExtendedContainer';
//import PropTypes from 'prop-types'
//tbn importamos la connection:
//import { connect } from 'react-redux';
//quotamos de app.js la accion setState y el store los ponemos en carpetas aparte.

//luego lo importamos aquítambien store:
//import {store } from './store/index;
//incorporamos redux 18/03/2019
//import { setCity } from './actions/index';

const cities = [
  'Buenos Aires,ar',
 'Washington,us' ,
 'Bogota,col',
 'Acapulco,mx',
'Madrid,es',
'Lima,pe',
'Cordoba,ar',
];


class App extends Component {
   


  render() {

     
    return (
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant='title' color='inherit'>
                WeatherApp
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
          <LocationListContainer cities ={cities}/>
           
          </Col>
          <Col xs={12} md={6}>
          <Paper elevation={4}>
          <div className="details">
      
          <ForcastExtendedContainer />   
             
          
          </div>
          </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;