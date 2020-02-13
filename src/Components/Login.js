import React, {Component} from "react";
import { Container, Row, Col} from 'react-bootstrap';
import { Redirect, Link } from 'react-router-dom';



/*const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100)
    },
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100)
    }
  }*/

class Login extends Component {
     /*Función login  */
     constructor(){
        super();
        this.state = {
            username: "",
            password: "",
            error: "",
            redirectToReferrer: false
        };

        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }

    /*login = () => {
        fakeAuth.authenticate(() => {
          this.setState(() => ({
            redirectToReferrer: true
          }))
        })
      }*/

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
        /*const {from} = this.props.location.state || {from: {pathname: '/'}};
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer === true) {
        return <Redirect to={from} />
    }*/
        return(
            <Container className="conteiner-general-login">
            <Row className="row row-login">
            <Col xs={12} sm={12} md={4} large={5} className="conteiner-titulo" style={{backgroundColor:"var(--grid-color-blue)"}}>
                <h1 className="titular-inicio">Boletines</h1>
            </Col>
            <Col xs={12} sm={12} md={8} large={7} className="conteiner-sesion" style={{backgroundColor: "var(--color-white)"}}>
                <div className="text-inicio">
                <h2 className="text-conten">Inicie sesión ahora...</h2>
                <p className="text-conten   ">Su cuenta esta vinculada con el dominio, puede acceder <br></br>al sistema usando las mismas credenciales.</p>
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
                
                <label className="text-login text-user">Correo electronico:</label>
                <input className="input-login" type= "text" data-test= "username" value={this.state.username} onChange={this.handleUserChange} placeholder="Usuario@telenetdemexico.com"/>
                
                
                <label className="text-login text-passw">Contraseña: </label>
                <input className="input-login" type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} placeholder="**********"/>
               
                    
                <Link to="/Dashboard"><button /*onClick={this.login}*/ className="btn-login" type="submit" value=" Log In" data-test="submit">LOGIN</button></Link>
                    
                </form>
                </div>
                <div className="miImg">
            </div> 
            </Col>
            
            </Row>
            <footer className="footer">Telenet de México S.A. de C.V.</footer> 
            </Container>   
        )
    }
}

export default Login;