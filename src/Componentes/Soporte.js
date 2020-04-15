import React, { Component } from 'react';
import UsuarioCabecera from '../Componentes/Componentes-secundarios/Usuario-cabecera';

class Soporte extends Component {

    render() {
        return (
            <div className="contenedor conteiner">
                <div className="cabecera-soporte header">
                    <div className="div-icon-header">
                        <i class="material-icons md-40">help_outline</i>
                    </div>
                    <div className="div-h2">
                        <hr className="v" />
                        <h2 className="h2">Soporte</h2>
                    </div>
                    <UsuarioCabecera />
                </div>
                <div className="contenido-soporte section">

                </div>
            </div>
        )
    }
}

export default Soporte;