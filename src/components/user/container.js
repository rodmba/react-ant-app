import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/user'
import User from '../user'

const Contained = props => <User {...props} />

export default connect(state => {
  return { ...state.user }
}, actions)(Contained)
