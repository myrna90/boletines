import React, { Component } from 'react';
import MenuToggle from '../Componentes-secundarios/MenuToggle';
import UsuarioCabecera from '../Componentes-secundarios/Usuario-cabecera';

class MiPerfil extends Component {
    render() {
        return (
            <div className="conteiner contenedor-perfil">
                <div id="cabecera" className="header">
                    <i class="material-icons md-40">person</i>
                    <h2 className="h2">Perfil</h2>
                    <UsuarioCabecera />
                </div>
                <div id="contenido" className="contenido contenido-perfil section">
                    <div className="view mi-perfil">
                        <div id="rectangle" className="titulo-view">
                            <h3 className="h3-bol">Información perfil</h3>
                        </div>
                        <div className="contenedor-vista">
                            <div className="cont-perfil">
                            <div className="div-morado"></div>
                            <div className="div-avatar"></div>
                            <div className="div-nombre"></div>
                            <div className="div-info"></div>
                            </div>
                            <div className="cont-perfil2"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MiPerfil;