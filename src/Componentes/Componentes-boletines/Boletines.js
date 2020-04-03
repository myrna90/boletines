import React, { Component } from 'react';
import FormBoletines from '../Componentes-boletines/FormBoletines';
import UsuarioCabecera from '../Componentes-secundarios/Usuario-cabecera';

class Boletines extends Component {
    render() {
        return (
            <div className="conteiner">
                {/*Contenedor general header */}
                <div className="header">
                    <span className="material-icons md-40">add_circle</span>
                    <h2 className="h2">Crear boletín</h2>
                    <UsuarioCabecera />
                </div>
                <FormBoletines />
            </div>
        )
    }
}
export default Boletines;