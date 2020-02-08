import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Login";
import Boletines from "./Boletines";
import Soporte from "./Soporte";

class Dashboard extends Component {
    render(){
        return(
            <div className="Grid-general">
             {/* Dashboard menu & boletines publicados*/}
            <div className="menu manuDash">
              <div className="Grid-titulo">
              <h3 className="Grid-h3">Boletines</h3>
              <div className="Grid-btn">
              <button className="btn-config"><img className="img" src="https://image.flaticon.com/icons/svg/1790/1790042.svg"/></button>
              </div>
              </div>
            
            <Router>
            <Link to="/Dashboard" className="Link">Dashboard</Link>
            <Link to="/Boletines" className="Link">Boletines</Link>
            <Link to="/Soporte" className="Link">Soporte</Link>
            <Link to="/Login" className="Link">Salir</Link>
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/Dashboard" component={Dashboard}/>
            <Route exact path="/Boletines" component={Boletines}/>
            <Route exact path="/Soporte" component={Soporte}/>
            </Router>
            
            </div>
            <div className="viewBolet">

            <div className="grid-cabecera">
            <img className="img img-margin" src="https://image.flaticon.com/icons/svg/1828/1828765.svg"/>
            <h1 className="h1">Dashboard</h1>
            </div>

            <div className="grid-contentDash">
            <div className="grid-publicados">
                <h3 className="h3">Boletines</h3>
            <div>
            <input className="form-bol"/><br/>
            <input className="form-bol"/><br/>
            <input className="form-bol"/><br/>
            <input className="form-bol"/>
            </div>
              </div>
              <div className="grid-proyectos">
                <h3 className="h3">Mis proyectos</h3>
              </div>
            </div>
             
            </div>
          
          </div>
        )
    }
}

export default Dashboard;