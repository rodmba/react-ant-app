/* eslint-env browser */
import React from 'react'
import { render } from 'react-dom'
import Router from './components/router'
import registerServiceWorker from './registerServiceWorker'

render(<Router />, document.getElementById('app'))
registerServiceWorker()
