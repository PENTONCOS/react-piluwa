import React ,{Component} from 'react';
import {HashRouter,Route,Redirect} from 'react-router-dom'
import  Admin from  './pages/Admin'
import  Login from './pages/Login'
import User from './pages/User'
import GoodsList from './pages/Goods/GoodsList'
import GoodsAdd from './pages/Goods/GoodsAdd'
import GoodsUpdate from './pages/Goods/GoodsUpdate'
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
            </Admin>
          )
        }}></Route>
      </HashRouter>
    );
  }
}
 
export default App;
