import React, { Component } from 'react';


class FormBoletines extends Component {
    constructor(props) {
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
            imgProblema: '',
            solucion: '',
            imgSolucion: '',
            usuario: '',
            departamento: '',
            imagProb: '',
            imagSolu: ''
        }
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

    render() {
        const { folio, proyecto, cliente, fecha, sistema, equipo, marca, modelo, problema, solucion, usuario, departamento } = this.state;
        return (
            <div className="contenido section ">
                {/*Contenedor el cual muestra el fomulario para llenar los campos requeridos */}
                <form className="contenido-form" onReset={this.handleFormReset} onSubmit={this.handleSubmit}>

                    {/*parte del fomulario para llenar folio */}
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

                    {/*formulario para especificaciones del proyecto */}
                    <div className="div div-2">
                        <div className="conteiner-numero numero-div2">
                            <div className="numero">2</div><strong><p className="p">Proyecto</p></strong>
                        </div>
                        <div className="contenedor-form-div2">
                            <label className="label label1">Proyecto</label>
                            <div className="div-icon-info">
                                <select className="input input1" name="proyecto" value={proyecto} onChange={this.handleChange} required></select>

                                <a className="caja3">
                                    <span className="material-icons md-4">info</span>
                                    <span className="info">Seleccionar proyecto <br />donde ocurrio el problema</span>
                                </a>
                            </div>



                            <label className="label label2">Cliente</label>
                            <input className="input input2" name="cliente" value={cliente} onChange={this.handleChange} required></input>



                            <label className="label label3">Fecha</label>
                            <input className="input input3 input-fecha" name="fecha" type="month" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" value={fecha} onChange={this.handleChange} required></input>


                            <label className="label label4">Sistema</label>
                            <div className="div-icon-info">
                                <select className="input input4" name="sistema" value={sistema} onChange={this.handleChange} required></select>
                                <a className="caja3">
                                    <span className="material-icons md-4">info</span>
                                    <span className="info">Seleccionar proyecto <br />donde ocurrio el problema</span>
                                </a>
                            </div>

                        </div>

                    </div>

                    {/*parte del formulario para descripcion y solución del problema */}
                    <div className="div div-3">
                        <div className="conteiner-numero numero-div3">
                            <div className="numero">3</div><strong><p className="p">Descripción</p></strong>
                        </div>
                        <div className="div1 div3-content">

                            <div className="contenForm">
                                <label className="label label-text-area">Descripción del problema</label>
                                <textarea className=" text-problema text" name="problema" value={problema}
                                    onChange={this.handleChange} required></textarea>
                            </div>
                            <div className="contenForm2">
                                <label className="label label-text-area ">Solución del problema</label>
                                <textarea className=" text-solucion text" name="solucion" value={solucion}
                                    onChange={this.handleChange} required></textarea>
                            </div>


                            <div className="contenForm conten-img">
                                <label className="label label-img">Solución imagen</label>
                                <input ref="uploadImg"
                                    type="file"
                                    name="selectedFile"
                                    onChange={this.imgUp} className="inputimg" />
                                <img src={this.state.imagProb} className=" conten-export-img" required />
                            </div>

                            <div className="contenForm conten-img2">
                                <label className="label label-img">Solución imagen</label>
                                <input ref="uploadImg2"
                                    type="file"
                                    name="selectedFile"
                                    onChange={this.imgUp2} className="inputimg" />
                                <img src={this.state.imagSolu} className=" conten-export-img" required />
                            </div>

                            <div className="content-inputs">
                                <label className=" label label-div">Equipo</label>
                                <div className="div-icon-info">
                                    <input className="input input-div" name="equipo" value={equipo} onChange={this.handleChange}></input>
                                    <a className="caja3">
                                        <span className="material-icons md-4">info</span>
                                        <span className="info">Seleccionar proyecto <br />donde ocurrio el problema</span>
                                    </a>
                                </div>


                                <label className=" label label-div2">Marca</label>
                                <div className="div-icon-info">
                                    <input className="input input-div2" name="marca" value={marca} onChange={this.handleChange}></input>
                                    <a className="caja3">
                                        <span className="material-icons md-4">info</span>
                                        <span className="info">Seleccionar proyecto <br />donde ocurrio el problema</span>
                                    </a>
                                </div>


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

                    {/*parte del formulario para completar datos del usuario */}
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
                </form>
            </div>

        )
    }
}

export default FormBoletines;