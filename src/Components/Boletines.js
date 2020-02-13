import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

class Boletines extends Component{
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
                <div>
                <h3>Nuevo boletin</h3>
                </div> 

                <form>
                <div className="div">
                    <p>1. Folio</p>
                    <div className="contenForm">
                    <label className="label">Numero de folio</label>
                    <input className="input" placeholder="TN-B-01" required></input>
                    </div>
                </div>

                <div className="div">   
                    <p>2. Proyecto</p>
                    <div className="contenForm">
                    <label className="label">Proyecto</label>
                    <input className="input" placeholder="La rioja" required></input>
                    </div>

                    <div className="contenForm">
                    <label className="label">Cliente</label>
                    <input className="input"  placeholder="Jesus Contreras" required></input>
                    </div>

                    <div className="contenForm">
                    <label className=" label">Fecha</label>
                    <input className="input" placeholder="20/03/20" required></input>
                    </div>

                    <div className="contenForm">
                    <label className=" label">Sistema</label>
                    <input className="input" placeholder="video vogilancia (CCTV)"  required></input>
                    </div>

                    <div className="contenForm">
                    <label className=" label">Equipo</label>
                    <input className="input" placeholder="joystick" required></input>
                    </div>

                    <div className="contenForm">
                    <label className=" label">Marca</label>
                    <input className="input" placeholder="Bosch" required></input>
                    </div>

                    <div className="contenForm">
                    <label className=" label">Modelo</label>
                    <input className="input" placeholder="KBD-Digital" required></input>
                    </div>

                </div>

                <div className="div">  
                    <p>3. Descripción</p>
                    <div className="contenForm">
                    <label className="label">Descripción del problema</label>
                    <input className="input" required></input>
                    </div>

                    <div className="contenForm">
                    <label className="label">Problema imagen</label>
                    <input className="input" type="file" required></input>
                    </div>

                    <div className="contenForm">
                    <label className="label">Solución del problema</label>
                    <input className="input" required></input>
                    </div>

                    <div className="contenForm">
                    <label className="label">Solución imagen</label>
                    <input className="input" type="file" required></input>
                    </div>
                       
                </div>

                <div className="div">
                    <p>4. Usuario</p>
                    <div className="contenForm">
                    <label className="label">Reporta</label>
                    <input className="input" placeholder="Rubén Jiménez" required></input>
                    </div>

                    <div className="contenForm">
                    <label className="label">Departamento</label>
                    <input className="input" placeholder="Ingeniería" required></input>
                    </div>
                        
                </div>

                <button className="btn">Crear</button>
                    
                </form>
            </Col>
            </Row>
        )
    }
}

export default Boletines;