import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class MenuToggle extends Component {
    constructor(props){
        super(props);
        this.aside = React.createRef();
        this.changeWidth = this.changeWidth.bind(this);
    }
   
    changeWidth(){
        if(this.aside.current.style.width !== '3.44em'){
            this.aside.current.style.width = '3.44em'
        } else {
           this.aside.current.style.width = '12.5em'     
        }
         //this.aside.current.style.width = "3.44em";
    }

    render(){
        return (      
        <div className="aside"  ref={this.aside}>
            <div className="menu-toggle">
            <div className="contenedor-titulo">
                <div class="hamburger" id="btn" onClick={this.changeWidth}>
                <div class="_layer -top"></div>
                <div class="_layer -mid"></div>
                <div class="_layer -bottom"></div>
                </div>
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