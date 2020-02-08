import React, { Component } from "react";

class Boletines extends Component {
    render(){
        return(
            <div className="Grid-general">
                <div className="menu">
                <div className="Grid-titulo">
              <h3 className="Grid-h3">Boletines</h3>
              <div className="Grid-btn">
              <button className="btn-config"><img className="img" src="https://image.flaticon.com/icons/svg/1790/1790042.svg"/></button>
              </div>
              </div>
              
                </div>
                <div className="formulario">
                <h3>Nuevo boletin</h3>
                <form>
                    <div className="div">
                    <p>1. Folio</p>
                    <label className="label">Numero de folio</label>
                    <input className="input" placeholder="TN-B-01"></input>
                    </div>
                    <div className="div">
                        <p>2. Proyecto</p>
                        <label className="label1 label">Proyecto</label>
                        <input className="input1" placeholder="La rioja"></input>
                        <label className="label1 label">Cliente</label>
                        <input className="input1" placeholder="Jesus Contreras"></input>
                        <label className="label2 label">Fecha</label>
                        <input className="input2" placeholder="20/03/20"></input>
                        <label className="label2 label">Sistema</label>
                        <select className="input2"></select>
                        <label className="label3 label">Equipo</label>
                        <input className="input3"></input>
                        <label className="label3 label">Marca</label>
                        <input className="input3"></input>
                        <label className="label3 label">Modelo</label>
                        <input className="input3"></input>
                    </div>

                    <div className="div">
                        <p>3. Descrpción</p>
                        <label className="label">Descrpción del problema</label>
                        <input className="input"></input>
                        <label className="label">Imagen</label>
                        <input className="input" type="file"></input>
                        <label className="label">Solución</label>
                        <input className="input" type="file"></input>
                    </div>

                    <div className="div">
                        <p>4. Usuario</p>
                        <label className="label">Reporta</label>
                        <input className="input" placeholder="Rubén Jiménez"></input>
                        <label className="label">Departamento</label>
                        <input className="input" placeholder="Ingeniería"></input>
                    </div>

                    <button>Crear</button>
                    
                </form> 
                </div>
            </div>
        )
    }
}

export default Boletines;