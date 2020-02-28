
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import fakeAuth from '../Componentes-boletines/Login';
//COMENTAR SOLAMENTE EL CONTENIDO DE LA FUNCION PARA NO GENERAR ERRORES

const PriveteRoute = ({component: Component, isAuthenticated, ...rest}) => (
   /*<Route {...rest} render={(props) =>(
        fakeAuth.isAuthenticated === true
        ? <Component {...props}/>
        : <Redirect to={{
            pathname: 'Dashboard',
            state: {from: props.location}
        }}/>
    )}
    />*/
);

export default PriveteRoute;
