import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../Componentes/Dashboard';
import Soporte from '../Componentes/Soporte';
import Boletines from '../Componentes/Componentes-boletines/Boletines';
import MiPerfil from '../Componentes/MiPerfil';
import BoletinesView from '../Componentes/Componentes-secundarios/BoletinesView';
import Listado from '../Componentes/Componentes-Listado/ListadoBoletines';
import PrivateRoute from '../Componentes/Componentes-login/PrivateRoute';
import Context from '../Componentes/Componentes-login/utils/context';
import AuthCheck from '../Componentes/Componentes-login/utils/authcheck';



const Navegacion = () => (
    <Switch>
        {/**/}
        <PrivateRoute exact path="/Vista/Dashboard" component={Dashboard} auth={Context.authState}/>
        <PrivateRoute path="/Vista/Boletines" component={Boletines} auth={Context.authState}/>
        <PrivateRoute path="/Vista/Listado" component={Listado} auth={Context.authState}/>
        <PrivateRoute path="/Vista/View" component={BoletinesView} auth={Context.authState}/>
        <PrivateRoute path="/Vista/MiPerfil" component={MiPerfil} auth={Context.authState}/>
        <PrivateRoute path="/Vista/Soporte" component={Soporte} auth={Context.authState}/>
        {/*<Route component={PageNotFound}/>*/}
    </Switch>
)

export default Navegacion;