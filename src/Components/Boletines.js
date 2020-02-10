import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Boletines extends Component {
    render(){
        return(
        <div className="Grid-general">
                {/*Inicio contenedor menú*/}
            <div className="menu">
              <div className="Grid-titulo">
              <h3 className="Grid-h3">Boletines</h3>
              <div className="Grid-btn">
              <button className="btn-config"><img className="img" src="https://image.flaticon.com/icons/svg/1790/1790042.svg"/></button>
              </div>
              <Link to="/Dashboard" className="Link">Dashboard</Link>
              <Link to="/Boletines" className="Link">Boletines</Link>
              <Link to="/Soporte" className="Link">Soporte</Link>
              <Link to="/Login" className="Link">Salir</Link>
              </div>              
            </div>

                {/*Inicio contenedor formulario */}
            <div className="conten formulario">
                <div>
                <h3>Nuevo boletin</h3>
                </div>  
                <form>
                <div className="div">
                    <p>1. Folio</p>
                    <div className="contenForm">
                    <label className="label">Numero de folio</label>
                    <input className="input" placeholder="TN-B-01"></input>
                    </div>
                </div>
                <div className="div">   
                    <p>2. Proyecto</p>
                    <div className="contenForm">
                    <label className="label">Proyecto</label>
                    <input className="input" placeholder="La rioja"></input>
                    </div>

                    <div className="contenForm">
                    <label className="label">Cliente</label>
                    <input className="input"  placeholder="Jesus Contreras"></input>
                    </div>

                    <div className="contenForm">
                    <label className=" label">Fecha</label>
                    <input className="input" placeholder="20/03/20"></input>
                    </div>

                    <div className="contenForm">
                    <label className=" label">Sistema</label>
                    <select className="input" placeholder="video vogilancia (CCTV)"></select>
                    </div>

                    <div className="contenForm">
                    <label className=" label">Equipo</label>
                    <input className="input" placeholder="joystick"></input>
                    </div>

                    <div className="contenForm">
                    <label className=" label">Marca</label>
                    <input className="input" placeholder="Bosch"></input>
                    </div>

                    <div className="contenForm">
                    <label className=" label">Modelo</label>
                    <input className="input" placeholder="KBD-Digital"></input>
                    </div>

                </div>

                <div className="div">  
                    <p>3. Descripción</p>
                    <div className="contenForm">
                    <label className="label">Descripción del problema</label>
                    <input className="input"></input>
                    </div>

                    <div className="contenForm">
                    <label className="label">Problema imagen</label>
                    <input className="input" type="file"></input>
                    </div>

                    <div className="contenForm">
                    <label className="label">Solución del problema</label>
                    <input className="input"></input>
                    </div>

                    <div className="contenForm">
                    <label className="label">Solución imagen</label>
                    <input className="input" type="file"></input>
                    </div>
                       
                </div>

                <div className="div">
                    <p>4. Usuario</p>
                    <div className="contenForm">
                    <label className="label">Reporta</label>
                    <input className="input" placeholder="Rubén Jiménez"></input>
                    </div>

                    <div className="contenForm">
                    <label className="label">Departamento</label>
                    <input className="input" placeholder="Ingeniería"></input>
                    </div>
                        
                </div>

                    <button className="btn">Crear</button>
                    
                </form> 
            </div>
        </div>
        )
    }
}

export default Boletines;