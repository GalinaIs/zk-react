import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
//import { ping } from './enhancers/ping'

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk, logger))
}
