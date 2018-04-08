/* eslint-env browser */
import React from 'react'
import ReactDOM from 'react-dom'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import configureStore from 'redux-mock-store'
import Home from '../components/home'

configure({ adapter: new Adapter() })

describe('home tests', () => {
  const initialState = { hello: 'Hello, this is cool' }
  const mockStore = configureStore()
  let store, container

  beforeEach(() => {
    store = mockStore(initialState)
    container = shallow(<Home store={store} />)
  })

  it('renders home connected', () => {
    expect(container.length).toEqual(1)
  })

  it('loads the logo', () => {
    const logo = container.find('.logo')
    expect(logo.text()).toBe('Arch & In')
  })
})
