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
   icon: 'admin',
   path:'/admin/user',
   children:[
     {
       key:'2-1',
       title:"普通用户管理",
       path:'/admin/normaluser'
      },
     {
      key:'2-2',
      title:"管理员管理",
      path:'/admin/administrator'
    }
   ]
  },
  {
    key:'3',
    title:"商品管理",
    icon:'goods',
    path:'/admin/goods',
    children:[
      {
        key:'3-1',
        title:"商品信息",
        path:'/admin/goodslist'
      },
      {
        key:'3-2',
        title:"商品类别",
        path:'/admin/goodskind'
      }
    ]
  },
  {
    key:'8',
    title:"数据可视化",
    icon:'visition',
    path:'/admin/visualization',
    // children:[
    //   {
    //     key:'8-1',
    //     title:"全球奶粉",
    //     path:'/admin/milkpowder'
    //   },
    //   {
    //     key:'8-2',
    //     title:"尿不湿",
    //     path:'/admin/diapers'
    //   },
    //   {
    //     key:'8-3',
    //     title:"营养辅食",
    //     path:'/admin/supplementary'
    //   },
    //   {
    //     key:'8-4',
    //     title:"宝宝洗护",
    //     path:'/admin/skincare'
    //   }
    // ]
  }
]
