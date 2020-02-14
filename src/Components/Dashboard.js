import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';


class Dashboard extends Component {
    render(){
        return(
            <Row className="conteiner-general row">
            <Col xs={12} sm={12} md={3} large={4} className="menu">
            <div className="Grid-titulo">
              <div className="conteiner-titulo">
              <h3 className="h3">Boletines</h3>
              <div className="btn-config">
              </div>
              </div>
              
              <div className="nav-menu">
              <Link to="/Dashboard" className="Link"><div className="img-dash-menu img"><div className="text-menu">Dashboard</div></div></Link>
              <Link to="/Boletines" className="Link"><div className="img-bole-menu img"><div className="text-menu">Boletines</div></div></Link>
              <Link to="/Soporte" className="Link"><div className="img-soperte-menu img"><div className="text-menu">Soporte</div></div></Link>
              <Link to="/" className="Link link-out"><div className="img-out-menu img"><div className="text-menu">Salir</div></div></Link>
              </div>
            </div>
            </Col>

            <Col xs={12} sm={12} md={9} large={8} className="conteiner-view-general conteiner-color">   
              <div className="grid-cabecera">
              <div className="img-dash"></div>
              <h1 className="h1">Dashboard</h1>
              </div>

              <div className="grid-contentDash box-publish">
              <div className="grid-publicados">
              <h4 className="h4">Boletines</h4>
              </div>
              <div className="grid-proyectos box-publish">
              <h4 className="h4">Mis proyectos</h4>
              </div>
              </div>
            </Col>
            </Row>
        )
    }
}

export default Dashboard;