import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ButtonMenu from './ButtonMenu';


class Dashboard extends Component {
    render(){
        return(
            <div className="contenedor contenedor-dash">

              <div className="menu">
                {/*<ButtonMenu/>*/}
                <div className="contenedor-titulo">
                <h3 className="h3">Boletines</h3>
                <div className="btn-config">
                <i  class="material-icons">settings_applications</i>
                </div>
                </div>
              <div className="nav-menu">
              <Link to="/Dashboard" className="Link"><i class="material-icons md-24">dashboard</i><div className="text-menu">Dashboard</div></Link>
              <Link to="/Boletines" className="Link"><i class="material-icons md-24">line_weight</i><div className="text-menu">Boletines</div></Link>
              <Link to="/Soporte" className="Link"><i class="material-icons md-24">help_outline</i><div className="text-menu">Soporte</div></Link>
              <Link to="/" className="Link link-out"><i class="material-icons md-24">exit_to_app</i><div className="text-menu">Salir</div></Link>
              </div>
              
              </div>


              <div className="cabecera">
                <i class="material-icons md-48">dashboard</i>
              <h1 className="h1">Dashboard</h1>
              </div>

              <div className="contenido-dash">
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