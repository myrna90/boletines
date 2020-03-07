import React, {Component} from "react";
import { Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormErrors from '../Componentes-login/FormErrors';
import BtnLogin from '../Componentes-login/ButtonLogin';
import Logo from '../imgs/logotn.png';

class Login extends Component {
     /*Función login  */
     constructor(props){
        super(props);
        this.state = {
            userName: "",
            password: "",
            formErrors: {userName: '', password: ''},
            userNamelValid: false,
            passwordValid: false,
            formValid: false
           
        };
    }

    /*auth = (e) => {
      const email = e.data.email;
      const password = e.data.password;
      this.setState({[email]: data.email}, () => {this.auth(email, password)} )
      console.log(email, password)
    }*/

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
                      () => { this.validateField(name, value) });
      }
    
      validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let userNameValid = this.state.userNameValid;
        let passwordValid = this.state.passwordValid;
    
        switch(fieldName) {
          case 'userName':
            userNameValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.userName = userNameValid ? '' : ' is invalid ';
            break;
          case 'password':
            passwordValid = value.length >= 2;
            fieldValidationErrors.password = passwordValid ? '': ' error';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        userNameValid: userNameValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }
    
      validateForm() {
        this.setState({formValid: this.state.userNameValid && this.state.passwordValid});
      }
    
      errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
      }

      btnForgot() {
        return alert("favor de comunicarse con soporte técnico")
      }

    render(){
        return(
          /*Contenedor general*/
            <Container className="conteiner-general-login">
            <Row className="row row-login">
              {/*Contenedor titulo */}
            <Col xs={12} sm="auto" md="auto"  xl="auto" lg={5} className="conteiner-titulo" style={{backgroundColor:"var(--grid-color-blue)"}}>
               
                <h1 className="titular-inicio">Boletines</h1>
                <h5 className='sub-titulo'>Mejora continua</h5>
               <img src={Logo} className="logotn"/>
                
            </Col>
            {/*Contenedor login form */}
            <Col xs={12} sm="auto" xl="auto" lg={7} className="conteiner-sesion" style={{backgroundColor: "white"}}>
                <div className="text-inicio">
                <h2 className="text-conten">Inicie sesión ahora...</h2>
                <p className="text-conten">Su cuenta esta vinculada con el dominio, puede acceder <br></br>al sistema usando las mismas credenciales.</p>
                </div>
                
                <div className="login">
                <form className="form">
                    
                      {/*div para introducir email */}
                    <div className={`form-group ${this.errorClass(this.state.formErrors.userName)}`}>
                    <label className="text-login text-user" htmlFor="email">Nombre de usuario:</label>
                    <input required type= "userName" className="input-login" name="userName" 
                    value={this.state.userName}
                    onChange={this.handleUserInput} 
                    placeholder="Myrna Mares"
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
                    
                <BtnLogin/>
                <p className="forgot-password text-right">
                    Olvidaste tu <Link className="a-forgot" onClick={this.btnForgot}>contraseña?</Link>
                </p>
                </form>
                </div>
                <div className="panel panel-default" formErrors={this.state.form}>
                <FormErrors formErrors={this.state.formErrors} />
                </div>
                <div className="miImg"></div> 
            </Col>
            </Row>
            <div className="footer">
            <footer>Telenet de México S.A. de C.V.</footer>
            </div>
            </Container>   
            
        )
    }
}

export default Login;