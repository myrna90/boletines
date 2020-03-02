import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class MenuToggle extends Component {
    constructor(props){
        super(props);
        this.aside = React.createRef();
        this.changeWidth = this.changeWidth.bind(this)
    }

    changeWidth(){
        this.aside.current.style.width = "50px"
    }
    render(){
        return (
            <div className="aside" ref={this.aside}>
            <button id="btn" className="btn" onClick={this.changeWidth}>Menu!</button>
            <div className="menu-toggle">
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
        </div> 
        )
    }
}

export default MenuToggle;