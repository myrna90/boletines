import React, { Component } from 'react';
import UsuarioCabecera from '../Componentes-secundarios/Usuario-cabecera';
import Tabla from './TablaListado';


class Listado extends Component{
    
        render() {
            return(
                <div className="conteiner contenedor-dash">
                    <div id="cabecera" className="header">
                    <span class="material-icons md-40">view_list</span>
                    <h2 className="h2">Listado</h2>
                    <UsuarioCabecera />
                    </div>
                    <div className="contenido contenido-list section">
                    <Tabla/>
                    </div>
                </div>
                )
        }
}

export default Listado;