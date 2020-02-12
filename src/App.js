import React from 'react';
import './App.css';
import './Login.css';
import './Dashboard.css';
import './Boletines.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Soporte from './components/Soporte';
import Boletines from './components/Boletines';
/*import PrivateRoute from './components/PriveteRoute';*/
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    
      <Router>
      <Route exact path="/" component={Login}/>
      <Route path="/Dashboard" component={Dashboard}/>
      <Route path="/Boletines" component={Boletines}/>
      <Route path="/Soporte" component={Soporte}/>
      </Router>  
      
  );
}

export default App;
