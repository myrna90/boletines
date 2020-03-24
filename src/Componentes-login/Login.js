import React, { Component } from "react";
import { Link } from 'react-router-dom';
//import FormErrors from '../Componentes-login/FormErrors';
import BtnLogin from '../Componentes-login/ButtonLogin';
import Logo from '../imgs/logotn.png';
import data from '../data.json';

const showData = data.map((data) => {
  return (
    console.log(data.displayName)
  )
});

class Login extends Component {
  /*Función login  */
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
      formErrors: { user: '', password: '' },
      userValid: false,
      passwordValid: false,
      formValid: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  /*auth(){
    fetch('http://10.10.1.24:3000/auth/signin',
    {
      method: 'POST',
      headers: {
        user: '',
        password: '',
        Authorization: 'Bearer Token',
        'Content-Type': 'application/json',
        'Accepts': 'application/json',
      }
    })
    .then(res => res.json)
    .catch(error => console.error('Error:', error))
  }*/

  /*authLogin() {
    axios({
      url: 'http://10.10.1.24:3000/auth/signin',
      method: 'post',
      data: JSON.stringify(cn),
      headers: {
        Authorization: 'Bearer Token',
        'Content-Type': 'application/json'
      }
    }).then(Response => {
      //
      return Response.data
    }).then(data => {
      console.log(data)
    }).catch(err => {
      console.log(err)
    })
  }*/


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(this.state));
  }

  componentDidMount() {
    this.showData = JSON.parse(localStorage.getItem('user'));

    if (localStorage.getItem('user')) {
      this.setState({
        user: this.showData.displayName,
        password: this.state
      })
    }
  }

  btnForgot() {
    return alert("favor de comunicarse con soporte técnico")
  }

  render() {
    return (
      /*Contenedor general*/

      <div className="conteiner-general-login">
        {showData}
        <div className="row row-login">
          <div className="conteiner-titulo">
            <h1 className="titular-inicio">Boletines</h1>
            <h5 className='sub-titulo'>Mejora continua</h5>
            <img src={Logo} className="logotn" />
            <div className="miImg"></div>
          </div>
          <div className="conteiner-sesion">
            <div className="text-inicio">
              <h2 className="text-conten">Inicie sesión ahora...</h2>
              <p className="text-conten">Su cuenta esta vinculada con el dominio, puede acceder <br></br>al sistema usando las mismas credenciales.</p>
            </div>

            <div className="login">
              <form className="form" onSubmit={this.handleFormSubmit}>

                {/*div para introducir email */}
                <div>
                  <label className="text-login text-user" htmlFor="user">Nombre de usuario:</label>
                  <input required type="text" className="input-login" name="user"
                    value={this.state.user}
                    onChange={this.handleChange}
                    placeholder="Myrna Mares"
                  />
                  <div className="img-correo"></div>
                </div>

                {/*div para introducir password */}
                <div >
                  <label className="text-login text-passw" htmlFor="password">Contraseña: </label>
                  <input className="input-login" type="password" name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    placeholder="**********" />
                  <div className="img-contraseña"></div>
                </div>

                {/*div para recordar usuario */}

                <div className="custom-control custom-checkbox">
                  <input type="submit" className="custom-control-input" id="customCheck1" />
                  <label className="custom-control-label" htmlFor="customCheck1">Recordarme</label>
                </div>

                <BtnLogin />
                <p className="forgot-password text-right">
                  Olvidaste tu <Link className="a-forgot" onClick={this.btnForgot}>contraseña?</Link>
                </p>
              </form>
            </div>

          </div>
        </div>
        <div className="footer">
          <footer>Telenet de México S.A. de C.V.</footer>
        </div>
      </div>



    )
  }
}

export default Login;