import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';


class Dashboard extends Component {
    render(){
        return(
            <Row className="conteiner-general row">
            <Col xs={12} sm={12} md={3} large={4} className="menu">
              <div className="Grid-titulo">
              <h3 className="Grid-h3">Boletines</h3>
              <div className="Grid-btn">
              </div>
              <div className="nav-menu">
              <Link to="/Dashboard" className="Link">Dashboard</Link>
              <Link to="/Boletines" className="Link">Boletines</Link>
              <Link to="/Soporte" className="Link">Soporte</Link>
              <Link to="/" className="Link">Salir</Link>
              </div>
              
              
              </div>
            </Col>
            <Col xs={12} sm={12} md={10} large={8} className="conteiner-view-general">   
                <div className="grid-cabecera">
                <div className="img-dash"></div>
                <h1 className="h1">Dashboard</h1>
                </div>

                <div className="grid-contentDash box-publish">
                <div className="grid-publicados">
                <h3 className="h3">Boletines</h3>
                </div>
                <div className="grid-proyectos box-publish">
                <h3 className="h3">Mis proyectos</h3>
                </div>
                </div>
             
            </Col>
            </Row>
        )
    }
}

export default Dashboard;