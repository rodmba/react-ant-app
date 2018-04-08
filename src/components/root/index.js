import React from 'react'
import { Switch, Route } from 'react-router'
import '../../styles/index.css'
import Home from '../home/container'

export default () => (
  <Switch>
    <Route path="/" component={Home} />
  </Switch>
)
