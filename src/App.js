import React from 'react';
import "ed-grid";
import './App.css';
import "./Login.css";
import "./Dashboard.css";
import "./Boletines.css";
import Login from "./Components/Login"; 
import Dashboard from './Components/Dashboard';
import Boletines from './Components/Boletines';

function App () {
    return (
      /*inicio presentación, se manda a llamar al componente login */
   <div className="Wrapper">
    <div className="Grid-inicio">
        <h1 className="titular-inicio">Boletines</h1>   
    </div>
      <div className="Grid-inicioSesion">
        <div className="text-inicio">
        <h2>Inicie sesión ahora...</h2>
        <p>Su cuenta esta vinculada con el dominio, puede acceder <br></br>al sistema usando las mismas credenciales.</p>
        </div>
        <Login/> 
      </div>

      <Boletines/>
   </div>
      
    );
  }
  
export default App;
