import React from 'react'
import { Layout } from 'antd'
import SideMenu from './side_menu'
import NavBar from './nav_bar'
import Main from './main'
const { Sider } = Layout

export default props => {
  return (
    <Layout id="home">
      <Sider
        breakpoint="md"
        collapsedWidth="0"
        width={200}
        style={{ background: '#fff' }}
      >
        <div className="logo">app-name</div>
        <SideMenu />
      </Sider>

      <Layout>
        <NavBar />
        <Main />
      </Layout>
    </Layout>
  )
}
