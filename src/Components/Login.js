import React, {Component} from "react";
import { Container, Row, Col} from 'react-bootstrap';
import { Redirect, Link } from 'react-router-dom';
import FormErrors from './FormErrors';
import ForgotPassword from './ForgotPassword';


const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100)
    },
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100)
    }
  }

class Login extends Component {
     /*Función login  */
     constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
           
        };
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
                      () => { this.validateField(name, value) });
      }
    
      validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
    
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }
    
      validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
      }
    
      errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
      }

    render(){
        return(
          /*Contenedor general*/
            <Container className="conteiner-general-login">
            <Row className="row row-login">
              {/*Contenedor titulo */}
            <Col xs={12} sm={12} md="auto"  xl="auto" lg={5} className="conteiner-titulo" style={{backgroundColor:"var(--grid-color-blue)"}}>
                <h1 className="titular-inicio">Boletines</h1>
            </Col>
            {/*Contenedor login form */}
            <Col xs={12} sm={12} xl="auto" lg={7} className="conteiner-sesion" style={{backgroundColor: "white"}}>
                <div className="text-inicio">
                <h2 className="text-conten">Inicie sesión ahora...</h2>
                <p className="text-conten">Su cuenta esta vinculada con el dominio, puede acceder <br></br>al sistema usando las mismas credenciales.</p>
                </div>
                
                <div className="login">
                <form className="form">
                    <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors} />
                    </div>

                      {/*div para introducir email */}
                    <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                    <label className="text-login text-user" htmlFor="email">Correo electronico:</label>
                    <input required type= "email" className="input-login" name="email" 
                    value={this.state.email}
                    onChange={this.handleUserInput} 
                    placeholder="Usuario@telenetdemexico.com"
                    />
                    <div className="img-correo"></div>
                    </div>

                      {/*div para introducir password */}
                    <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                    <label className="text-login text-passw" htmlFor="password">Contraseña: </label>
                    <input className="input-login" type="password" name="password" 
                    value={this.state.password}
                    onChange={this.handleUserInput} 
                    placeholder="**********"/>
                    <div className="img-contraseña"></div>
                    </div>
                    
                      {/*div para recordar usuario */}
                    
                      <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Recordarme</label>
                      </div>
                    
                <Link className="btn-login" to="/Dashboard" disabled={!this.state.formValid} type="submit">LOGIN</Link>
                <p className="forgot-password text-right">
                    Olvidaste tu <Link to="/ForgotPassword">contraseña?</Link>
                </p>
                </form>
                </div>
                <div className="miImg"></div> 
            </Col>
            
            </Row>
            <footer className="footer">Telenet de México S.A. de C.V.</footer> 
            </Container>   
        )
    }
}

export default Login;