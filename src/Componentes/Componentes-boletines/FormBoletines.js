import React from 'react';
import FormStepOne from './Steps/FormStepOne';
import FormStepTwo from './Steps/FormStepTwo';
import FormStepThree from './Steps/FormStepThree';
import FormStepFour from './Steps/FormStepFour';

const FormBoletines = (props) => {
  /*Es un destructure al obejeto props y sacamos esa variable, para no tener que hacer props handleChange*/
  const { handleChange, handleSubmit, resetForm } = props;
  const { projectData, clientData, systemData, deviceData, userData } = props;

  return (
    <div className='contenido section '>
      {/*Contenedor el cual muestra el fomulario para llenar los campos requeridos */}
      <form
        className='contenido-form'
        onSubmit={handleSubmit}
        onReset={resetForm}
        id='CreateForm'
      >
        <FormStepOne handleChange={handleChange} />
        <FormStepTwo
          handleChange={handleChange}
          projectData={projectData}
          clientData={clientData}
          systemData={systemData}
        />
        <FormStepThree handleChange={handleChange} deviceData={deviceData} />
        <FormStepFour handleChange={handleChange} userData={userData} />
      </form>
    </div>
  );
};

export default FormBoletines;
