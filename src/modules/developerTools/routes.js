// 菜单二级路由


const PATH = '/web/';
const routes = [
  {
    path: `${PATH}`,
    component: Homepage,
    name: '首页',
    icon: 'home',
    exact: true,
    permissions: true,

  }, {
    path: `${PATH}/invoicemanagement`,
    name: '发票管理',
    icon: 'appstore-o',
    exact: true,
    permissions: true,
    component:InvoiceManagement,
    
    // redirect: true,
    // to: `${PATH}/invoicemanagement/`,
    // children: invoiceManagement_routes
  }
]

export default routes