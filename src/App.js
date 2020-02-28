import React from 'react';
import './App.css';
import './Login.css';
import './Dashboard.css';
import './Boletines.css';
import './MenuToggle.css';
import './cabecera.css';
import Login from './Componentes-login/Login';
import Dashboard from './Componente-dashboard/Dashboard';
import Soporte from './Componentes-soporte/Soporte';
import Boletines from './Componentes-boletines/Boletines';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    /*Router de la aplicación */
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/Dashboard" component={Dashboard} />
      <Route path="/Boletines" component={Boletines} />
      <Route path="/Soporte" component={Soporte} />
    </Router>
  );
}

export default App;
