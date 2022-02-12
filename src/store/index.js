import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer'

const middlewares = [applyMiddleware(thunk)]

if (window.__REDUX_DEVTOOLS_EXTENSION__)
  middlewares.push(window.__REDUX_DEVTOOLS_EXTENSION__())

let store = createStore(rootReducer, compose(...middlewares))

export default store;