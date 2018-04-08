import React, { Component } from 'react'
import { Route } from 'react-router'
import { Layout } from 'antd'
import Projects from '../projects/container'
import User from '../user/container'
import Notifications from '../notifications'
const { Content } = Layout

export default class Main extends Component {
  render() {
    return (
      <Content className="main">
        <Route
          path="/"
          exact
          render={() => (
            <div>Arch & In | Projetos online de arquitetura e interiores</div>
          )}
        />
        <Route path="/projects" component={Projects} />
        <Route path="/user" component={User} />
        <Route path="/notifications" component={Notifications} />
      </Content>
    )
  }
}
