import React, { Component } from 'react';
import api from '../../api/login.js'
import { Form, Input, Button, Checkbox ,message,Alert} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import style from './index.module.less'
class Login extends Component {
  onFinish=async (e)=>{
  //  获取用户填写的数据 发起ajax请求 
  let {user,pass} = e 
  let result = await api.login({user,pass})
  if(result.err === 0 ){
    console.log("登录ok");
            message.success('登录成功，3s后跳转首页',3,()=>{
              this.props.history.replace('/admin')
              // 把用户名记下来
              console.log(this.props)
            })
   
  }else{
    console.log("登录失败");
    alert('账号或密码错误，请重新输入')
   
  }
  }
  render() { 
    return ( 
      <div
      className={style['login-box']}
      >
       <Form
        name="normal_login"
        className={style['login-form']}
        initialValues={{
          remember: true,
        }}
        onFinish={this.onFinish}
      >
        {/* 用户名 */}
      <Form.Item
        name="user"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
          {max:9,message:"用户名最长9位"},
          {min:3,message:"用户名最少3位"}
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      {/* 密码 */}
      <Form.Item
        name="pass"
        rules={[
          {
            required: true,
            message: 'Please input your passWord!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      {/* 记住我 */}
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>
      {/* 登录按钮 */}
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登陆
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
    </div>
     );
  }
}
 
export default Login;