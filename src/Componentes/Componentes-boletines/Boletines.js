import React, { Component } from 'react';
import FormBoletines from './FormBoletines';
import Steps from './Steps';

class Boletines extends Component {
    constructor(props) {
        super(props);

    }
    /*handleFormReset() {
        this.setState(() => this.state)
    }*/

    render() {
        return (
            <div className="conteiner conteiner-boletines">
                {/*Contenedor general header */}
                <div className="header-crear">
                    <div className="div-icon-header">
                        <span className="material-icons md-40">add_circle</span>
                    </div>
                    <div className="div-h2 div-h2-crear">
                        <hr className="v" />
                        <h2 className="h2">Crear boletín</h2>
                        
                    </div>
                    <Steps/>
                    <div  className="conteiner-usuario">
                    <button type="submit" className="btn-crear btn">+ Crear</button>
                    </div>
                </div>
                <div className="contenido section ">
                    {/*Contenedor el cual muestra el fomulario para llenar los campos requeridos  <MultiStep Steps = {Steps}/> */}
                    <FormBoletines />
                </div>

            </div>
        )
    }
}
export default Boletines;