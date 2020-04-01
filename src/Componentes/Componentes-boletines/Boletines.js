import React, { Component, Fragment } from 'react';
import FormBoletines from '../Componentes-boletines/FormBoletines';
import UsuarioCabecera from '../Componentes-secundarios/Usuario-cabecera';

class Boletines extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="conteiner">
                {/*Contenedor general header */}
                <div className="header">
                    <span class="material-icons md-40">add_circle</span>
                    <h2 className="h2">Crear boletín</h2>
                    <UsuarioCabecera />
                </div>
                <FormBoletines />
            </div>
        )
    }
}
export default Boletines;