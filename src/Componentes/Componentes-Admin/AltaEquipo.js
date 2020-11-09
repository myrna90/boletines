import React from "react";
import { useState } from "react";

const AltaDevice = (props) => {
  const { handleChange, submitDevice } = props;

  const [formDevice, setFormDevice] = useState({
    name: "",
    model: "",
    brand: ""
  });
  return (
    <div className="div div-Device">
      <div className="conteiner-numero numero-div1">
        <div className="numero">5</div>
        <strong>
          <p className="p">Equipo</p>
        </strong>
      </div>
      <form className="contenFormDevice" onSubmit={submitDevice}>
        <label className="label-admin label-device-admin">
          Nombre equipo
        </label>
        <input
          className="input-admin input-device-admin"
          name="name"
          defaultValue={formDevice.name}
          onChange={(e) => handleChange(e)}
          required
        ></input>
        <label className="label-admin label-device">Marca</label>
        <input
          className="input-admin input-fecha input-device"
          name="brand"
          defaultValue={formDevice.brand}
          onChange={(e) => handleChange(e)}
          required
        ></input>
        <label className="label-admin label-device-2">
          Modelo
        </label>
        <input
          className="input-admin input-fecha input-device-2"
          name="model"
          defaultValue={formDevice.model}
          onChange={(e) => handleChange(e)}
        ></input>

        <button type="submit" className="btn-crear-Device btn">
          + Crear
        </button>
      </form>
    </div>
  );
};

export default AltaDevice;

