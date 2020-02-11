import React, {Component} from "react";
import {Container, Row, Col} from 'react-bootstrap';
import {Link } from 'react-router-dom';

class Login extends Component {
     /*Función login  */
     constructor(){
        super();
        this.state = {
            username: "",
            password: "",
            error: "",
            login:[]
        };

        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }

    dismissError() {
        this.setState({ error: ""});
    }

    handleSubmit(evt){
        evt.preventDefault();

        if(!this.state.username){
            return this.setState({error: "Nombre de usuario requerido"})
        }

        if(!this.state.password){
            return this.setState({error: "Contraseña requerida"})
        }

        return this.setState({error: ""});
    }



    handleUserChange(evt){
        this.setState({
            username: evt.target.value,

        })
        console.log("Si funciona nombre")
    }

    handlePassChange(evt){
        this.setState({
            password: evt.target.value
        })
        console.log("si funciona contraseña")
    }
    render(){
        return(
            <Row className="row">
            <Col xs={12} md={4} large={5} className="conteiner-titulo" style={{backgroundColor:"var(--grid-color-blue)"}}>
                <h1 className="titular-inicio">Boletines</h1>
            </Col>
            <Col xs={12} md={8} large={7} className="conteiner-sesion" style={{backgroundColor: "var(--color-white)"}}>
                <div className="text-inicio">
                <h2>Inicie sesión ahora...</h2>
                <p>Su cuenta esta vinculada con el dominio, puede acceder <br></br>al sistema usando las mismas credenciales.</p>
                </div>
                <div className="login">
                <form className="form" onSubmit={this.handleSubmit}>
                {
                    this.state.error && 
                    <h3 data-test= "error" onClick={this.dismissError}>
                        <button onClick={this.dismissError}>X</button>
                        {this.state.error}
                    </h3>
                }
                <label className="text-login text-user">Correo electronico:
                <input className="input-login" type= "text" data-test= "username" value={this.state.username} onChange={this.handleUserChange} placeholder="Usuario@telenetdemexico.com"/>
                </label>
                    
                <label className="text-login text-passw">Contraseña:
                <input className="input-login" type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} placeholder="**********"/>
                </label>
                    
                <Link to="/Dashboard"><button className="btn" type="submit" value=" Log In" data-test="submit">LOGIN</button></Link>
                    
                </form>
                </div>
                
            </Col>
            </Row>     
        )
    }
}

export default Login;