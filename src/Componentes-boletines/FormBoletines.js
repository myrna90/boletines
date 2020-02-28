import React, { Component } from 'react';

class FormBoletines extends Component {
    constructor(props){
        super(props);
        this.state = {
            folio: '',
            proyecto: '',
            cliente: '',
            fecha: '',
            sistema: '',
            equipo: '',
            marca: '',
            modelo: '',
            problema: '',
            solucion: '',
            usuario: '',
            departamento: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]: value});  
    }

    handleSubmit(event) {
        event.preventDefault();
        const values = 
        JSON.stringify(this.state);
        console.log(values);
    }

    handleFormReset () {
        this.setState(() => this.state)
    }

    render(){
        const {folio, proyecto, cliente, fecha, sistema, equipo, marca, modelo, problema, solucion, usuario, departamento} = this.state;
        return(
        <div className="contenido">
                {/*Contenedor el cual muestra el fomulario para llenar los campos requeridos */}
            <form onReset={this.handleFormReset} onSubmit={this.handleSubmit}>

                {/*parte del fomulario para llenar folio */}
            <div className="div">
                <div className="conteiner-numero">
                <div className="numero">1</div><strong><p className="p">Folio</p></strong>
                </div>
                <div className="contenForm">
                <label className="label">Numero de folio</label>
                <input className="input" name="folio" value={folio} onChange={this.handleChange}  required></input>
                </div>
                <button type="submit" className="btn-crear btn">+ Crear</button>
            </div>

                {/*formulario para especificaciones del proyecto */}
            <div className="div div-2">   
                <div className="conteiner-numero">
                <div className="numero">2</div><strong><p className="p">Proyecto</p></strong>
                </div>
                <div className="contenForm conteinerForm-2">
                <label className="label">Proyecto</label>
                <input className="input" name="proyecto" value={proyecto} onChange={this.handleChange} required></input>
                </div>

                <div className="contenForm conteinerForm-3">
                <label className="label">Cliente</label>
                <input className="input" name="cliente" value={cliente} onChange={this.handleChange} required></input>
                </div>

                <div className="contenForm conteinerForm-3">
                <label className=" label">Fecha</label>
                <input className="input input-xs" name="fecha" value={fecha} onChange={this.handleChange} required></input>
                </div>

                <div className="contenForm conteinerForm-3">
                <label className=" label">Sistema</label>
                <input className="input" name="sistema" value={sistema} onChange={this.handleChange} required></input>
                </div>
                <br></br>
                <div className="contenForm">
                <label className=" label">Equipo</label>
                <input className="input" name="equipo" value={equipo} onChange={this.handleChange}  required></input>
                </div>

                <div className="contenForm">
                <label className=" label">Marca</label>
                <input className="input" name="marca" value={marca} onChange={this.handleChange}  required></input>
                </div>

                <div className="contenForm">
                <label className=" label">Modelo</label>
                <input className="input" name="modelo" value={modelo} onChange={this.handleChange} required></input>
                </div>
            </div>

                {/*parte del formulario para descripcion y solución del problema */}
            <div className="div div-textTarea">  
                <div className="conteiner-numero">
                <div className="numero">3</div><strong><p className="p">Descripción</p></strong>
                </div>

                <div className="div-img">
                <div className="contenForm">
                <label className="label label-text-area">Descripción del problema</label>
                <textarea className=" text-problema text" name="problema" value={problema} onChange={this.handleChange} required></textarea>
                </div>

                <div className="contenForm conten-img">
                <label className="label label-img">Problema imagen</label>
                <div className=" conten-export-img"  type="file" required><img className="img-export"/></div>
                </div>
                </div>

                <div className="div-img">
                <div className="contenForm">
                <label className="label label-text-area ">Solución del problema</label>
                <textarea className=" text-solucion text" name="solucion" value={solucion} onChange={this.handleChange} required></textarea>
                </div>

                <div className="contenForm conten-img">
                <label className="label label-img">Solución imagen</label>
                <div className=" conten-export-img"  type="file" required><img className="img-export"/></div>
                </div> 
                </div>
            </div>

                {/*parte del formulario para completar datos del usuario */}
            <div className="div div-2">
                <div className="conteiner-numero">
                <div className="numero">4</div><strong><p className="p">Usuario</p></strong>
                </div>

                <div className="contenForm conteinerForm-2">
                <label className="label">Reporta</label>
                <input className="input" name="usuario" value={usuario} onChange={this.handleChange} required></input>
                </div>

                <div className="contenForm conteinerForm-3">
                <label className="label">Departamento</label>
                <input className="input" name="departamento" value={departamento} onChange={this.handleChange} required></input>
                </div>   
            </div>
            </form>
        </div>
            
        )
    }
}

export default FormBoletines;