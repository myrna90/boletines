import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Row,Col } from 'react-bootstrap';


class Soporte extends Component{
    render(){
        return(
            <Row className="conteiner-general row">
            <Col xs={12} md={3} large={4} className="menu">
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
            
            <Col xs={12} md={9} large={8} className="conteiner-view-general conteiner-boletin">

            <div className="conten ">

            </div>
            </Col>
            </Row>
        )
    }
}

export default Soporte;