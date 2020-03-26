import React from 'react';
import MenuToggle from './Componentes-secundarios/MenuToggle';
import Dashboard from './Componente-dashboard/Dashboard';
import Soporte from './Componentes-soporte/Soporte';
import Boletines from './Componentes-boletines/Boletines';
import MiPerfil from './Componente-myprofile/MiPerfil';
import BoletinesView from './Componentes-secundarios/BoletinesView';
import { BrowserRouter as Router, Route } from "react-router-dom";


function Vista() {
    return (
        <div className="conteiner-vista">
            <MenuToggle className="div-menu" />
            <div>
                <Router className="div-componentes">
                    <Route path="/Dashboard" component={Dashboard} />
                    <Route path="/Boletines" component={Boletines} />
                    <Route path="/MiPerfil" component={MiPerfil} />
                    <Route path="/Soporte" component={Soporte} />
                    <Route path="/BoletinesView" component={BoletinesView} />
                    {/*<Route component={PageNotFound}/>*/}
                </Router>
            </div>
        </div>
    )
}

export default Vista;