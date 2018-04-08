import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/projects'
import Projects from '../projects'

const Contained = props => <Projects {...props} />

export default connect(state => {
  return { ...state.projects }
}, actions)(Contained)
