import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../Componentes/Dashboard';
import Soporte from '../Componentes/Soporte';
import Boletines from '../Componentes/Componentes-boletines/Boletines';
import MiPerfil from '../Componentes/MiPerfil';
import BoletinesView from '../Componentes/Componentes-secundarios/BoletinesView';
import Listado from '../Componentes/Componentes-Listado/ListadoBoletines';

const Navegacion = () => (
    <Switch>
        {/**/}
        <Route exact path="/Vista/Dashboard" component={Dashboard} />
        <Route path="/Vista/Boletines" component={Boletines} />
        <Route path="/Vista/Listado" component={Listado} />
        <Route path="/Vista/View" component={BoletinesView} />
        <Route path="/Vista/MiPerfil" component={MiPerfil} />
        <Route path="/Vista/Soporte" component={Soporte} />
        {/*<Route component={PageNotFound}/>*/}
    </Switch>
)

export default Navegacion;