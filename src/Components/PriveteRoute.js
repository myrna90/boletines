
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import fakeAuth from './Login';

/*const PriveteRoute = ({component: Component, isAuthenticated, ...rest}) => (
    <Route {...rest} render={(props) =>(
        fakeAuth.isAuthenticated === true
        ? <Component {...props}/>
        : <Redirect to={{
            pathname: 'Dashboard',
            state: {from: props.location}
        }}/>
    )}
    />
);*/

export default PriveteRoute;
