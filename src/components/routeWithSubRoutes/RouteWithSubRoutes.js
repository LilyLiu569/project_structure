import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const RouteWithSubRoutes = (route) => {

    return route.redirect ? <Redirect from={route.from} to={route.to}/> :
        <Route path={route.path} render={props => (
            <route.component {...props} routes={route.routes}/>
        )}/>
}

export default RouteWithSubRoutes