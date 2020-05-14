
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import users from '../users.json';
//COMENTAR SOLAMENTE EL CONTENIDO DE LA FUNCION PARA NO GENERAR ERRORES

const PriveteRoute = ({component: Component, isAuthenticated, ...rest}) => (
   <Route {...rest} render={(props) =>(
        users.isAuthenticated === true
        ? <Component {...props}/>
        : <Redirect to={{
            pathname: 'Dashboard',
            state: {from: props.location}
        }}/>
    )}
    />
);

export default PriveteRoute;
