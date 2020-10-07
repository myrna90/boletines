import React, { useState, useEffect } from 'react';

const FormStepThree = (props) => {
  const { handleChange } = props;
  const { deviceData } = props;

  const [formImage, setFormImage] = useState({
    device: '',
    brand: '',
    model: '',
    description: '',
    //imgProblema: "",
    solution: '',
    //imgSolucion: ""
  });


  const [selectedDevice, setSelectedDevice] = useState("");
  const [currentDevice, setCurrentDevice] = useState(undefined);

  useEffect(() => {
    if(selectedDevice !== '') {
      setCurrentDevice(deviceData.find(device => device._id === selectedDevice))  
    }   
  }, [selectedDevice, deviceData]);

  return (
    /*parte del formulario para descripcion y solución del problema */
    <div className='div div-3'>
      {/*Div contenido espacio descripción, imagenes y solución */}
      <div className='conteiner-numero numero-div3'>
        <div className='numero'>3</div>
        <strong>
          <p className='p'>Descripción</p>
        </strong>
      </div>
      <div className='div1 div3-content'>
        {/*Div contenido espacio descripción problema*/}
        <div className='contenForm'>
          <label className='label label-text-area'>
            Descripción del problema
          </label>
          <textarea
            className=' text-problema text'
            name='description'
            minLength={10}
            defaultValue={formImage.description}
            onChange={(e) => handleChange(e)}
            required
          ></textarea>
        </div>

        {/*Div contenido espacio descripción solución*/}
        <div className='contenForm2'>
          <label className='label label-text-area '>
            Solución del problema
          </label>
          <textarea
            className=' text-solucion text'
            name='solution'
            minLength={10}
            defaultValue={formImage.solution}
            onChange={(e) => handleChange(e)}
            required
          ></textarea>
        </div>

        {/*Div contenido inputs equipo, modelo, marca */}
        <div className='content-inputs'>
          {/*Input equipo */}
          <label className=' label label-div'>Equipo</label>
          <div className='div-icon-info'>
            <select
              className='input input-div'
              name='device'
              defaultValue={formImage.device}
              onChange={(e) => {handleChange(e); 
                setSelectedDevice(e.target.value)
                }}
            >
              <option>-</option>
              {deviceData &&
                deviceData.map((device, index) => (
                  <option key={index} value={device._id}>
                    {device.name}
                  </option>
                ))}
            </select>
            <a className='caja3'>
              <span className='material-icons md-4'>info</span>
              <span className='info'>
                Seleccionar proyecto <br />
                donde ocurrio el problema
              </span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FormStepThree;
