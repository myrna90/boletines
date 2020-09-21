import React, { useState, useEffect } from "react";
import UsuarioCabecera from "../Componentes/Componentes-secundarios/Usuario-cabecera";
import { Redirect } from "react-router";
import axios from 'axios'

/*Componente Dashboard dentro se manda a llamar a los componentes MenuToglle y Cabecera, 
se separaron los contenedores grid, para poder dar una mejor funcionalidad al codigó */
const Dashboard= (props) => {
  
  const {renderRedirect} = props;

  const [projectsData, setProjectsData] = useState(undefined);
  const [newslettersData, setNewslettersData] = useState(undefined);
  

  useEffect(() => {
    if (projectsData === undefined) {
      axios.get("http://localhost:3000/api/projects").then(function(res) {
       setProjectsData(res.data.data)
      });
    }
  }, [projectsData]);

  useEffect(() => {
    if (newslettersData === undefined) {
      axios.get("http://localhost:3000/api/newsletters").then(function(res) {
       setNewslettersData(res.data.data)
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
      return <Redirect to="/Vista/Listado" />;
    }
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/Vista/View" />;
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
             
                
                {newslettersData>= 5 && newslettersData.map((news) => (
                   <div className="digsn-dash">
                  <div className="circulo-boletin2"></div>
                  <p className="p-boletines">{news.folio}</p>
                <p>{news.title}</p>
                <div className="contenedor-icon">
                  
                  <button
                    className="btn-bol contenedor-icon"
                    /*onClick={this.setRedirect}*/
                  >
                    <i className="material-icons  md-18">open_in_new</i>
                  </button>
                </div>
              </div>
                ))}
                 <div className="digsn-dash">
                  <div className="circulo-boletin2"></div>
                  <p className="p-boletines"></p>
                <p></p>
                <div className="contenedor-icon">
                  
                  <button
                    className="btn-bol contenedor-icon"
                    /*onClick={this.setRedirect}*/
                  >
                    <i className="material-icons  md-18">open_in_new</i>
                  </button>
                </div>
              </div>
              <div className="digsn-dash">
                  <div className="circulo-boletin2"></div>
                  <p className="p-boletines"></p>
                <p></p>
                <div className="contenedor-icon">
                  
                  <button
                    className="btn-bol contenedor-icon"
                    /*onClick={this.setRedirect}*/
                  >
                    <i className="material-icons  md-18">open_in_new</i>
                  </button>
                </div>
              </div>
            </div>
            <div className="grid-proyectos grids-dash">
              <h4 className="h4">Mis proyectos</h4>
              
                {projectsData && projectsData.map((project) => (
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
                
                <button className="redirectList" /*onClick={this.setRedirectList}*/>
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
                  
                  <button className="btn-bol" onClick={renderRedirect}>
                    <i className="material-icons  md-18">open_in_new</i>
                  </button>
                </div>

                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }

export default Dashboard;
