
const PATH = '/web/invoice_management';
const routes = [
  {
    path: `${PATH}/invoice_verify`,
    component: '',
    name: '',
    icon: 'home',
    permissions: true,

  }, {
    path: `${PATH}/invoice_management`,
    name: '发票管理',
    icon: 'appstore-o',
    exact: true,
    permissions: true,     
    
  }

]

export default routes