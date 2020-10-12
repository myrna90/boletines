import React, { useState } from 'react';

const FormStepOne = (props) => {
  const { handleChange } = props;

  const [formFolio, setFormFolio] = useState({ title: '' });

  return (
    /*parte del fomulario para llenar folio */
    <div className='div div-1'>
      <div className='conteiner-numero numero-div1'>
        <div className='numero'>1</div>
        <strong>
          <p className='p'>Boletin</p>
        </strong>
      </div>
      <div className='contenForm1'>
        <label className='label label-div1'>Titulo</label>
        <input
          className='input input-div1'
          name='title'
          defaultValue={formFolio.titulo}
          onChange={(e) => handleChange(e)}
          required
        ></input>
      </div>
    </div>
  );
};

export default FormStepOne;
