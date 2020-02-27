import React, { Component } from 'react';
import CabeceraDashboard from './CabeceraDashboard';
import {Link} from 'react-router-dom';
import Menu from './Menu';

/*Componente Dashboard dentro se manda a llamar a los componentes MenuToglle y Cabecera, 
se separaron los contenedores grid, para poder dar una mejor funcionalidad al codigó */
class Dashboard extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            visible: true  
        };
    
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    
    toggleMenu() {
        this.setState({visible: !this.state.visible})
    }
    render(){
        return(
            <div className="contenedor contenedor-dash">
            
            {this.state.visible &&
            <div className="menu" >
            <div className="menu-toggle">
            <div className="contenedor-titulo">
              <h3 className="h3">Boletines</h3>
              <div className="btn-config">
              <i  class="material-icons">settings_applications</i>
              </div>
              </div>
              <div className="nav-menu">
              <Menu alignment="right">
              <Link to="/Dashboard" className="Link"><i class="material-icons md-24">dashboard</i><div className="text-menu">Dashboard</div></Link>
              <Link to="/Boletines" className="Link"><i class="material-icons md-24">line_weight</i><div className="text-menu">Boletines</div></Link>
              <Link to="/Soporte" className="Link"><i class="material-icons md-24">help_outline</i><div className="text-menu">Soporte</div></Link>
              <Link to="/" className="Link link-out"><i class="material-icons md-24">exit_to_app</i><div className="text-menu">Salir</div></Link>
            </Menu>
              </div>
            </div> 
            </div>}

            <CabeceraDashboard/>
              <div id="contenido" className="contenido-dash">
              <div className="grid-contentDash">
              <div className="conten-boton">
                  <button className="boton" onClick={this.toggleMenu}>Menu!</button>
              </div>
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