import React, { Component } from 'react';

class BotonMenu extends Component {
   constructor(props){
        super(props)
        
    }

    render(){
        return(
            <div className="contenedor-boton">
            <button className="boton btn" onClick={this.props.toggleMenu}>Menu!</button>
            </div>
        )
    }
}

export default BotonMenu;