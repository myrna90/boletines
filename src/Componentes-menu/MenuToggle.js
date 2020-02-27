import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Menu from './Menu';


/*Componente el cual contiene el menú que renderiza en el dashboard, 
al igual que las funciones para hacerlo visible y cuando cambia el estado del botón */
class MenuToggle extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
        <React.Fragment>
            {this.props.visible && 
            <div className="menu">
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
            </div> }
        </React.Fragment>
            
           
        )
    }
}


export default MenuToggle;