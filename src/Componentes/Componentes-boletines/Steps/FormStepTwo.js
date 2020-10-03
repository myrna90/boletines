import React, { useState, useEffect } from "react";
import axios from 'axios';
import { API_BASE_URL } from '../../../configuration';
import AuthService from '../../Componentes-login/service/auth.service';

const FormStepTwo = (props) => {
  const { handleChange, projectData, systemData } = props;
  const token = AuthService.getCurrentUser();

  const [formProyecto, setFormProyecto] = useState({
    project: "",
    client: "",
    createDate: "",
    system: "",
    customer: ""
  });

  const [selectedProject, setSelectedProject] = useState("");
  const [currentProject, setCurrentProject] = useState(undefined);

  useEffect(() => {
    if(selectedProject !== '') {
      setCurrentProject(projectData.find(project => project._id === selectedProject))  
    }   
  }, [selectedProject, projectData]);

  

  return (
    /* formulario para especificaciones del proyecto */
    <div className="div div-2">
      <div className="conteiner-numero numero-div2">
        <div className="numero">2</div>
        <strong>
          <p className="p">Proyecto</p>
        </strong>
      </div>
      <div className="contenedor-form-div2">
        {/*Input proyecto */}
        <label className="label label1">Proyecto</label>
        <div className="div-icon-info">
        <select
              className="input input1"
              name="project"
              /*Aqui se pone el id de cada project para todos los select-options */
              defaultValue={formProyecto.proyecto}
              onChange={(e) => {handleChange(e); 
              setSelectedProject(e.target.value)
              }}
              required
            >  
            <option>-</option>
          {projectData && projectData.map((project) => (
            <option value={project._id}>{project.name}</option>
          ))
          }
          </select>
          <a className="caja3">
            <span className="material-icons md-4">info</span>
            <span className="info">
              Seleccionar proyecto <br />
              donde ocurrio el problema
            </span>
          </a>
        </div>
        {/*Input client */}
        <label className="label label2">Cliente</label>
        <select
          className="input input2"
          name="customer"
          defaultValue={formProyecto.customer}
          onChange={(e) => handleChange(e)}
          required
        >
          <option>-</option>
          <option value={currentProject ? currentProject.customer[0]._id: ''}>{currentProject ? currentProject.customer[0].name: ''}</option>
          
        </select>

        {/*Input fecha */}
        <label className="label label3 label-fecha">Fecha</label>
        <input
          className="input input3"
          name="createDate"
          type="date"
          defaultValue={formProyecto.fecha}
          onChange={(e) => handleChange(e)}
          required
        ></input>

        {/*Input system */}
        <label className="label label4">Sistema</label>
        <div className="div-icon-info">
          <select
            className="input input4"
            name="system"
            defaultValue={formProyecto.system}
            onChange={(e) => handleChange(e)}
            required
          >
            <option>-</option>
            {systemData && systemData.map((system) => (
              <option value={system._id}>{system.name}</option>
            ))}
          </select>
          <a className="caja3">
            <span className="material-icons md-4">info</span>
            <span className="info">
              Seleccionar proyecto
              <br />
              donde ocurrio el problema
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FormStepTwo;

