import React, { useState } from "react";
import AuthService from "../../Componentes-login/service/auth.service";

const CrearProyecto = (props) => {
    const { handleChange, submitProject } = props;
  const { clientProjectData, userProjectData } = props;
  const token = AuthService.getCurrentUser();

  const [formProyecto, setFormProyecto] = useState({
    nameProject: "",
    startDate: "",
    endDate: "",
    status: "",
    customer: "",
    users: {},
  });
    return(
        <div>
            <div className='conteiner-title-add contenedor-titulo-admin'>
        <span class="material-icons md-13">add_circle_outline</span>
        <h5 className='title-add'>Crear proyecto</h5>
      </div>
    <div className="crear-proyecto">
     
      <form className="contentAdminForm" onSubmit={submitProject}>
        <label className="label-admin label-admin-1">
          Nombre proyecto
        </label>
        <input
          className="input-admin input-admin-1"
          name="nameProject"
          defaultValue={formProyecto.nameProject}
          onChange={(e) => handleChange(e)}
          required
        ></input>
        <label className="label-admin label-admin-2">
          fecha inicio
        </label>
        <input
          className="input-admin input-admin-2"
          name="startDate"
          type="date"
          defaultValue={formProyecto.startDate}
          onChange={(e) => handleChange(e)}
          required
        ></input>
        <label className="label-admin label-admin-3">
          Fecha terminación
        </label>
        <input
          className="input-admin input-admin-3"
          name="endDate"
          type="date"
          defaultValue={formProyecto.endDate}
          onChange={(e) => handleChange(e)}
        ></input>

        <label className="label-admin label-admin-4">Cliente</label>
        <select
          className="input input-admin-4"
          name="customer"
          defaultValue={formProyecto.customer}
          onChange={(e) => handleChange(e)}
          required
        >
          <option>-</option>
          {clientProjectData &&
            clientProjectData.map((client, index) => (
              <option key={index} value={client._id}>
                {client.name}
              </option>
            ))}
        </select>
        {/* <label className="label-admin label-cliente-user">Users</label>
      <select
        className="input input-cliente-user"
        name="users"
        defaultValue={formProyecto.users}
        onChange={(e) => handleChange(e)}
        required
      >
        <option>-</option>
        {userProjectData &&
          userProjectData.map((user, index) => (
          <option key={index} value={user._id}>{user.firstname} {user.lastname}</option>
          ))}
          </select> */}

        <button type="submit" className="btn-crear-proyecto btn">
          + Crear
        </button>
      </form>
    </div>
        </div>
    )
}

export default CrearProyecto;

