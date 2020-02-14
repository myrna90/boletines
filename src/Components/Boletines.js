import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Boletines extends Component{

    constructor(){
        super();
        this.state = {value: ''};
        this.add = this.add.bind(this);
    }
    add() {
        this.props.onButtonClick(this.state.value);
        this.setState({value: ''});
    }

    

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
              <Link to="/" className="Link link-out-boletin"><div className="img-out-menu img"><div className="text-menu">Salir</div></div></Link>
              </div>
              
            </div>              
            </Col>
            <Col xs={12} md={10} large={8} className="conteiner-view-general conteiner-boletin">
                <div className="grid-cabecera-boletin">
                <h3 className="h3-boletin"  disabled={!this.state.value} onClick={this.add}>Crear boletín</h3>
                <button className="btn-crear">+ Crear</button>
                </div> 

                <form>
                <div className="div">
                <div className="conteiner-numero">
                    <div className="numero">1</div><strong><p className="p">Folio</p></strong>
                    </div>
                    <div className="contenForm">
                    <label className="label">Numero de folio</label>
                    <input className="input input-xs" value={this.state.value}  placeholder="TN-B-01" required></input>
                    </div>
                </div>

                <div className="div">   
                <div className="conteiner-numero">
                    <div className="numero">2</div><strong><p className="p">Proyecto</p></strong>
                    </div>
                    <div className="contenForm">
                    <label className="label">Proyecto</label>
                    <input className="input" value={this.state.value}  placeholder="La rioja" required></input>
                    </div>

                    <div className="contenForm">
                    <label className="label">Cliente</label>
                    <input className="input" value={this.state.value}   placeholder="Jesus Contreras" required></input>
                    </div>

                    <div className="contenForm">
                    <label className=" label">Fecha</label>
                    <input className="input input-xs" value={this.state.value}  placeholder="20/03/20" required></input>
                    </div>

                    <div className="contenForm">
                    <label className=" label">Sistema</label>
                    <input className="input" value={this.state.value}  placeholder="video vogilancia (CCTV)"  required></input>
                    </div>

                    <div className="contenForm">
                    <label className=" label">Equipo</label>
                    <input className="input" value={this.state.value}  placeholder="joystick" required></input>
                    </div>

                    <div className="contenForm">
                    <label className=" label">Marca</label>
                    <input className="input" value={this.state.value}  placeholder="Bosch" required></input>
                    </div>

                    <div className="contenForm">
                    <label className=" label">Modelo</label>
                    <input className="input" value={this.state.value}  placeholder="KBD-Digital" required></input>
                    </div>

                </div>

                <div className="div">  
                <div className="conteiner-numero">
                    <div className="numero">3</div><strong><p className="p">Descripción</p></strong>
                    </div>
                    <div className="div-img">
                    <div className="contenForm">
                    <label className="label ">Descripción del problema</label>
                    <textarea className=" text-problema text" value={this.state.value}  required></textarea>
                    </div>

                    <div className="contenForm conten-img">
                    <label className="label label-img">Problema imagen</label>
                    <div className=" conten-export-img" value={this.state.value}  type="file" required><img className="img-export"/></div>
                    </div>
                    </div>

                    <div className="div-img">
                    <div className="contenForm">
                    <label className="label ">Solución del problema</label>
                    <textarea className=" text-solucion text" value={this.state.value}  required></textarea>
                    </div>

                    <div className="contenForm conten-img">
                    <label className="label label-img">Solución imagen</label>
                    <div className=" conten-export-img" value={this.state.value}  type="file" required><img className="img-export"/></div>
                    </div> 
                    </div>
                       
                </div>

                <div className="div">
                    <div className="conteiner-numero">
                    <div className="numero">4</div><strong><p className="p">Usuario</p></strong>
                    </div>
                    <div className="contenForm">
                    <label className="label">Reporta</label>
                    <input className="input" value={this.state.value}  placeholder="Rubén Jiménez" required></input>
                    </div>

                    <div className="contenForm">
                    <label className="label">Departamento</label>
                    <input className="input" value={this.state.value}  placeholder="Ingeniería" required></input>
                    </div>   
                </div>
                </form>
            </Col>
            </Row>
            
        )
    }
}
export default Boletines;