import React, { useState } from "react";


const AltaCliente = (props) => {
  const {handleChange, submitClient} = props;

  const [ formClient, setFormCliente ] = useState({
    name: "",
    location: ""
  });

  const cleareState  = () => {
    setFormCliente({name: "",
    location: ""})
  }

  return (
    <div className="div div-cliente">
      <div className="conteiner-numero numero-div1">
        <div className="numero">1</div>
        <strong>
          <p className="p">Cliente</p>
        </strong>
      </div>
      <form className="contenFormClient" onSubmit={submitClient}>
        <label className="label-admin label-cliente-admin">Nombre cliente</label>
        <input
          className="input-admin input-cliente-admin"
          name="name"
          defaultValue={formClient.name}
          onChange={(e) => handleChange(e)}
          required
          
        ></input>
        <label className="label-admin label-cliente-2">Locación</label>
        <input
          className="input-admin input-cliente-2"
          name="location"
          defaultValue={formClient.location}
          onChange={(e) => handleChange(e)}
          required
        ></input>

        <button
            type="submit"
            className="btn-crear-cliente btn">
            + Crear
          </button>
      </form>
    </div>
  );
};

export default AltaCliente;
