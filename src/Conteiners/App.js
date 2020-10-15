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
import '../Styles/Componentes/Admin.css';
import '../Styles/Componentes/modalShare.css';
import Login from '../Componentes/Componentes-login/Login';
import Vista from './Vista';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import PageNotFound from './Componente-pageNotFound/PageNotFound';

function App() {
  return (
    /*Router de la aplicación */
    <div>
      <Router>
        <Route exact path='/' component={Login} />
        <Route path='/vista'>
          <Vista />
        </Route>
      </Router>
    </div>
  );
}

export default App;
