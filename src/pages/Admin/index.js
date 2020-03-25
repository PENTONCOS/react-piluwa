import React, {Component} from 'react'

import { Layout } from 'antd';
import CustomNav from '../../components/CustomNav'
import style from './index.module.less'
// import Hoc from '../Hoc'

const { Header, Content, Footer, Sider } = Layout;
class Admin extends Component{
  render(){
    return (
      <Layout className={style.wrapper}>
        {/* 侧边栏 */}
        <Sider>s
          <div className={style.logo} >这里是logo</div>
          <CustomNav></CustomNav>
        </Sider>
     
      <Layout >
        {/* 头部 */}
        <Header className={style['ant-layout-header']}>这里是头部</Header>
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
