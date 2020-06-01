import React, { Component } from "react";
import UsuarioCabecera from "../Componentes-secundarios/Usuario-cabecera";
import Tabla from "./TablaListado";

class Listado extends Component {
  /*constructor()*/
  render() {
    return (
      <div className="conteiner contenedor-dash contenedor-listado">
        <div id="cabecera" className="header">
          <div className="div-icon-header">
            <span class="material-icons md-40">view_list</span>
          </div>
          <div className="div-h2">
            <hr className="v" />
            <h2 className="h2">Listado</h2>
          </div>
          <UsuarioCabecera />
        </div>
        <div className="contenido contenido-list section">
          <Tabla />
        </div>
      </div>
    );
  }
}

export default Listado;
