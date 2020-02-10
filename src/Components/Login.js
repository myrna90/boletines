import React, {Component} from "react";
import { Link } from "react-router-dom";

class Login extends Component {
     /*Función login  */
    constructor(){
        super();
        this.state = {
            username: "",
            password: "",
            error: "" 
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
            username: evt.target.value
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
            /*inicio presentación, se manda a llamar al componente login */
   <div className="Wrapper">
   <div className="Grid-inicio">
       <h1 className="titular-inicio">Boletines</h1>   
   </div>
     <div className="Grid-inicioSesion">
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
     </div>
            
            </div>
        )
    }
}

export default Login;