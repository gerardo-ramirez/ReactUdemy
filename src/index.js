import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//para usar rect-redux importamos 
import { Provider } from 'react-redux';

//luego lo importamos aquítambien store:
import {store } from './store/index';

ReactDOM.render(
    //agregamos como parametro store y envolvemos app.
<Provider store = {store}><App /></Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
