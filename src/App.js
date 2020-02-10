import React from 'react';
import "ed-grid";
import './App.css';
import "./Login.css";
import "./Dashboard.css";
import "./Boletines.css";
import Login from "./Components/Login";
import Soporte from "./Components/Soporte"; 
import Dashboard from './Components/Dashboard';
import Boletines from './Components/Boletines';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App () {
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
