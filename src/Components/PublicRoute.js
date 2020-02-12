import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from './Login'

const PublicRoute = ({ component:   Component, restricted, ...rest}) => {
    return(
        <Route {...rest} render={props => (
            Login() && restricted ?
            <Redirect to='/Dashboard'/>
            : <Component {...props} />
        )} />
    )
}

export default PublicRoute;