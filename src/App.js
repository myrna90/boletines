import React from 'react';
import './App.css';
import './Login.css';
import './Dashboard.css';
import './Boletines.css';
import './MenuToggle.css';
import './cabecera.css';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Soporte from './Components/Soporte';
import Boletines from './Components/Boletines';
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
