import React from "react";
import { useState } from "react";

const AltaUsuario = (props) => {
  const { handleChange, submitUser } = props;

  const [formUsuario, setFormUsuario] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    username: "",
    role: "",
    //area: ""
  });

  return (
    <div className="div div-usuario">
      <div className="conteiner-numero numero-div1">
        <div className="numero">4</div>
        <strong>
          <p className="p">Usuario</p>
        </strong>
      </div>
      <form className="contenFormUsuario" onSubmit={submitUser}>
        <label className="label-admin label-usuario">Nombre</label>
        <input
          className="input-admin input-usuario-alta"
          name="firstname"
          defaultValue={formUsuario.firstname}
          onChange={(e) => handleChange(e)}
          required
        ></input>
        <label className="label-admin label-usuario-2">Apellido</label>
        <input
          className="input-admin input-usuario-2"
          name="lastname"
          defaultValue={formUsuario.lastname}
          onChange={(e) => handleChange(e)}
          required
        ></input>
        <label className="label-admin label-usuario-3">Email</label>
        <input
          className="input-admin input-usuario-3"
          name="email"
          defaultValue={formUsuario.email}
          onChange={(e) => handleChange(e)}
          required
        ></input>
        <label className="label-admin label-usuario-4">Contraseña</label>
        <input
          className="input-admin input-usuario-4"
          name="password"
          type="password"
          defaultValue={formUsuario.password}
          onChange={(e) => handleChange(e)}
          required
        ></input>
        <label className="label-admin label-usuario-5">User name</label>
        <input
          className="input-admin input-usuario-5"
          name="username"
          defaultValue={formUsuario.username}
          onChange={(e) => handleChange(e)}
          required
        ></input>
        <label className="label-admin label-usuario-6">Rol</label>
        <select
          className="input-admin input-usuario-6"
          name="role"
          defaultValue={formUsuario.role}
          onChange={(e) => handleChange(e)}
        >
          <option>-</option>
          <option value={Boolean(true)} >Administrador</option>
          <option value={Boolean(false)}>Usuario</option>
        </select>
        {/* <label className="label-admin label-usuario-7">Área</label>
        <input
          className="input-admin input-usuario-7"
          name="area"
          defaultValue={formUsuario.area}
          onChange={(e) => handleChange(e)}
        ></input> */}

        <button type="submit" className="btn-crear-usuario btn">
          + Crear
        </button>
      </form>
    </div>
  );
};

export default AltaUsuario;
