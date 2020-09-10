import React, { useState } from 'react';
import AltaCliente from './AltaCliente'
import AltaProyecto from './AltaProyecto';
import AltaSistema from './AltaSistema';
import AltaUsuario from './AltaUsuario';
import AltaDevice from './AltaEquipo';
import axios from 'axios';

const Admin = (props) => {
const [formValues, setFormValues] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ 
      ...formValues,
      [name]: value 
    });
  };

  const submitClient = (e) => {
    e.preventDefault();
    const client = {
      name: formValues.name,
      location: formValues.location
    }
    axios.post('http://localhost:3000/api/customers', client)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const submitProject = (e) => {
    e.preventDefault();
    const project = {
      name: formValues.nameProject,
      status: true,
      startDate: formValues.startDate,
      endDate: formValues.endDate
    }
    axios.post('http://localhost:3000/api/projects', project)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const submitSystem = (e) => {
    e.preventDefault();
    const system = {
      name: formValues.name
    }
    axios.post('http://localhost:3000/api/systems', system)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const submitUser = (e) => {
    e.preventDefault();
    const user = {
      firstname: formValues.firstname,
      lastname: formValues.lastname,
      username: formValues.username,
      email: formValues.email,
      password: formValues.password
    }
    axios.post('http://localhost:3000/api/users', user)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const submitDevice = (e) => {
    e.preventDefault();
    const system = {
      name: formValues.name,
      brand: formValues.brand,
      model: formValues.model
    }
    axios.post('http://localhost:3000/api/devices', system)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  };


  console.log(formValues);
    return(
        <div className="conteiner conteiner-boletines">
        {/*Contenedor general header */}
        <div className="header-crear">
          <div className="div-icon-header">
            <span className="material-icons md-40">admin_panel_settings</span>
          </div>
          <div className="div-h2 div-h2-crear">
            <hr className="v" />
            <h2 className="h2">Panel Administración</h2>
          </div>
          <div className="conteiner-boton">
            
          </div>
        </div>
        <div className="contenido section ">
         
         <AltaCliente handleChange={handleChange} submitClient={submitClient}/>
         <AltaProyecto handleChange={handleChange} submitProject={submitProject}/>
         <AltaSistema handleChange={handleChange} submitSystem={submitSystem}/>
         <AltaUsuario handleChange={handleChange} submitUser={submitUser}/>
         <AltaDevice handleChange={handleChange} submitDevice={submitDevice}/>
        </div>
      </div>
    )
}

export default Admin;