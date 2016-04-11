import 'babel-polyfill'
import React from 'react'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import ThunkMiddleware from 'redux-thunk'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import Root from './components/Root'
import './style.css'
import rootReducer from './reducers/index'

const store = createStore(combineReducers({
        app:rootReducer,
        routing:routerReducer
    }),
    applyMiddleware(
        ThunkMiddleware
    )
);
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Root store={store} history={history} />,
    document.getElementById('root')
);