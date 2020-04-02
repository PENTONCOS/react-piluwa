import React ,{Component} from 'react';
import loadAble from '@utils/loadAble'
import {HashRouter,Route,Redirect} from 'react-router-dom'
const Normaluser =loadAble(()=>import('./pages/User/normaluser'))
const Administrator =loadAble(()=>import('./pages/User/administrator'))
const Admin =loadAble(()=>import('@pages/Admin'))
const Login =loadAble(()=>import('@pages/Login'))
const User =loadAble(()=>import('@pages/User'))
const GoodsList =loadAble(()=>import('@pages/Goods/GoodsList'))
const GoodsAdd =loadAble(()=>import('@pages/Goods/GoodsAdd'))
const GoodsUpdate =loadAble(()=>import('@pages/Goods/GoodsUpdate'))
const GoodsKind =loadAble(()=>import('@pages/GoodsKind'))
const Visualization =loadAble(()=>import('@pages/Visualization'))


// import GoodsList from './pages/Goods/GoodsList'
// import Admins from './pages/Administrator'
class App extends Component {
  render() { 
    return (  
      <HashRouter>
        {/* 控制地址栏改变 */}
        {/* 路由 */}
        <Redirect exact from='/' to='/login'></Redirect>
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
                <Route path='/admin/normaluser' component={Normaluser}></Route>
                <Route path='/admin/administrator' component={Administrator}></Route>
              
                {/* <Route path='/admin/goodslist' component={GoodsList}></Route> */}
                {/* <Route path='/admin/administrator' component={Admins}></Route> */}
            </Admin>
          )
        }}></Route>
      </HashRouter>
    );
  }
}
 
export default App;
