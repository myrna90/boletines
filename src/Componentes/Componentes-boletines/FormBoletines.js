import React, { Component } from "react";
import FormStepOne from "./Steps/FormStepOne";
import FormStepTwo from "./Steps/FormStepTwo";
import FormStepThree from "./Steps/FormStepThree";
import FormStepFour from "./Steps/FormStepFour";

const FormBoletines = (props) => {
  /*Es un destructure al obejeto props y sacamos esa variable, para no tener que hacer props.handleChange */

  const { handleChange } = props;
  return (
    <div className="contenido section ">
      {/*Contenedor el cual muestra el fomulario para llenar los campos requeridos */}
      <form className="contenido-form">
        <FormStepOne handleChange={handleChange} />
        <FormStepTwo handleChange={handleChange} />
        <FormStepThree handleChange={handleChange} />
        <FormStepFour handleChange={handleChange} />
      </form>
    </div>
  );
};

export default FormBoletines;
