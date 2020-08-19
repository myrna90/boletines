import React, { Component } from "react";
import UsuarioCabecera from "../Componentes/Componentes-secundarios/Usuario-cabecera";
import { Redirect } from "react-router";
import boletines from "./boletines.json";
import { userService } from "../Componentes/Componentes-login/services/user.service";
import {getPost} from './api'

/*Componente Dashboard dentro se manda a llamar a los componentes MenuToglle y Cabecera, 
se separaron los contenedores grid, para poder dar una mejor funcionalidad al codigó */
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      redirectList: false,
      user: {},
      users: [],
      posts: [],
      loading: true,
    };
  }

  /*componentDidMount() {
    this.setState({
      user: JSON.parse(localStorage.getItem("user")),
      users: { loading: true },
    });
  }*/

  setRedirect = () => {
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
  };

  render() {
    const { user, users } = this.state;

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
              <div className="digsn-dash">
                <div className="circulo-boletin"></div>
                <p className="p-boletines"></p>
                <p></p>
                <div className="contenedor-icon">
                  {this.renderRedirect()}
                  <button
                    className="btn-bol contenedor-icon"
                    onClick={this.setRedirect}
                  >
                    <i className="material-icons  md-18">open_in_new</i>
                  </button>
                </div>
              </div>
              <div className="digsn-dash ">
                <div className="circulo-boletin2"></div>
                <p className="p-boletines">B-01 | Punto sur- CCTV</p>
                <div className="contenedor-icon">
                  {this.renderRedirect()}
                  <button
                    className="btn-bol contenedor-icon"
                    onClick={this.setRedirect}
                  >
                    <i className="material-icons  md-18">open_in_new</i>
                  </button>
                </div>
              </div>
              <div className="digsn-dash disgn ">
                <div className="circulo-boletin"></div>
                <p className="p-boletines">B-02 | Andares-Plaza comercial </p>
                <div className="contenedor-icon">
                  {this.renderRedirect()}
                  <button
                    className="btn-bol contenedor-icon"
                    onClick={this.setRedirect}
                  >
                    <i className="material-icons  md-18">open_in_new</i>
                  </button>
                </div>
              </div>
              <div className="digsn-dash disgn disgn1">
                <div className="circulo-boletin2"></div>
                <p className="p-boletines">B-03 | Hines-Control de accesos</p>
                <div className="contenedor-icon">
                  {this.renderRedirect()}
                  <button
                    className="btn-bol contenedor-icon"
                    onClick={this.setRedirect}
                  >
                    <i className="material-icons  md-18">open_in_new</i>
                  </button>
                </div>
              </div>
            </div>
            <div className="grid-proyectos grids-dash">
              <h4 className="h4">Mis proyectos</h4>
              <div className="digsn-dash digsn-dash2">
                <p className="p-boletines">Casa cuervo-La rioja</p>
              </div>
              <div className="digsn-dash digsn-dash2">
                <p className="p-boletines">Punto sur- CVTV</p>
              </div>
              <div className="digsn-dash2 disgn disgn1">
                <p className="p-boletines">Andares-Plaza comercial </p>
              </div>
              <div className="digsn-dash2 disgn ">
                <p className="p-boletines">Hines-Control de accesos</p>
              </div>
            </div>
          </div>

          <div className="boletines-general">
            <div className="contenedor-Bgeneral">
              <div className="conteiner-encabezado">
                {this.renderRedirectList()}
                <button className="redirectList" onClick={this.setRedirectList}>
                  <h4 className="h4-list h4">Listado Boletines</h4>
                </button>
              </div>

              <div className="conteiner-bol-gen">
                <div className="bol-gen">
                  <p className="p-bol-gen">
                    <strong>B-00</strong>
                    <br />
                    Proyecto: Casa cuervo
                    <br />
                    Problema: CCTV
                  </p>
                  {this.renderRedirect()}
                  <button className="btn-bol" onClick={this.setRedirect}>
                    <i className="material-icons  md-18">open_in_new</i>
                  </button>
                </div>
                <div className="bol-gen bol">
                  <p className="p-bol-gen">
                    <strong>B-02</strong>
                    <br />
                    Proyecto: Punto sur
                    <br />
                    Problema: Control
                  </p>
                  {this.renderRedirect()}
                  <button className="btn-bol" onClick={this.setRedirect}>
                    <i className="material-icons  md-18">open_in_new</i>
                  </button>
                </div>
                <div className="bol-gen bol">
                  <p className="p-bol-gen">
                    <strong>B-03</strong>
                    <br />
                    Proyecto: Hines
                    <br />
                    Problema: CCTV
                  </p>
                  {this.renderRedirect()}
                  <button className="btn-bol" onClick={this.setRedirect}>
                    <i className="material-icons  md-18">open_in_new</i>
                  </button>
                </div>
                <div className="bol-gen bol">
                  <p className="p-bol-gen">
                    <strong>B-04</strong>
                    <br />
                    Proyecto: Casa cuervo
                    <br />
                    Problema: CCTV
                  </p>
                  {this.renderRedirect()}
                  <button className="btn-bol" onClick={this.setRedirect}>
                    <i className="material-icons  md-18">open_in_new</i>
                  </button>
                </div>
                <div className="bol-gen bol bol5">
                  <p className="p-bol-gen">
                    <strong>B-05</strong>
                    <br />
                    Proyecto: Punto sur
                    <br />
                    Problema: Control
                  </p>
                  {this.renderRedirect()}
                  <button className="btn-bol" onClick={this.setRedirect}>
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
}

export default Dashboard;
