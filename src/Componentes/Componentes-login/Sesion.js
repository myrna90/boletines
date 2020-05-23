import BtnLogin from '../Componentes-login/ButtonLogin';
import ImgPersonas from '../imgs/img-login.png';
import { Link } from "react-router-dom";
import React, { useContext, useState, useReducer } from 'react';
import users from '../users.json';

const Sesion = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const btnForgot = () => {
    return alert("favor de comunicarse con soporte técnico")
  }
  return (
    <div className="conteiner-sesion">
      <div className="text-inicio">
        <h2 className="text-conten">Inicie sesión ahora...</h2>
        <p className="p-conten">Su cuenta esta vinculada con el dominio, puede acceder al sistema usando las mismas credenciales.</p>
      </div>

      <div className="login">
        <form className="form" onSubmit={handleSubmit}>

          {/*div para introducir email */}
          <div className="conten-inputs">
            <label className="text-login text-user" htmlFor="user">Nombre de usuario:</label>
            <input required type="text" className="input-login" name="user"
              placeholder="Myrna Mares"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <div className="img-correo"><span className="material-icons md-25">email</span></div>
          </div>

          {/*div para introducir password */}
          <div className="conten-inputs">
            <label className="text-login text-passw" htmlFor="password">Contraseña: </label>
            <input className="input-login" type="password" name="password"
              placeholder="**********"
              value={password}
              onChange={e => setPassword(e.target.value)}

            />
            <div className="img-contraseña"><span className="material-icons md-25">https</span></div>
          </div>

          {/*div para recordar usuario */}

          <div className="custom-control custom-checkbox">
            <input type="submit" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">Recordarme</label>
          </div>

          <button className="btn-login btn" disabled={!validateForm()}>Login</button>
          <p className="forgot-password text-right">
            Olvidaste tu <Link className="a-forgot" onClick={btnForgot}>contraseña?</Link>
          </p>
        </form>

      </div>
      <img src={ImgPersonas} className="miImg2" />
    </div>
  )
}

export default Sesion;