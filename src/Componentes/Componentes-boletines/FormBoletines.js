import React, { Component } from 'react';
import FormStepOne from './Steps/FormStepOne';
import FormStepTwo from './Steps/FormStepTwo';
import FormStepThree from './Steps/FormStepThree';
import FormStepFour from './Steps/FormStepFour';


class FormBoletines extends Component {
    constructor(props) {
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const values =
            JSON.stringify(this.state);
        console.log(values);
    }

    handleFormReset() {
        this.setState(() => this.state)
    }

    

    render() {
        
        return (
            <div className="contenido section ">
                {/*Contenedor el cual muestra el fomulario para llenar los campos requeridos */}
                <form className="contenido-form" onReset={this.handleFormReset} onSubmit={this.handleSubmit}>
                <FormStepOne/>
                <FormStepTwo/>
                <FormStepThree/>
                <FormStepFour/>
                </form>
            </div>

        )
    }
}

export default FormBoletines;