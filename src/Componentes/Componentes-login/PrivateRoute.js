
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import users from '../users.json';
import fakeAuth from './Login';
//COMENTAR SOLAMENTE EL CONTENIDO DE LA FUNCION PARA NO GENERAR ERRORES

/*const PrivateRoute = ({component: Component, auth }) => (
  <Route render={props => auth === true
    ? <Component auth={auth} {...props} />
    : <Redirect to={{pathname:'/Vista/Dashboard'}} />
  }
  />
)*/

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/Vista/Dashboard',
        state: { from: props.location } 
      }}/>
  )} />
)

export default PrivateRoute;
