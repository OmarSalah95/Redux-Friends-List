import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// ~~~~~~~~~~~~~~~~<Redux Initialization Dependencies>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import { Provider } from 'react-redux'
import reducer from './Reducers';
import {createStore, applyMiddleware} from 'redux';
// ~~~~~~~~~~~~~~~~~~<MiddleWare Dependencies>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import thunk from 'redux-thunk'


const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store = {store}>
        <App /> 
    </Provider>, 
    document.getElementById('root'));

