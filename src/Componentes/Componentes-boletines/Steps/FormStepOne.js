import React, { Component } from 'react'

class FormStepOne extends Component{
    constructor(props) {
        super(props);
        this.state = {
            folio: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value });
    }

    render(){
        const {folio} = this.state;
        return(
            /*parte del fomulario para llenar folio */
            <div className="div div-1">
            <div className="conteiner-numero numero-div1">
                <div className="numero">1</div><strong><p className="p">Folio</p></strong>
            </div>
            <button type="submit" className="btn-crear btn">+ Crear</button>
            <div className="contenForm1">
                <label className="label label-div1">Numero de folio</label>
                <input className="input input-div1" name="folio" value={folio} onChange={this.handleChange} required></input>
            </div>
    
        </div>
        )
    }
}

export default FormStepOne;