import React, { Component } from 'react';
import MenuToggle from '../Componentes-secundarios/MenuToggle';
import FormBoletines from '../Componentes-boletines/FormBoletines';
import UsuarioCabecera from '../Componentes-secundarios/Usuario-cabecera';

class Boletines extends Component {
    render() {
        return (
            /*contenedor general */
            <div className="conteiner">
                {/* contenedor menu*/}
                <MenuToggle />
                {/*Contenedor general header */}
                <div className="header">
                    <i class="material-icons md-40">line_weight</i>
                    <h2 className="h2">Crear boletín</h2>
                    <UsuarioCabecera />
                </div>
                <FormBoletines />
            </div>

        )
    }
}
export default Boletines;