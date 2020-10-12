import React, { useState, useEffect } from 'react';
import FormBoletines from './FormBoletines';
import Steps from './Steps';
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
  const [currentProject, setCurrentProject] = useState(undefined);
  const [selectedProject, setSelectedProject] = useState('');
  const currentUser = AuthService.getCurrentUser();
  // const { selectedProject, selectedDevice } = props;

  const projectsGet = {
    method: 'GET',
    url: `${API_BASE_URL}/projects`,
    headers: {
      Authorization: `Bearer ${currentUser.token}`,
    },
  };

  const devicesGet = {
    method: 'GET',
    url: `${API_BASE_URL}/devices`,
    headers: {
      Authorization: `Bearer ${currentUser.token}`,
    },
  };

  const systemsGet = {
    method: 'GET',
    url: `${API_BASE_URL}/systems`,
    headers: {
      Authorization: `Bearer ${currentUser.token}`,
    },
  };

  const usersGet = {
    method: 'GET',
    url: `${API_BASE_URL}/users`,
    headers: {
      Authorization: `Bearer ${currentUser.token}`,
    },
  };

  /*Mandamos a llamar el arreglo de objetos de los projectos desde el API */
  useEffect(() => {
    if (projectData === undefined) {
      axios(projectsGet).then(function(res) {
        setProjectData(res.data.data);
      });
    }
  }, [projectData]);

  console.log('project', projectData);

  useEffect(() => {
    if (systemData === undefined) {
      axios(systemsGet).then(function(res) {
        setSystemData(res.data.data);
      });
    }
  }, [systemData]);

  useEffect(() => {
    if (deviceData === undefined) {
      axios(devicesGet).then(function(res) {
        setDeviceData(res.data.data);
      });
    }
  }, [deviceData]);

  useEffect(() => {
    if (userData === undefined) {
      axios(usersGet).then(function(res) {
        setUserData(res.data.data);
      });
    }
  }, [userData]);

  /* Se utiliza en form step two */
  useEffect(() => {
    if (selectedProject !== '') {
      setCurrentProject(
        projectData.find((project) => project._id === selectedProject),
      );
    }
  }, [selectedProject, projectData]);

  /*Va a recibir un objeto */
  const getCurrentForm = (name) => {
    const identifier = {
      1: ['folio', 'title'],
      2: ['project', 'cliente', 'createDate', 'sistema'],
      3: [
        'problema',
        'solucion',
        'problemImage',
        'solutionImage',
        'equipo',
        'marca',
        'modelo',
      ],
      4: ['usuario', 'departamento'],
    };

    const properties = Object.keys(identifier);
    properties.forEach((property) => {
      if (identifier[property].includes(name)) {
        setCurrentForm(property);
      }
    });
  };

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      const { name, files } = e.target;
      getCurrentForm(name);
      setFormValues({
        ...formValues,
        [name]: files,
      });
    } else {
      const { name, value } = e.target;
      getCurrentForm(name);
      setFormValues({
        ...formValues,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const boletin = {
      title: formValues.title,
      project: formValues.project,
      customer: currentProject.customer[0]._id,
      createDate: new Date(),
      system: formValues.system,
      description: formValues.description,
      problemImage: formValues.problemImage,
      solution: formValues.solution,
      solutionImage: formValues.solutionImage,
      device: formValues.device,
      brand: formValues.brand,
      model: formValues.model,
      owner: currentUser.user.id,
      status: true,
    };
    const formData = new FormData();
    const problem = boletin.problemImage[0];
    const solution = boletin.solutionImage[0];
    delete boletin.problemImage;
    delete boletin.solutionImage;

    axios
      .post(`${API_BASE_URL}/newsletters`, boletin, {
        headers: { Authorization: `Bearer ${currentUser.token}` },
      })
      .then((res) => {
        formData.append('createdNewsletterId', res.data.data);
        formData.append('problem', problem);
        formData.append('solution', solution);
        axios
          .post(`${API_BASE_URL}/newsletters/upload-image`, formData, {
            headers: { Authorization: `Bearer ${currentUser.token}` },
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
    e.target.reset();
  };

  return (
    <div className='conteiner conteiner-boletines'>
      {/*Contenedor general header */}
      <div className='header-crear'>
        <div className='div-icon-header'>
          <span className='material-icons md-40'>add_circle</span>
        </div>
        <div className='div-h2 div-h2-crear'>
          <hr className='v' />
          <h2 className='h2'>Crear boletín</h2>
        </div>
        <Steps currentForm={currentForm} />
        <div className='conteiner-boton'>
          <button type='submit' className='btn-crear btn' form='CreateForm'>
            + Crear
          </button>
        </div>
      </div>
      <div className='contenido section '>
        {/*se pasa la función de handleChange como prop al componente de FormBoletines */}
        <FormBoletines
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          projectData={projectData}
          systemData={systemData}
          deviceData={deviceData}
          userData={userData}
          setSelectedProject={setSelectedProject}
          currentProject={currentProject}
        />
      </div>
    </div>
  );
};

export default Boletines;
