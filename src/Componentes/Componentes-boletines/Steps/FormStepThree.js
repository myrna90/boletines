import React, { useState, useEffect, createRef } from 'react';

const FormStepThree = (props) => {
  const { handleChange } = props;
  const { deviceData } = props;
  const imageProblem = createRef();
  const imageSolution = createRef();
  const [formImage, setFormImage] = useState({
    description: '',
    solution: '',
    problemImage: '',
    solutionImage: '',
    device: '',
    brand: '',
    model: '',
  });

  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      const image = URL.createObjectURL(file);
      imageProblem.current.src = image;
      handleChange(e);
    } else {
      imageProblem.current.src = '';
    }
  };

  const handleImageChangeTwo = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      const image = URL.createObjectURL(file);
      imageSolution.current.src = image;
      handleChange(e);
    } else {
      imageSolution.current.src = '';
    }
  };

  const [selectedDevice, setSelectedDevice] = useState('');
  const [currentDevice, setCurrentDevice] = useState(undefined);

  useEffect(() => {
    if (selectedDevice !== '') {
      setCurrentDevice(
        deviceData.find((device) => device._id === selectedDevice),
      );
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

        {/*Div contenido espacio imagen problema */}
        <div className='contenForm conten-img'>
          <label htmlFor='imgInputProblem' className='label label-img'>
            Problema imagen
          </label>
          <div className=' conten-export-img'>
            <input
              id='imgInputProblem'
              type='file'
              name='problemImage'
              className='inputimg'
              accept='image/jpeg'
              defaultValue={formImage.problemImage}
              onChange={(e) => handleImageChange(e)}
              required
            />
            <img ref={imageProblem} alt='' className='imgExport' />
          </div>
        </div>

        {/*Div contenido espacio imagen solución */}
        <div className='contenForm conten-img2'>
          <label htmlFor='imgInputSolution' className='label label-img'>
            Solución imagen
          </label>
          <div className=' conten-export-img'>
            <div>
              <input
                id='imgInputSolution'
                type='file'
                name='solutionImage'
                className='inputimg'
                accept='image/jpeg'
                defaultValue={formImage.solutionImage}
                onChange={(e) => handleImageChangeTwo(e)}
                required
              />
            </div>
            <img ref={imageSolution} alt='' className='imgExport' />
          </div>
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
              onChange={(e) => {
                handleChange(e);
                setSelectedDevice(e.target.value);
              }}
            >
              <option value='' disabled>
                Seleccione...
              </option>
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
                ¿Cuál de la lista de equipo presentó <br />
                la falla?
              </span>
            </a>
          </div>

          {/*Input marca */}
          <label className=' label label-div2'>Marca</label>
          <div className='div-icon-info'>
            <select
              className='input input-div2'
              name='brand'
              defaultValue={formImage.brand}
              disabled
              onChange={(e) => handleChange(e)}
            >
              <option>-</option>
              <option value={currentDevice ? currentDevice.brand[0]._id : ''}>
                {currentDevice ? currentDevice.brand : ''}
              </option>
            </select>
          </div>

          {/*Input modelo */}
          <label className=' label label-div3'>Modelo</label>
          <div className='div-icon-info'>
            <select
              className='input input-div3'
              name='model'
              defaultValue={formImage.model}
              disabled
              onChange={(e) => handleChange(e)}
            >
              <option>-</option>
              <option value={currentDevice ? currentDevice.model[0]._id : ''}>
                {currentDevice ? currentDevice.model : ''}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormStepThree;
