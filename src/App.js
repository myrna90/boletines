import React from 'react';
import './App.css';
import './Login.css';
import './Dashboard.css';
import './Boletines.css';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Soporte from './Components/Soporte';
import Boletines from './Components/Boletines';
/*import PrivateRoute from './components/PriveteRoute';*/
import { BrowserRouter as Router, Route } from "react-router-dom";
import ForgoPassword from './Components/ForgotPassword';


function App() {
  return (

    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/Dashboard" component={Dashboard} />
      <Route path="/Boletines" component={Boletines} />
      <Route path="/Soporte" component={Soporte} />
      <Route path="/ForgotPassword" component={ForgoPassword}/>
    </Router>
  );
}

export default App;
