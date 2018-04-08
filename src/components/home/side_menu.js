import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Icon } from 'antd'
const { SubMenu } = Menu

export default class SideMenu extends Component {
  render() {
    return (
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
      >
        <Menu.Item key="/">
          <NavLink to="/">
            <Icon type="home" />ínicio
          </NavLink>
        </Menu.Item>

        <Menu.Item key="/projects">
          <NavLink to="/projects">
            <Icon type="tool" />projetos
          </NavLink>
        </Menu.Item>
      </Menu>
    )
  }
}
