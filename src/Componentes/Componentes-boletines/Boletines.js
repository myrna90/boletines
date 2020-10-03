import React, { useState, useEffect } from "react";
import FormBoletines from "./FormBoletines";
import Steps from "./Steps";
import axios from 'axios';
import AuthService from '../Componentes-login/service/auth.service';
import { API_BASE_URL } from '../../configuration';

const Boletines = (props) => {

  const [formValues, setFormValues] = useState({});
  const [currentForm, setCurrentForm] = useState(0);
  const [projectData, setProjectData] = useState(undefined);
  const [systemData, setSystemData] = useState(undefined);
  const [deviceData, setDeviceData] = useState(undefined);
  const [userData, setUserData] = useState(undefined);
  const [customerData, setCustomerData] = useState(undefined);
  const token = AuthService.getCurrentUser();

  const projectsGet = {
    method: 'GET',
    url: `${API_BASE_URL}/api/projects`,
    headers: {
      'Authorization': `Bearer ${token.token}`
    }
  };

  const customerGet = {
    method: 'GET',
    url: `${API_BASE_URL}/api/customers`,
    headers: {
      'Authorization': `Bearer ${token.token}`
    }
  };

  const devicesGet = {
    method: 'GET',
    url: `${API_BASE_URL}/api/devices`,
    headers: {
      'Authorization': `Bearer ${token.token}`
    }
  };

  const systemsGet = {
    method: 'GET',
    url: `${API_BASE_URL}/api/systems`,
    headers: {
      'Authorization': `Bearer ${token.token}`
    }
  };

  const usersGet = {
    method: 'GET',
    url: `${API_BASE_URL}/api/users`,
    headers: {
      'Authorization': `Bearer ${token.token}`
    }
  };

  /*Mandamos a llamar el arreglo de objetos de los projectos desde el API */
  useEffect(() => {
    if (projectData === undefined) {
      axios(projectsGet).then(function(res) {
       setProjectData(res.data.data)
      });
    }
  }, [projectData]);

  // useEffect(() => {
  //   if (customerData === undefined) {
  //     axios(customerGet).then(function(res) {
  //      setCustomerData(res.data.data)
  //     });
  //   }
  // }, [customerData]);

  // useEffect(() => {
  //   if (systemData === undefined) {
  //     axios(systemsGet).then(function(res) {
  //      setSystemData(res.data.data)
  //     });
  //   }
  // }, [systemData]);

  useEffect(() => {
    if (deviceData === undefined) {
      axios(devicesGet).then(function(res) {
       setDeviceData(res.data.data)
      });
    }
  }, [deviceData]);

  useEffect(() => {
    if (userData === undefined) {
      axios(usersGet).then(function(res) {
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
 
  console.log('respuesta:', formValues);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const boletin = {
      title: formValues.title,
      project: formValues.project,
      custumer: formValues.custumer,
      createDate: formValues.createDate,
      system: formValues.system,
      description:  formValues.description,
      pictureName: formValues.pictureName,
      solution: formValues.solution,
      device: formValues.device,
      //brand: formValues.marca,
     // model: formValues.modelo,
      owner: formValues.owner,
      //department: formValues.departamento
      status: true
    }
    axios.post(`${API_BASE_URL}/api/newsletters`, boletin, { headers: {"Authorization" : `Bearer ${token.token}`} }) 
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    console.log('boletin', boletin);
  };

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
