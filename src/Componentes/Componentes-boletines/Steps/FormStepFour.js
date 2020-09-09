import React, { Component } from "react";
import { useState } from "react";

const FormStepFour = (props) => {
  const { handleChange } = props;

  const [formUsuario, setFormUsuario] = useState({
    owner: "",
    departamento: "",
  });
  return (
    /*parte del formulario para completar datos del usuario */
    <div className="div div-4">
      <div className="conteiner-numero numero-div4">
        <div className="numero">4</div>
        <strong>
          <p className="p">Usuario</p>
        </strong>
      </div>
      <div className="contenForm conteinerForm-2">
        <label className="label">Reporta</label>
        <div className="div-icon-info">
          <input
            className="input"
            name="owner"
            defaultValue={formUsuario.owner}
            onChange={(e) => handleChange(e)}
            required
          ></input>
        </div>
      </div>

      <div className="contenForm conteinerForm-3">
        <label className="label">Departamento</label>
        <div className="div-icon-info">
          <input
            className="input"
            name="departamento"
            defaultValue={formUsuario.departamento}
            onChange={(e) => handleChange(e)}
            required
          ></input>
        </div>
      </div>
    </div>
  );
};

export default FormStepFour;
