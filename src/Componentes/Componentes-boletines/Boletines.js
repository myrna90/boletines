import React, { useState } from "react";
import FormBoletines from "./FormBoletines";
import Steps from "./Steps";
import axios from 'axios';

const Boletines = (props) => {

  const [formValues, setFormValues] = useState({});
  const [currentForm, setCurrentForm] = useState(0);


  /*Va a recibir un objeto */
  const getCurrentForm = (name) => {
    const identifier = {
      1: ["folio"],
      2: ["proyecto", "cliente", "fecha", "sistema"],
      3: [
        "problema",
        "imgProblema",
        "solucion",
        "imgSolucion",
        "equipo",
        "marca",
        "modelo",
      ],
      4: ["usuario", "departamento"],
    };

    const properties = Object.keys(identifier);
    properties.forEach((property) => {
      if (identifier[property].includes(name)) {
        //console.log('entrando');
        setCurrentForm(property);
      }
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    getCurrentForm(name);
    setFormValues({ 
      ...formValues,
      [name]: value 
    });
  };
  console.log("Form Values", formValues);
  console.log("currentForm", currentForm);

  const handleSubmit = (event) => {
    event.preventDefault();
    const boletin = {
      folio: formValues.folio,
      project: formValues.proyecto,
      client: formValues.cliente,
      date: formValues.fecha,
      system: formValues.sistema,
      description:  formValues.problema,
      imgproblem: formValues.selectedFile,
      solution: formValues.solucion,
      imgsolution: formValues.selectedFile,
      equipment: formValues.equipo,
      brand: formValues.marca,
      model: formValues.modelo,
      user: formValues.usuario,
      department: formValues.departamento
    }
    axios.post('http://localhost:3000/api/boletines', boletin) 
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    console.log('enviando datos...', formValues);
  }

  return (
    <div className="conteiner conteiner-boletines">
      {/*Contenedor general header */}
      <div className="header-crear">
        <div className="div-icon-header">
          <span className="material-icons md-40">add_circle</span>
        </div>
        <div className="div-h2 div-h2-crear">
          <hr className="v" />
          <h2 className="h2">Crear boletín</h2>
        </div>
        <Steps currentForm={currentForm} />
        <div className="conteiner-boton">
          
        </div>
      </div>
      <div className="contenido section ">
        {/*se pasa la función de handleChange como prop al componente de FormBoletines */}
        <FormBoletines handleChange={handleChange} handleSubmit={handleSubmit}/>
      </div>
    </div>
  );
};

export default Boletines;
