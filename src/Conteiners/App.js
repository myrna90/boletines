import React from 'react';
import '../Styles/App.css';
import '../Styles/Componentes/Login.css';
import '../Styles/Componentes/Dashboard.css';
import '../Styles/Componentes/Boletines.css';
import '../Styles/Componentes/MenuToggle.css';
import '../Styles/Componentes/cabecera.css';
import '../Styles/Componentes/Perfil.css';
import '../Styles/Componentes/Soporte.css';
import '../Styles/Componentes/BoletinesView.css';
import '../Styles/Componentes/Listado.css';
import Login from '../Componentes/Componentes-login/Login';
import Dashboard from '../Componentes/Dashboard';
import Soporte from '../Componentes/Soporte';
import Boletines from '../Componentes/Componentes-boletines/Boletines';
import MiPerfil from '../Componentes/MiPerfil';
import BoletinesView from '../Componentes/Componentes-secundarios/BoletinesView';
import Listado from '../Componentes/Componentes-Listado/ListadoBoletines';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import PageNotFound from './Componente-pageNotFound/PageNotFound';


function App() {
  return (
    /*Router de la aplicación */
    
    <Router className="div-componentes">
    <Route exact path="/" component={Login} />
    <Route path="/Dashboard" component={Dashboard}/>
    <Route path="/Boletines" component={Boletines} />
    <Route path="/Listado" component={Listado}/>
    <Route path="/MiPerfil" component={MiPerfil} />
    <Route path="/Soporte" component={Soporte} />
    <Route path="/View" component={BoletinesView} />
    {/*<Route component={PageNotFound}/>*/}
    </Router>
    
  );
}

export default App;