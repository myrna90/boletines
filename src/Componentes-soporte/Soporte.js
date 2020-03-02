import React, { Component } from 'react';
import MenuToggle from '../Componentes-menu/MenuToggle';

class Soporte extends Component{
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
            <div className="contenedor conteiner">
              <MenuToggle/>
              <div className="cabecera-soporte header">
                  <i class="material-icons md-48">help_outline</i>
                  <h1 className="h1">Soporte</h1>
                  </div>
              <div className="contenido-soporte section">
                  
              </div>
            </div>
        )
    }
}

export default Soporte;