import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { pokemonReducer } from './reducers/pokemonReducer';
import { logActions } from './middlewares';
import thunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';
import { pokemonSaga } from './sagas';

const root = ReactDOM.createRoot(document.getElementById('root'));


const sagaMiddleWare = createSagaMiddleware();


const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhasers = composeAlt (
  applyMiddleware(sagaMiddleWare, logActions)
);


const store = createStore(pokemonReducer, composeEnhasers,)
sagaMiddleWare.run(pokemonSaga);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
