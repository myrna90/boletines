import React, { useState, useEffect } from "react";
import FormStepOne from "./Steps/FormStepOne";
import FormStepTwo from "./Steps/FormStepTwo";
import FormStepThree from "./Steps/FormStepThree";
import FormStepFour from "./Steps/FormStepFour";
import axios from 'axios';



const FormBoletines = (props) => {
  /*Es un destructure al obejeto props y sacamos esa variable, para no tener que hacer props.handleChange */
  const {formFolio, formImage, image, imageTwo, formProyecto, formUsuario} = props;
  const [formData, setFormData] = useState({
    formFolio, formImage, image, imageTwo, formProyecto, formUsuario
  });
  const [data, setData] = useState([])
  const { handleChange } = props;


  useEffect(() => {
    fetch('http://localhost:3000/api/boletines')
      .then((res) => res.json())
      .then((result) => setData(result.rows))
      .catch((err) => console.log('error'))
  }, []);


  const eventHandler = (event) => {
    fetch('http://localhost:3000/api/boletines/add', {
      headers: 'Access-Control-Allow-Origin',
      method: 'POST',
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setFormData('')
      })
      .catch((err) => console.log('error'));
      console.log(eventHandler());
  }

  return (
    <div className="contenido section ">
      {/*Contenedor el cual muestra el fomulario para llenar los campos requeridos */}
      <form className="contenido-form" onSubmit={eventHandler()}>
        <FormStepOne handleChange={handleChange}/>
        <FormStepTwo handleChange={handleChange}/>
        <FormStepThree handleChange={handleChange}/>
        <FormStepFour handleChange={handleChange}/>
        <button
            type="submit"
            className="btn-crear btn">
            + Crear
            
          </button>
      </form>
    </div>
  );
};

export default FormBoletines;
