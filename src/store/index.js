/* eslint-env browser */
import { combineReducers, compose, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import * as reducers from '../reducers'

export function getStore(preloadedState = {}) {
  const reducer = combineReducers(reducers)
  const enhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
  return createStore(reducer, preloadedState, enhancers)
}
