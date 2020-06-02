import React, { Component } from "react";
import Navegacion from "../Componentes/Navegacion";
import MenuToggle from "../Componentes/Componentes-secundarios/MenuToggle";
class Vista extends Component {
  render() {
    return (
      <div className="conteiner">
        <MenuToggle />
       
          <Navegacion />
        
      </div>
    );
  }
}
export default Vista;
