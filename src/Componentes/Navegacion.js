import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../Componentes/Dashboard';
import Soporte from '../Componentes/Soporte';
import Boletines from '../Componentes/Componentes-boletines/Boletines';
import MiPerfil from '../Componentes/MiPerfil';
import BoletinesView from '../Componentes/Componentes-secundarios/BoletinesView';
import Listado from '../Componentes/Componentes-Listado/ListadoBoletines';
import PrivateRoute from '../Componentes/Componentes-login/PrivateRoute';

const Navegacion = () => (
    <Switch>
        {/**/}
        <PrivateRoute exact path="/Vista/Dashboard" component={Dashboard} />
        <PrivateRoute path="/Vista/Boletines" component={Boletines} />
        <PrivateRoute path="/Vista/Listado" component={Listado} />
        <PrivateRoute path="/Vista/View" component={BoletinesView} />
        <PrivateRoute path="/Vista/MiPerfil" component={MiPerfil} />
        <PrivateRoute path="/Vista/Soporte" component={Soporte} />
        {/*<Route component={PageNotFound}/>*/}
    </Switch>
)

export default Navegacion;