import React, {Component} from 'react';
import MenuToggle from '../Componentes-menu/MenuToggle';

class MiPerfil extends Component {
    render(){
        return(
            <div className="conteiner contenedor-perfil">
                <MenuToggle/>
                <div id="cabecera" className="header">
                <i class="material-icons md-48">person</i>
                <h1 className="h1">Perfil</h1>
                </div>
                <div id="contenido" className="contenido contenido-perfil section">

                </div>
            </div>
        )
    }
}

export default MiPerfil;