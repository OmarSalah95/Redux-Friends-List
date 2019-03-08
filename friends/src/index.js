import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// ~~~~~~~~~~~~~~~~<Redux Initialization Dependencies>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import { Provider } from 'react-redux'
import rootReducer from './Reducers';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// ~~~~~~~~~~~~~~~~~~<MiddleWare Dependencies>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import thunk from 'redux-thunk'


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store = {store}>
        <App /> 
    </Provider>, 
    document.getElementById('root'));

