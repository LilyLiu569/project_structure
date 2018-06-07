## 项目搭建

### 目录结构


### 集成路由与路由配置
  1. 一级路由分为整个页面和登陆页；
    组件：Login和web.js


  2. 二级路由为一级菜单对应的组件；

    组件：     
        首页：HomePage;
        发票管理：InvoiceManagement;
        系统设置：SystemSettings;
        组织架构：OrganizationStructure；
        开发人员工具：DeveloperTools


      

  3. 三级路由为二级菜单对应的组件；
    
      发票管理：InvoiceManagement;
              子组件：发票验真
                     影像识别

      系统设置：SystemSettings;
              子组件：
                      菜单管理
                      oauth2-server
                      oauth2-client
                      权限管理
                      角色管理
                      用户管理
      组织架构：OrganizationStructure；
              子组件： 机构管理
                       综合设置 


      开发人员工具：DeveloperTools
              子组件： 代码生成器
                       模板管理

###  http请求：axios二次封装；
          https://blog.csdn.net/frank_come/article/details/80010611；

### 集成redux presist-redux



 
  

