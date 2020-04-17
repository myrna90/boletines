import React, { Component } from 'react';

class FormStepFour extends Component {
    constructor(props){
        super(props);
        this.state = {
            usuario: '',
            departamento: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value });
    }

    render() {
        const {usuario, departamento} = this.state;
        return (
            /*parte del formulario para completar datos del usuario */
            <div className="div div-4">
            <div className="conteiner-numero numero-div4">
                <div className="numero">4</div><strong><p className="p">Usuario</p></strong>
            </div>
            <div className="contenForm conteinerForm-2">
                <label className="label">Reporta</label>
                <div className="div-icon-info">
                    <input className="input" name="usuario" value={usuario} onChange={this.handleChange} required></input>

                </div>

            </div>

            <div className="contenForm conteinerForm-3">
                <label className="label">Departamento</label>
                <div className="div-icon-info">
                    <input className="input" name="departamento" value={departamento} onChange={this.handleChange} required></input>

                </div>

            </div>
        </div>
        )
    }
}

export default FormStepFour;