import React, { useState, useEffect } from "react";

const FormStepTwo = (props) => {
  const { handleChange, projectData, systemData } = props;

  const [formProyecto, setFormProyecto] = useState({
    project: "",
    client: undefined,
    createDate: "",
    system: "",
    customer: undefined
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
          {projectData && projectData.map((project, index) => (
            <option key={index} value={project._id}>{project.name}</option>
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
            {systemData && systemData.map((system, index) => (
              <option key={index} value={system._id}>{system.name}</option>
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

