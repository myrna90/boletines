import React from "react";
import CrearProyecto from "./crearProyecto";
import ListadoProyectos from "./listadoProyectos";

const AltaProyecto = (props) => {
  

  return (
    <div className=" div-proyecto">
      <CrearProyecto/>
      <ListadoProyectos/>
    </div>
  );
};

export default AltaProyecto;
