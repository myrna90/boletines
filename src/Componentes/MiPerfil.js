import React, { useContext } from "react";
import context from "../Componentes/Componentes-login/utils/context";
import UsuarioCabecera from "../Componentes/Componentes-secundarios/Usuario-cabecera";
import users from "./users.json";

const MiPerfil = () => {
  
 
  return (
    
    <div className="conteiner contenedor-perfil">
      <div id="cabecera" className="header">
        <div className="div-icon-header">
          <i class="material-icons md-40">person</i>
        </div>
        <div className="div-h2">
          <hr className="v" />
          <h2 className="h2">Perfil</h2>
        </div>
        <UsuarioCabecera />
      </div>
      <div id="contenido" className="contenido contenido-perfil section">
        <div className="contenedor-vista">
          <div className="cont-perfil">
          <div className="div-morado">
          <div className="div-avatar">
            <span class="material-icons md-51">account_circle</span>
          </div>
          <div className="div-nombre">
            <h4 className="h4-nombre">Myrna Mares</h4>
            <h5 className="h5-area">Ingenieria</h5>
          </div>
        </div>
        <div className="div-info">
          <div className="correo-time correo">
            <span class="material-icons md-25">email</span>
            <p className="p-correo-time">mmares@telenetdemexico.com</p>
          </div>
          <div className="correo-time time">
            <span class="material-icons md-25">restore</span>
            <p className="p-correo-time">15:30</p>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiPerfil;
