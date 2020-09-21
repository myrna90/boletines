import React, {useState, useEffect} from "react";
import axios from 'axios';

const AltaProyecto = (props) => {
  const { handleChange, submitProject } = props;
  const { clientProjectData } = props;

  const [formProyecto, setFormProyecto] = useState({
    nameProject: "",
    startDate: "",
    endDate: "",
    status: "",
    customer: ""
  });


  return (
    <div className="div div-proyecto">
      <div className="conteiner-numero numero-div1">
        <div className="numero">2</div>
        <strong>
          <p className="p">Proyecto</p>
        </strong>
      </div>
      <form className="contenFormProyecto" onSubmit={submitProject}>
        <label className="label-admin label-proyecto-admin">
          Nombre proyecto
        </label>
        <input
          className="input-admin input-proyecto-admin"
          name="nameProject"
          defaultValue={formProyecto.nameProject}
          onChange={(e) => handleChange(e)}
          required
        ></input>
        <label className="label-admin label-cliente-fecha">fecha inicio</label>
        <input
          className="input-admin input-fecha input-cliente-fecha"
          name="startDate"
          type="date"
          defaultValue={formProyecto.startDate}
          onChange={(e) => handleChange(e)}
          required
        ></input>
        <label className="label-admin label-cliente-fecha2">
          Fecha terminación
        </label>
        <input
          className="input-admin input-fecha input-cliente-fecha2"
          name="endDate"
          type="date"
          defaultValue={formProyecto.endDate}
          onChange={(e) => handleChange(e)}
        ></input>

<label className="label-admin label-cliente-cliente">
          Cliente
        </label>
        <select
          className="input input-cliente-cliente"
          name="customer"
          defaultValue={formProyecto.customer}
          onChange={(e) => handleChange(e)}
          required
        >
          <option>-</option>
          {clientProjectData && clientProjectData.map((client) => (
            <option value={client._id}>{client.name}</option>
          ))}
        </select>

        <button type="submit" className="btn-crear-proyecto btn">
          + Crear
        </button>
      </form>
    </div>
  );
};

export default AltaProyecto;
