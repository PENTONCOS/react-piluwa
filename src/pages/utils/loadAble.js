import React from 'react'
import { Result} from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import LoadAble from 'react-loadable'


// 过渡组件
function LogingComponent (){
  return(
    <Result
      style={{width:`100%`,height:`100%`,marginTop:100}}
      icon={<SyncOutlined spin />}
      title="页面加载中，请稍后..."
    />
  )
}

export default (LoadComponent)=>{
  return LoadAble({
    loader:LoadComponent,
    loading:LogingComponent
  })
}
