import React, { Component } from 'react';
import Multistep from 'react-multistep';
import {steps} from './Steps/steps'
import FormBoletines from './FormBoletines';

class Boletines extends Component {
    constructor(props) {
        super(props);
        
    }
    /*handleFormReset() {
        this.setState(() => this.state)
    }*/
    
    render() {
        return (
            <div className="conteiner">
                {/*Contenedor general header */}
                <div className="header">
                    <div className="div-icon-header">
                    <span className="material-icons md-40">add_circle</span>
                    </div>
                    <div className="div-h2">
                    <hr className="v" />
                    <h2 className="h2">Crear boletín</h2>
                    </div>
                </div>
                <div className="contenido section ">
                {/*Contenedor el cual muestra el fomulario para llenar los campos requeridos */}
                <FormBoletines/>
                    {/*<MultiStep Steps = {Steps}/>*/}
                
            </div>
                
            </div>
        )
    }
}
export default Boletines;