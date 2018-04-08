import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { getStore } from '../../store'
import Root from '../root'

export default () => {
  const store = getStore()

  return (
    <Provider store={store}>
      <Router>
        <Root />
      </Router>
    </Provider>
  )
}
