import React from 'react';
import './App.css';
import './Login.css';
import './Dashboard.css';
import './Boletines.css';
import './MenuToggle.css';
import './cabecera.css';
import './Perfil.css';
import './Soporte.css';
import './BoletinesView.css';
import Vista from './Vista';
import Dashboard from './Componente-dashboard/Dashboard';
import Soporte from './Componentes-soporte/Soporte';
import Boletines from './Componentes-boletines/Boletines';
import MiPerfil from './Componente-myprofile/MiPerfil';
import BoletinesView from './Componentes-secundarios/BoletinesView';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Componentes-login/Login';
//import PageNotFound from './Componente-pageNotFound/PageNotFound';


function App() {
  return (
    /*Router de la aplicación */
    
    <Router className="div-componentes">
    <Route exact path="/" component={Login} />
    <Route path="/Dashboard" component={Dashboard}/>
    <Route path="/Boletines" component={Boletines} />
    <Route path="/MiPerfil" component={MiPerfil} />
    <Route path="/Soporte" component={Soporte} />
    <Route path="/BoletinesView" component={BoletinesView} />
    {/*<Route component={PageNotFound}/>*/}
    </Router>
    
  );
}

export default App;