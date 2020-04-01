import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../Componentes/Componentes-login/Login';
import Dashboard from '../Componentes/Dashboard';
import Soporte from '../Componentes/Soporte';
import Boletines from '../Componentes/Componentes-boletines/Boletines';
import MiPerfil from '../Componentes/MiPerfil';
import BoletinesView from '../Componentes/Componentes-secundarios/BoletinesView';
import Listado from '../Componentes/Componentes-Listado/ListadoBoletines';

const Navegacion = () => (
    
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/Boletines" component={Boletines} />
        <Route path="/Listado" component={Listado} />
        <Route path="/MiPerfil" component={MiPerfil} />
        <Route path="/Soporte" component={Soporte} />
        <Route path="/View" component={BoletinesView} />
        {/*<Route component={PageNotFound}/>*/} 
    </Switch>
        

)

export default Navegacion;