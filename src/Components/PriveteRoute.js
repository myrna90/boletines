
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginRoute} from 'config/routes';
import { isAuthenticated } from 'Ducks/selector';

const PriveteRoute = ({component: Component, isAuthenticated, ...rest}) => (
    <Route 
    {...rest}
    render={props =>
    isAuthenticated ? (
        <Component {...props}/>
    ) : (
        <Redirect to={loginRoute()}/>
    )}
    />
);

PriveteRoute.prototype = {
    component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    isAuthenticated: PropTypes.bool
}

PriveteRoute.defaultProps = {
    isAuthenticated: false
}

export default connect(state => ({
    isAuthenticated: isAuthenticated(state)
}))(PriveteRoute);