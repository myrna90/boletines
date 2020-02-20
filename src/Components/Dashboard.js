import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Dashboard extends Component {
    render(){
        return(
            <div className="contenedor">

              <div className="menu">
                <div className="contenedor-titulo">
                <h3 className="h3">Boletines</h3>
                <div className="btn-config">
                </div>
                </div>
              

              <div className="nav-menu">
              <Link to="/Dashboard" className="Link"><div className="img-dash-menu img"><div className="text-menu">Dashboard</div></div></Link>
              <Link to="/Boletines" className="Link"><div className="img-bole-menu img"><div className="text-menu">Boletines</div></div></Link>
              <Link to="/Soporte" className="Link"><div className="img-soperte-menu img"><div className="text-menu">Soporte</div></div></Link>
              <Link to="/" className="Link link-out"><div className="img-out-menu img"><div className="text-menu">Salir</div></div></Link>
              </div>
              </div>


              <div className="cabecera">
              <div className="img-dash"></div>
              <h1 className="h1">Dashboard</h1>
              </div>

              <div className="contenido">
              <div className="grid-contentDash">
              <div className="grid-publicados">
              <h4 className="h4">Boletines</h4>
              </div>
              <div className="grid-proyectos">
              <h4 className="h4">Mis proyectos</h4>
              </div>
              </div>
              </div>
            </div>
            
        )
    }
}

export default Dashboard;