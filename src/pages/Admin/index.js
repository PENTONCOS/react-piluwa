import React, {Component} from 'react'

import { Layout } from 'antd';
import CustomNav from '@components/CustomNav'
import HeaderNav from '@components/HeaderNav'

import style from './index.module.less'
// import Hoc from '../Hoc'

const { Header, Content, Footer, Sider } = Layout;
class Admin extends Component{
  render(){
    return (
      <Layout className={style.wrapper}>
        {/* 侧边栏 */}
        <Sider>
          <div className={style.logo} >
            <img width='60' height='60' alt='这是我的头像！' src='https://img.yzcdn.cn/upload_files/2019/05/08/Fmxg4BxwfpCvVv25VLiToOmhwxHL.jpg'/>
            <span>皮噜娃</span>
          </div>
          <CustomNav></CustomNav>
        </Sider>
     
      <Layout >
        {/* 头部 */}
        <Header className={style['ant-layout-header']}>
          <HeaderNav></HeaderNav>
        </Header>
        {/* 容器内容 */}
        <Content>
          {this.props.children}
        </Content>
        {/* 底部 */}
        <Footer >Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
    )
  }
}
// export default Hoc(Admin)

export default Admin;
