import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/home'
import Home from '../home'

const Contained = props => <Home {...props} />

export default connect(state => {
  return { ...state.home }
}, actions)(Contained)
