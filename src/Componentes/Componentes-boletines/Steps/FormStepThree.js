import React, { Component } from 'react';

class FormStepThree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            equipo: '',
            marca: '',
            modelo: '',
            problema: '',
            imgProblema: '',
            solucion: '',
            imgSolucion: '',
            imagProb: '',
            imagSolu: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value });
    }


    imgUp = () => {
        const file = this.refs.uploadImg.files[0]
        const reader = new FileReader();

        reader.onloadend = () => {
            this.setState({
                imagProb: reader.result
            })
        }
        if (file) {
            reader.readAsDataURL(file);
            this.setState({
                imagProb: reader.result
            })
        }
        else {
            this.setState({
                imagProb: ""
            })
        }
    }

    imgUp2 = () => {

        const file = this.refs.uploadImg2.files[0]
        const reader = new FileReader();

        reader.onloadend = () => {
            this.setState({
                imagSolu: reader.result
            })
        }
        if (file) {
            reader.readAsDataURL(file);
            this.setState({
                imagSolu: reader.result
            })
        }
        else {
            this.setState({
                imagSolu: ""
            })
        }
    }

    changeInput = (event) => {
        const file = event.target.files[0]
      
        // User cancelled
        if (!file) {
          return
        }
    }
    render() {
        const { equipo, marca, modelo, problema, solucion } = this.state;
        return (
            /*parte del formulario para descripcion y solución del problema */
            <div className="div div-3">
                {/*Div contenido espacio descripción, imagenes y solución */}
                <div className="conteiner-numero numero-div3">
                    <div className="numero">3</div><strong><p className="p">Descripción</p></strong>
                </div>
                <div className="div1 div3-content">
                    {/*Div contenido espacio descripción problema*/}
                    <div className="contenForm">
                        <label className="label label-text-area">Descripción del problema</label>
                        <textarea className=" text-problema text" name="problema" value={problema}
                            onChange={this.handleChange} required></textarea>
                    </div>

                    {/*Div contenido espacio descripción solución*/}
                    <div className="contenForm2">
                        <label className="label label-text-area ">Solución del problema</label>
                        <textarea className=" text-solucion text" name="solucion" value={solucion}
                            onChange={this.handleChange} required></textarea>
                    </div>

                    {/*Div contenido espacio imagen problema */}
                    <div className="contenForm conten-img">
                        <label for="myuniqueid" className="label label-img">Problema imagen</label>
                        <div className=" conten-export-img">
                        <input ref="uploadImg"
                            id="myuniqueid"
                            type="file"
                            name="selectedFile"
                            onChange={this.imgUp} className="inputimg" />
                            <img  src={this.state.imagProb} className="imgExport"  required />
                            </div>
                        
                    </div>
                    {/*Div contenido espacio imagen solución */}
                    <div className="contenForm conten-img2">
                        <label for="myuniqueid2" className="label label-img">Solución imagen</label>
                        <div className=" conten-export-img">
                        <input ref="uploadImg2"
                            id="myuniqueid2"
                            type="file"
                            name="selectedFile"
                            onChange={this.imgUp2} className="inputimg" />
                        <img src={this.state.imagSolu} className="imgExport" required />
                        </div>
                        
                    </div>
                    
                    {/*Div contenido inputs equipo, modelo, marca */}
                    <div className="content-inputs">
                        {/*Input equipo */}
                        <label className=" label label-div">Equipo</label>
                        <div className="div-icon-info">
                            <input className="input input-div" name="equipo" value={equipo} onChange={this.handleChange}></input>
                            <a className="caja3">
                                <span className="material-icons md-4">info</span>
                                <span className="info">Seleccionar proyecto <br />donde ocurrio el problema</span>
                            </a>
                        </div>

                        {/*Input marca */}
                        <label className=" label label-div2">Marca</label>
                        <div className="div-icon-info">
                            <input className="input input-div2" name="marca" value={marca} onChange={this.handleChange}></input>
                            <a className="caja3">
                                <span className="material-icons md-4">info</span>
                                <span className="info">Seleccionar proyecto <br />donde ocurrio el problema</span>
                            </a>
                        </div>

                        {/*Input modelo */}
                        <label className=" label label-div3">Modelo</label>
                        <div className="div-icon-info">
                            <input className="input input-div3" name="modelo" value={modelo} onChange={this.handleChange}></input>
                            <a className="caja3">
                                <span className="material-icons md-4">info</span>
                                <span className="info">Seleccionar proyecto <br />donde ocurrio el problema</span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default FormStepThree;