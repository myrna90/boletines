import React, { useState, useEffect } from "react";
import FormBoletines from "./FormBoletines";
import Steps from "./Steps";
import axios from 'axios';

const Boletines = (props) => {

  const [formValues, setFormValues] = useState({});
  const [currentForm, setCurrentForm] = useState(0);
  const [projectData, setProjectData] = useState(undefined);
  const [systemData, setSystemData] = useState(undefined);
  const [deviceData, setDeviceData] = useState(undefined);
  const [userData, setUserData] = useState(undefined);

  /*Mandamos a llamar el arreglo de objetos de los projectos desde el API */
  useEffect(() => {
    if (projectData === undefined) {
      axios.get("http://localhost:3000/api/projects").then(function(res) {
       setProjectData(res.data.data)
      });
    }
  }, [projectData]);

  useEffect(() => {
    if (systemData === undefined) {
      axios.get("http://localhost:3000/api/systems").then(function(res) {
       setSystemData(res.data.data)
      });
    }
  }, [systemData]);

  useEffect(() => {
    if (deviceData === undefined) {
      axios.get("http://localhost:3000/api/devices").then(function(res) {
       setDeviceData(res.data.data)
      });
    }
  }, [deviceData]);

  useEffect(() => {
    if (userData === undefined) {
      axios.get("http://localhost:3000/api/users").then(function(res) {
       setUserData(res.data.data)
      });
    }
  }, [userData]);


  /*Va a recibir un objeto */
  const getCurrentForm = (name) => {
    const identifier = {
      1: ["folio", "title"],
      2: ["project", "cliente", "createDate", "sistema"],
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
 
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData();
    form.append('image',{
        uri : formValues.pictureName,
        type : 'image/jpeg',
        name : 'image.jpg'
    })
    const boletin = {
      title: formValues.title,
      folio: formValues.folio,
      project: formValues.project,
      costumer: formValues.costumer,
      createDate: formValues.createDate,
      system: formValues.sistema,
      description:  formValues.description,
      pictureName: formValues.pictureName,
      solution: formValues.solution,
      //pictureName: formValues.selectedFile,
      device: formValues.device,
      //brand: formValues.marca,
     // model: formValues.modelo,
      owner: formValues.owner,
      //department: formValues.departamento
      status: true
    }
    axios.post('http://localhost:3000/api/newsletters', boletin) 
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    console.log('boletin', boletin);
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
        <button
            type="submit"
            className="btn-crear btn"
            form="CreateForm">
            + Crear
          </button>
        </div>
      </div>
      <div className="contenido section ">
        {/*se pasa la función de handleChange como prop al componente de FormBoletines */}
        <FormBoletines handleChange={handleChange} handleSubmit={handleSubmit} projectData={projectData} 
         systemData={systemData} deviceData={deviceData} userData={userData}/>
      </div>
    </div>
  );
};

export default Boletines;
