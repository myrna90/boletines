import React, { useState, useEffect } from "react";
import UsuarioCabecera from "../Componentes/Componentes-secundarios/Usuario-cabecera";
import { Redirect } from "react-router";
import axios from "axios";
import { API_BASE_URL } from '../configuration';
import AuthService from '../Componentes/Componentes-login/service/auth.service';

/*Componente Dashboard dentro se manda a llamar a los componentes MenuToglle y Cabecera, 
se separaron los contenedores grid, para poder dar una mejor funcionalidad al codigó */
const Dashboard = (props) => {
  const { renderRedirect } = props;
  const [projectsData, setProjectsData] = useState(undefined);
  const [newslettersData, setNewslettersData] = useState(undefined);
  const token = AuthService.getCurrentUser();
 
  const projectsGet = {
    method: 'GET',
    url: `${API_BASE_URL}/api/projects`,
    headers: {
      'Authorization': `Bearer ${token.token}`
    }
  };

  const newsGet = {
    method: 'GET',
    url: `${API_BASE_URL}/api/newsletters`,
    headers: {
      'Authorization': `Bearer ${token.token}`
    }
  };

  useEffect(() => {
    
    if (projectsData === undefined) {
      axios(projectsGet)
      .then(function(res) {
        setProjectsData(res.data.data);
      });
    }
  }, [projectsData]);

  useEffect(() => {
    if (newslettersData === undefined) {
      axios(newsGet)
      .then(function(res) {
        setNewslettersData(res.data.data);
      });
    }
  }, [newslettersData]);

  

  /*setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };

  setRedirectList = () => {
    this.setState({
      redirectList: true,
    });
  };

  renderRedirectList = () => {
    if (this.state.redirectList) {
      return <Redirect to="/vista/listado" />;
    }
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/vista/view" />;
    }
  };*/

  

  return (
    <div className="conteiner contenedor-dash">
      <div id="cabecera" className="header">
        <div className="div-icon-header">
          <i className="material-icons md-40">dashboard</i>
        </div>

        <div className="div-h2">
          <hr className="v" />
          <h2 className="h2">Dashboard</h2>
        </div>
        <UsuarioCabecera />
      </div>
      <div id="contenido" className="contenido contenido-dash section">
        <div className="grid-contentDash">
          <div className="grid-publicados grids-dash">
            <h4 className="h4">Boletines</h4>
            {newslettersData &&
              newslettersData
                .filter((news) => news.folio)
                .map((filterFolio) => (
                  <div className="digsn-dash">
                    <div className="circulo-boletin2"> </div>
                    <p className="p-boletines">{filterFolio.folio}</p> <p className="p-boletines">|</p> <p className="p-boletines-2">{filterFolio.title}</p>
                    <div className="contenedor-icon">
                      <button
                        className="btn-bol contenedor-icon"
                      >
                        <i className="material-icons  md-18">open_in_new</i>
                      </button>
                    </div>
                  </div>
                ))}
          </div>
          <div className="grid-proyectos grids-dash">
            <h4 className="h4">Mis proyectos</h4>

            {projectsData &&
              projectsData.map((project) => (
                <div className="digsn-dash digsn-dash2">
                  <div className="circulo-boletin2"></div>
                  <p className="p-boletines">{project.name}</p>
                </div>
              ))}
          </div>
        </div>

        <div className="boletines-general">
          <div className="contenedor-Bgeneral">
            <div className="conteiner-encabezado">
              <button className="redirectList">
                <h4 className="h4-list h4">Listado Boletines</h4>
              </button>
            </div>

            <div className="conteiner-bol-gen">
              <div className="bol-gen">
                <p className="p-bol-gen">
                  <strong></strong>
                  <br />

                  <br />
                </p>

                <button className="btn-bol">
                  <i className="material-icons  md-18">open_in_new</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
