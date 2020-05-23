import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import Titulo from './Titulo';
import users from '../users.json';
import Sesion from "./Sesion";

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100) // fake async
  }
}
const Login = (props) => {
  /*Función login  */
 /* constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      formErrors: { user: '', password: '' },
      userValid: false,
      passwordValid: false,
      formValid: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }*/

  
 

    return (
      /*Contenedor general*/

      <div className="conteiner-general-login">
        <div className="row row-login">
          <Titulo/>
          <Sesion/>
        </div>
        <div className="footer">
          <footer>Telenet de México S.A. de C.V.</footer>
        </div>
      </div>



    )
  }

export default Login;