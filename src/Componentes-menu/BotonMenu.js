import React, { Component } from 'react';

class BotonMenu extends Component {
   constructor(props){
        super(props)
        
    }
    render(){
        return(
        <div className="contenedor-boton boton-boletines">
        <button id="btn" className="boton-dash boton-boletines btn" onClick={this.props.toggleMenu}>Menu!</button>
        </div>
        )
    }
}

export default BotonMenu;