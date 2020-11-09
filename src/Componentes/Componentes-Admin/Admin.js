import React, { useState, useEffect } from "react";
import AltaCliente from "./AltaCliente";
import AltaProyecto from "./proyectos/AltaProyecto";
import AltaSistema from "./AltaSistema";
import AltaUsuario from "./AltaUsuario";
import AltaDevice from "./AltaEquipo";
import UsuarioCabecera from '../Componentes-secundarios/Usuario-cabecera';
import axios from "axios";
import { API_BASE_URL } from "../../configuration";
import AuthService from "../Componentes-login/service/auth.service";

const Admin = (props) => {
  const [formValues, setFormValues] = useState({});
  const [clientProjectData, setClientProjectData] = useState(undefined);
  const [projectData, setProjectData] = useState(undefined);
  const [userProjectData, setUserProjectData] = useState(undefined);
  const token = AuthService.getCurrentUser();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const customerGet = {
    method: "GET",
    url: `${API_BASE_URL}/customers`,
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  };

  const projectGet = {
    method: "GET",
    url: `${API_BASE_URL}/projects`,
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  };

  const userGet = {
    method: "GET",
    url: `${API_BASE_URL}/users`,
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  };

  useEffect(() => {
    if (clientProjectData === undefined) {
      axios(customerGet).then(function(res) {
        setClientProjectData(res.data.data);
      });
    }
  }, [clientProjectData]);

  useEffect(() => {
    if (projectData === undefined) {
      axios(projectGet).then(function(res) {
        setProjectData(res.data.data);
      });
    }
  }, [projectData]);

  useEffect(() => {
    if (userProjectData === undefined) {
      axios(userGet).then(function(res) {
        setUserProjectData(res.data.data);
      });
    }
  }, [userProjectData]);

  const submitClient = (e) => {
    e.preventDefault();
    e.target.reset();
    const client = {
      name: formValues.name,
      location: formValues.location,
    };
    axios
      .post(`${API_BASE_URL}/customers`, client, {
        headers: { Authorization: `Bearer ${token.token}` },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    e.target.reset();
  };

  const submitProject = (e) => {
    e.preventDefault();
    e.target.reset();
    const project = {
      name: formValues.nameProject,
      status: true,
      startDate: formValues.startDate,
      endDate: formValues.endDate,
      customer: formValues.customer,
      users: formValues.users,
    };
    axios
      .post(`${API_BASE_URL}/projects`, project, {
        headers: { Authorization: `Bearer ${token.token}` },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    e.target.reset();
  };

  const submitSystem = (e) => {
    e.preventDefault();
    e.target.reset();
    const system = {
      name: formValues.name,
    };
    axios
      .post(`${API_BASE_URL}/systems`, system, {
        headers: { Authorization: `Bearer ${token.token}` },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    e.target.reset();
  };

  const submitUser = (e) => {
    e.preventDefault();
    e.target.reset();
    const user = {
      firstname: formValues.firstname,
      lastname: formValues.lastname,
      username: formValues.username,
      email: formValues.email,
      password: formValues.password,
      isAdmin: formValues.role,
    };
    axios
      .post(`${API_BASE_URL}/auth/sign-up`, user, {
        headers: { Authorization: `Bearer ${token.token}` },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    e.target.reset();
  };

  const submitDevice = (e) => {
    e.preventDefault();
    e.target.reset();
    const system = {
      name: formValues.name,
      brand: formValues.brand,
      model: formValues.model,
    };
    axios
      .post(`${API_BASE_URL}/devices`, system, {
        headers: { Authorization: `Bearer ${token.token}` },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    e.target.reset();
  };

  return (
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
        <UsuarioCabecera />
      </div>
      <div className="contenido section section-admin">
        <div className="conteiner-panel">
          <button className="boton-proyectos  btn-admin">
            <span class="material-icons md-30">work_outline</span>
            <p className="p-btn-adim">Poryectos</p>
          </button>
          <button className="boton-usuarios btn-admin">
            <span class="material-icons md-30">person_outline</span>
            <p className="p-btn-adim"> Usuarios</p>
          </button>
          <button className="boton-sistemas btn-admin">
            <span class="material-icons md-30">settings_input_component</span>
            <p className="p-btn-adim">Sistema</p>
          </button>
          <button className="boton-clientes btn-admin">
            <span class="material-icons md-30">people_outline</span>
            <p className="p-btn-adim">Clientes</p>
          </button>
          <button className="boton-equipos btn-admin">
            <span class="material-icons md-30">devices_other</span>
            <p className="p-btn-adim">Equipos</p>
          </button>
        </div>

        <div className="conteiner-result">
        <AltaProyecto handleChange={handleChange}
          submitProject={submitProject}
          clientProjectData={clientProjectData}/>
        </div>
        
        {/* <AltaCliente handleChange={handleChange} submitClient={submitClient} />
        <AltaProyecto
          handleChange={handleChange}
          submitProject={submitProject}
          clientProjectData={clientProjectData}
        />
        <AltaSistema handleChange={handleChange} submitSystem={submitSystem} />
        <AltaUsuario handleChange={handleChange} submitUser={submitUser} />
        <AltaDevice handleChange={handleChange} submitDevice={submitDevice} /> */}
      </div>
    </div>
  );
};

export default Admin;
