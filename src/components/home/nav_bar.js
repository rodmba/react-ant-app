import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Layout, Menu, Button, Icon, Badge, Dropdown, Avatar } from 'antd'
import avatarImg from '../../imgs/u_place.png'
const { Header } = Layout

export default class NavBar extends Component {
  render() {
    const menuIconStyle = { paddingRight: 5 },
      notificationStyle = { fontSize: 10 },
      userMenu = (
        <Menu>
          <Menu.Item key="/notifications">
            <NavLink to="/notifications">
              <Icon type="bell" style={menuIconStyle} />
              <span style={menuIconStyle}>Notificações</span>
              <Badge count={20} style={notificationStyle} />
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/user">
            <NavLink to="/user">
              <Icon type="user" style={menuIconStyle} />Minha conta
            </NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="poweroff" style={menuIconStyle} />Sair
          </Menu.Item>
        </Menu>
      )
    return (
      <Header className="header">
        <div className="action-btns">
          <Dropdown overlay={userMenu}>
            <Badge count={20} overflowCount={5}>
              <Avatar src={avatarImg}>RA</Avatar>
            </Badge>
          </Dropdown>
        </div>
      </Header>
    )
  }
}
