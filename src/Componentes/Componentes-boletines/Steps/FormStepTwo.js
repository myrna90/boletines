import React, { Component } from 'react'

class FormStepTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            proyecto: '',
            cliente: '',
            fecha: '',
            sistema: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value });
    }

    render() {
        const { proyecto, cliente, fecha, sistema } = this.state;
        return (
            /*formulario para especificaciones del proyecto */
            <div className="div div-2">
                <div className="conteiner-numero numero-div2">
                    <div className="numero">2</div><strong><p className="p">Proyecto</p></strong>
                </div>
                <div className="contenedor-form-div2">
                    {/*Input proyecto */}
                    <label className="label label1">Proyecto</label>
                    <div className="div-icon-info">
                        <select className="input input1" name="proyecto" value={proyecto} onChange={this.handleChange} required>

                        </select>
                        <a className="caja3">
                            <span className="material-icons md-4">info</span>
                            <span className="info">Seleccionar proyecto <br />donde ocurrio el problema</span>
                        </a>
                    </div>

                    {/*Input cliente */}
                    <label className="label label2">Cliente</label>
                    <input className="input input2" name="cliente" value={cliente} onChange={this.handleChange} required></input>


                    {/*Input fecha */}
                    <label className="label label3 label-fecha">Fecha</label>
                    <input className="input input3 input-fecha" name="fecha" type="date" value={fecha} onChange={this.handleChange} required></input>

                    {/*Input sistema */}
                    <label className="label label4">Sistema</label>
                    <div className="div-icon-info">
                        <select className="input input4" name="sistema" value={sistema} onChange={this.handleChange} required>

                        </select>
                        <a className="caja3">
                            <span className="material-icons md-4">info</span>
                            <span className="info">Seleccionar proyecto <br />donde ocurrio el problema</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormStepTwo;