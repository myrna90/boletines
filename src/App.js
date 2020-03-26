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
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Componentes-login/Login';
//import PageNotFound from './Componente-pageNotFound/PageNotFound';


function App() {
  return (
    /*Router de la aplicación */
    <div>
      <Router>
      <Route exact path="/" component={Login} />
      <Vista/>
      </Router>
      
    </div>
    
  );
}

export default App;