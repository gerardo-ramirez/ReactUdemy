//SEPARAMOS EL STORE


//creamos el store:
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './../reducer';

//pasamos  estado inicial de la app:
const initialState = {
  city: 'Buenos Aires,ar'
};
//esto conecta con redux dev tool: 
const composeEmhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

//y lo pasamos como segundo parametro
export const store = createStore(reducer, initialState, composeEmhancers(applyMiddleware(thunk)));
// con esto lograremos tener un estado inicial sin undefine

//export const store = createStore(()=>{}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

