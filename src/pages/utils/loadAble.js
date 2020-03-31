import React from 'react'
import { Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import LoadAble from 'react-loadable'


// 过度组件
function LogingComponent (){
  return(
    <Result
    icon={<SmileOutlined />}
    title="别看了，这里没内容"
    extra={<Button type="primary">按我！！！</Button>}
  />
  )
}

export default (LoadComponent)=>{
  return LoadAble({
    loader:LoadComponent,
    loading:LogingComponent
  })
}
