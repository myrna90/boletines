import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "ed-grid";
import './App.css';
import Inicio from "./Components/Inicio"; 
import Deshboard from "./Components/Deshboard";

function App () {
    return (
   <div className="Wrapper">
    <div className="Grid-route">
        <h2>Boletin</h2>
        <Router>     
            <ul>
              <li><Link to= "/">Inicio</Link></li>
              <li><Link to="/Deshboard" >Deshboard</Link></li>
              <Link></Link>
            </ul>     
          <Route path="/"/>
          <Route path="/Deshboard" component= {Deshboard}/>         
        </Router>
    </div>
      <div className="Grid-inicio">
        <h2>Inicio</h2>
      </div>
   </div>
      
    );
  }
  
export default App;
