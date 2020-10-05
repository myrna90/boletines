import React from 'react';
import { useState } from 'react';

const AltaSistema = (props) => {
  const {handleChange, submitSystem} = props;
  
  const [formSistema, setFormSistema] = useState({
    name: ""
  });


    return(
        <div className="div div-sistema">
      <div className="conteiner-numero numero-div1">
        <div className="numero">3</div>
        <strong>
          <p className="p">Sistema</p>
        </strong>
      </div>
      <form className="contenFormSistema" onSubmit={submitSystem}>
        <label className="label-admin label-sistema-admin">Nombre sistema</label>
        <input
          className="input-admin input-sistema-admin"
          name="name"
          defaultValue={formSistema.name}
          onChange={(e) => handleChange(e)}
          required
        ></input>

        <button
            type="submit"
            className="btn-crear-sistema btn">
            + Crear
        </button>
      </form>
    </div>
    )
}

export default AltaSistema;