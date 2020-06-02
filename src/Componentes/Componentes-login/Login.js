import React, { useState } from "react";
import Titulo from "./Titulo";
import Sesion from "./Sesion";

const Login = (props) => {
  /*const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const auth = () => {
    fetch('http://localhost:3000/users',
    {
      method: 'GET',
      headers: {
        name: '',
        password: '',
        //Authorization: 'Bearer Token',
        'Content-Type': 'application/json',
        'Accepts': 'application/json',
      }
    })
    .then((response) => {
      return response.json()
    })
    .then((users) => {
    this.setState({users: users})
  })
  }


  const handleChange = (e) => {
    setName({
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(name));
  };

  const localStorage = () => {
    showData = JSON.parse(localStorage.getItem("user"));

    if (localStorage.getItem("user")) {
      this.setState({
        user: showData.name,
        password: showData.password,
      });
    }
  };*/

  return (
    /*Contenedor general*/

    <div className="conteiner-general-login">
      <div className="row row-login">
          
        <Titulo />
        <Sesion />
      </div>
      <div className="footer">
        <footer> Telenet de México S.A.de C.V. </footer>
      </div>
    </div>
  );
};

export default Login;
