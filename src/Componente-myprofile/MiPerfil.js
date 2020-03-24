import React, { Component } from 'react';
import MenuToggle from '../Componentes-secundarios/MenuToggle';
import UsuarioCabecera from '../Componentes-secundarios/Usuario-cabecera';

class MiPerfil extends Component {
    render() {
        return (
            <div className="conteiner contenedor-perfil">
                <MenuToggle />
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
                        <div className="conten-p">
                            <div className="email"><p className="p-perfil ">mmares@telenetdemexico.com</p></div>
                            <div className="nombre"><p className="p-perfil ">Myrna Mares</p></div>
                            <div className="area"><p className="p-perfil ">Ingeniería</p></div>
                            <div className="hora"><p className="p-perfil ">Ultima conexión: 15:30</p></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MiPerfil;