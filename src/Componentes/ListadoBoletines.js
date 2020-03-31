import React, { Component } from 'react';
import MenuToggle from '../Componentes/Componentes-secundarios/MenuToggle';
import UsuarioCabecera from '../Componentes/Componentes-secundarios/Usuario-cabecera';
import Tabla from '../Componentes/TablaListado';


class Listado extends Component{
    
        render() {
            return(
                <div className="conteiner contenedor-dash">
                    <MenuToggle/>
                    <div id="cabecera" className="header">
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