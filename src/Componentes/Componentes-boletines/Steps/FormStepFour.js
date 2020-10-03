import React, { Component } from "react";
import { useState } from "react";
import AuthService from '../../Componentes-login/service/auth.service';
import { API_BASE_URL } from '../../../configuration';

const FormStepFour = (props) => {
  const { handleChange } = props;
  const { userData } = props;
  const currentUser = AuthService.getCurrentUser();

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
          <input className="input input-user"
            name="owner"
            defaultValue={formUsuario.owner}
            onChange={(e) => handleChange(e)}
            required 
            disabled={true}
            value={`${currentUser.user.firstname} ${currentUser.user.lastname}`}/>
        </div>
      </div>

      <div className="contenForm conteinerForm-3">
        <label className="label">Departamento</label>
        <div className="div-icon-info">
          <input
            className="input input-user-2"
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
