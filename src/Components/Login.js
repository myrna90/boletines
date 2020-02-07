import React, {Component} from "react";

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
           /*Formulario login */
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
                    
                    <button className="btn-login" type="submit" value=" Log In" data-test="submit">LOGIN</button>
                    
                </form>
            </div>
        )
    }
}

export default Login;