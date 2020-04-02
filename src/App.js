import React ,{Component} from 'react';
<<<<<<< HEAD
import loadAble from '@utils/loadAble'
import {HashRouter,Route,Redirect} from 'react-router-dom'
=======

import {HashRouter,Route,Redirect} from 'react-router-dom'
import loadAble from '@utils/loadAble'

>>>>>>> 55a8ec20be64af419c4bacc40d7d1017c72bab65
import Normaluser from './pages/User/normaluser'
import Administrator from './pages/User/administrator'

const Admin =loadAble(()=>import('@pages/Admin'))
const Login =loadAble(()=>import('@pages/Login'))
const User =loadAble(()=>import('@pages/User'))
const GoodsList =loadAble(()=>import('@pages/Goods/GoodsList'))
const GoodsAdd =loadAble(()=>import('@pages/Goods/GoodsAdd'))
const GoodsUpdate =loadAble(()=>import('@pages/Goods/GoodsUpdate'))
const GoodsKind =loadAble(()=>import('@pages/GoodsKind'))
const Visualization =loadAble(()=>import('@pages/Visualization'))

<<<<<<< HEAD

// import GoodsList from './pages/Goods/GoodsList'
// import Admins from './pages/Administrator'
=======
>>>>>>> 55a8ec20be64af419c4bacc40d7d1017c72bab65
class App extends Component {
  render() { 
    return (  
      <HashRouter>
        {/* 控制地址栏改变 */}
        {/* 路由 */}
        <Redirect exact from='/' to='/admin'></Redirect>
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
<<<<<<< HEAD
              
                {/* <Route path='/admin/goodslist' component={GoodsList}></Route> */}
                {/* <Route path='/admin/administrator' component={Admins}></Route> */}
=======
>>>>>>> 55a8ec20be64af419c4bacc40d7d1017c72bab65
            </Admin>
          )
        }}></Route>
      </HashRouter>
    );
  }
}
 
export default App;
