import React, { Component } from 'react';
import FormBoletines from '../Componentes-boletines/FormBoletines';
import UsuarioCabecera from '../Componentes-secundarios/Usuario-cabecera';

class Boletines extends Component {
    render() {
        return (
            <div className="conteiner">
                {/*Contenedor general header */}
                <div className="header">
                    <div className="div-icon-header">
                    <span className="material-icons md-40">add_circle</span>
                    </div>
                    <div className="div-h2">
                    <hr className="v" />
                    <h2 className="h2">Crear boletín</h2>
                    </div>
                    <UsuarioCabecera />
                </div>
                <FormBoletines />
            </div>
        )
    }
}
export default Boletines;