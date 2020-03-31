import React ,{Component} from 'react';
import {HashRouter,Route,Redirect} from 'react-router-dom'
import loadAble from '@utils/loadAble'
// import  Admin from  '@pages/Admin'
// import  Login from '@pages/Login'
// import User from '@pages/User'
// import GoodsList from '@pages/Goods/GoodsList'
// import GoodsAdd from '@pages/Goods/GoodsAdd'
// import GoodsUpdate from '@pages/Goods/GoodsUpdate'
// import GoodsKind from '@pages/GoodsKind'
// import Visualization from '@pages/Visualization'
const Admin =loadAble(()=>import('@pages/Admin'))
const Login =loadAble(()=>import('@pages/Login'))
const User =loadAble(()=>import('@pages/User'))
const GoodsList =loadAble(()=>import('@pages/Goods/GoodsList'))
const GoodsAdd =loadAble(()=>import('@pages/Goods/GoodsAdd'))
const GoodsUpdate =loadAble(()=>import('@pages/Goods/GoodsUpdate'))
const GoodsKind =loadAble(()=>import('@pages/GoodsKind'))
const Visualization =loadAble(()=>import('@pages/Visualization'))

class App extends Component {
  render() { 
    return (  
      <HashRouter>
        {/* 控制地址栏改变 */}
        {/* 路由 */}
        <Redirect exact from='/' to='/admin/goodslist'></Redirect>
        <Route path='/login' component={Login}></Route>
        <Route path='/admin' render ={()=>{
          return(
            <Admin>
                <Route path='/admin/user' component={User}></Route>
                <Route path='/admin/goodslist' component={GoodsList}></Route>
                <Route path='/admin/goodsInfoAdd' component={GoodsAdd}></Route>
                <Route path='/admin/goodsInfoUpdate/:id' component={GoodsUpdate}></Route>
                <Route path='/admin/goodskind' component={GoodsKind}></Route>
                <Route path='/admin/visualization' component={Visualization}></Route>
            </Admin>
          )
        }}></Route>
      </HashRouter>
    );
  }
}
 
export default App;
