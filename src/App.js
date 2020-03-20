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
import Login from './Componentes-login/Login';
import Dashboard from './Componente-dashboard/Dashboard';
import Soporte from './Componentes-soporte/Soporte';
import Boletines from './Componentes-boletines/Boletines';
import MiPerfil from './Componente-myprofile/MiPerfil';
//import PageNotFound from './Componente-pageNotFound/PageNotFound';
import { BrowserRouter as Router, Route } from "react-router-dom";
import BoletinesView from './Componente-dashboard/BoletinesView';


function App() {
  return (
    /*Router de la aplicación */
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/Dashboard" component={Dashboard} />
      <Route path="/Boletines" component={Boletines} />
      <Route path="/MiPerfil" component={MiPerfil}/>
      <Route path="/Soporte" component={Soporte} />
      <Route path="/BoletinView" component={BoletinesView}/>
      {/*<Route component={PageNotFound}/>*/}
    </Router>
  );
}

export default App;