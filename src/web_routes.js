// 页面级路由

import React from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'
import {Layout} from 'antd'
import Web from './modules/Web'
import Login from './modules/login/Login'
import RouteWithSubRoutes from './components/routeWithSubRoutes/RouteWithSubRoutes';



const routes = [
    {
        path:'/web',
        component:Web,
        name:'主页',
    },{
        path:'/login',
        component:props=><Login {...props} type={1}/>,
        name:'登录'
    },
    {
      path:'*',
      redirect:true,
      to:'/web'    
  }

]

const MainRoute =(
    <Route render={()=>{

        const homeRoute = () => <Redirect to="/login"/>
        return(
            <Layout>
                <Route exact strict path="/" render={homeRoute} />
                <Switch>
                    {routes.map((route, index) => (<RouteWithSubRoutes key={index} {...route}/>)
                    )}
                </Switch>

            </Layout>
        )
    }} />
)

export default MainRoute