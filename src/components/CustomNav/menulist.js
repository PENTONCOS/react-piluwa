export default[
  {
    key:'1',
    title:"首页",
    icon:'home',
    path:'/admin/home'
  },
  {
   key:'2',
   title:'用户管理',
   icon:'user',
   path:'/admin/user',
   children:[
     {
       key:'2-1',
       title:"用户添加",
       icon:'user',
       path:'/admin/useradd'
      },
     {
      key:'2-2',
      title:"用户列表",
      icon:'user',
      path:'/admin/userlist'
    }
   ]
  },
  {
    key:'3',
    title:"商品管理",
    icon:'shop',
    path:'/admin/goods'
  },
  {
    key:'8',
    title:"管理员",
    icon:'robot',
    path:'/admin/administrator'
  },
  {
    key:'9',
    title:"设置",
    icon:'setting',
    path:'/admin/set'
  },
]