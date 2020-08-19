import React, { useState, useEffect } from "react";
import FormStepOne from "./Steps/FormStepOne";
import FormStepTwo from "./Steps/FormStepTwo";
import FormStepThree from "./Steps/FormStepThree";
import FormStepFour from "./Steps/FormStepFour";




const FormBoletines = (props) => {
  /*Es un destructure al obejeto props y sacamos esa variable, para no tener que hacer props handleChange*/
  const { handleChange, handleSubmit } = props;

  /*useEffect(() => {
    fetch('http://localhost:3000/api/boletines')
      .then((res) => res.json())
      .then((res) => setFormValues(res.rows))
      .catch((err) => console.log('error'))
  }, []);*/

  
  /*const handleSubmit = (event) => {
    fetch('http://localhost:3000/api/boletines/add', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setFormData('')
      })
      .catch((err) => console.log('error'));
      console.log(handlerSubmit());
  }*/

  return (
    <div className="contenido section ">
      {/*Contenedor el cual muestra el fomulario para llenar los campos requeridos */}
      <form className="contenido-form" onSubmit={handleSubmit}>
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
