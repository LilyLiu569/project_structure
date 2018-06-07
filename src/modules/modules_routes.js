// 一级菜单路由
import Homepage from './homepage/Homepage';
import invoiceManagement_routes from './invoiceManagement/routes'
import systemSettings_routes from './systemSettings/routes'
import organizationStructure_routes from './organizationStructure/routes'
import developerTools_routes from './developerTools/routes'

const PATH = '/web';
const routes = [
  {
    path: `${PATH}`,
    component: Homepage,
    name: '首页',
    icon: 'home',
    exact: true,
    permissions: true,

  }, {
    path: `${PATH}/invoice_management`,
    name: '发票管理',
    icon: 'appstore-o',
    exact: true,
    permissions: true,  
    
    // redirect: true,
    // to: `${PATH}/invoicemanagement/`,
    // children: invoiceManagement_routes
  }, {
    path: `${PATH}/system_settings`,
    name: '系统设置',
    icon: 'appstore-o',
    exact: true,
    permissions: true,
    // component:InvoiceManagement,
    
    // redirect: true,
    // to: `${PATH}/invoicemanagement/`,
    // children: invoiceManagement_routes
  }, {
    path: `${PATH}/organization_structure`,
    name: '组织架构',
    icon: 'appstore-o',
    exact: true,
    permissions: true,
    
    // redirect: true,
    // to: `${PATH}/invoicemanagement/`,
    // children: invoiceManagement_routes
  },
  {
    path: `${PATH}/developer_tools`,
    name: '开发人员工具',
    icon: 'appstore-o',
    exact: true,
    permissions: true,
    
    // redirect: true,
    // to: `${PATH}/invoicemanagement/`,
    // children: invoiceManagement_routes
  }

]

export default routes