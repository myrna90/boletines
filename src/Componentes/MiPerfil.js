import React, { Component } from 'react';
import UsuarioCabecera from '../Componentes/Componentes-secundarios/Usuario-cabecera';

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
                        <div className="contenedor-vista">
                            <div className="cont-perfil">
                            <div className="div-morado">
                            <div className="div-avatar"><span class="material-icons md-51">account_circle</span></div>
                            <div className="div-nombre">
                                <h4 className="h4-nombre">Myrna Mares</h4>
                                <h5>Ingeniería</h5>
                            </div>
                            </div>
                            <div className="div-info">
                            <div className="correo-time"><span class="material-icons md-25">email</span><p className="p-correo-time">mmares@telenetdemexico.com</p></div>
                            <div className="correo-time"><span class="material-icons md-25">restore</span><p className="p-correo-time">15:30</p></div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default MiPerfil;