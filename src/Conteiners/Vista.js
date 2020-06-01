import React, { Component } from "react";
import Navegacion from "../Componentes/Navegacion";
import MenuToggle from "../Componentes/Componentes-secundarios/MenuToggle";
import Context from "../Componentes/Componentes-login/utils/context";

class Vista extends Component {
  render() {
    return (
      <div className="conteiner">
        <MenuToggle />
        <Context.Provider>
          <Navegacion />
        </Context.Provider>
      </div>
    );
  }
}
export default Vista;
