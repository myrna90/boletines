import React, { Component } from "react";
import Titulo from './Titulo';
import users from '../users.json';
import Sesion from "./Sesion";
import { useState } from "react";

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

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const showData = users.users.map((users) => {
    return (
      console.log('Ok')
    )
  });

  const handleChange = (e) => {
    setName({ [e.target.name]: e.target.value });
  }

 const handleFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(name));
  }

  const localStorage = () => {
    showData = JSON.parse(localStorage.getItem('user'));

    if (localStorage.getItem('user')) {
      this.setState({
        user: showData.name,
        password: showData.password
      })
    }
  }

    return (
      /*Contenedor general*/

      <div className="conteiner-general-login">
        {showData}
        <div className="row row-login">
          {localStorage}
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