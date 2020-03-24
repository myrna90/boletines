import React, { Component } from 'react';
import MenuToggle from '../Componentes-secundarios/MenuToggle';
import UsuarioCabecera from '../Componentes-secundarios/Usuario-cabecera';

class Soporte extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ visible: !this.state.visible })
    }
    render() {
        return (
            <div className="contenedor conteiner">
                <MenuToggle />
                <div className="cabecera-soporte header">
                    <i class="material-icons md-40">help_outline</i>
                    <h2 className="h2">Soporte</h2>
                    <UsuarioCabecera />
                </div>
                <div className="contenido-soporte section">

                </div>
            </div>
        )
    }
}

export default Soporte;