import BtnLogin from "../Componentes-login/ButtonLogin";
import ImgPersonas from "../imgs/img-login.png";
import { Link } from "react-router-dom";
import React, { useContext, useState, useReducer } from "react";
const Sesion = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const btnForgot = () => {
    return alert("favor de comunicarse con soporte técnico");
  };
  return (
    <div className="conteiner-sesion">
      <div className="text-inicio">
        <h2 className="text-conten">Inicie sesión ahora...</h2>
        <p className="p-conten">
          Su cuenta esta vinculada con el dominio, puede acceder al sistema
          sando las mismas credenciales.
        </p>
      </div>

      <div className="login">
        <form
          className="form"
         /*onSubmit={handleFormSubmit}*/
        >
          {/*div para introducir email */}
          <div className="conten-inputs">
            <label className="text-login text-user" htmlFor="user">
              Nombre de usuario:
            </label>
            <input
              required
              type="text"
              className="input-login"
              name="user"
              placeholder="Myrna Mares"
            
            />
            <div className="img-correo">
              <span className="material-icons md-25">email</span>
            </div>
          </div>

          {/*div para introducir password */}
          <div className="conten-inputs">
            <label className="text-login text-passw" htmlFor="password">
              Contraseña:{" "}
            </label>
            <input
              className="input-login"
              type="password"
              name="password"
              placeholder="**********"
              
            />
            <div className="img-contraseña">
              <span className="material-icons md-25">https</span>
            </div>
          </div>

          {/*div para recordar usuario */}

          <div className="custom-control custom-checkbox">
            <input
              type="submit"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Recordarme
            </label>
          </div>

          <BtnLogin />
          <p className="forgot-password text-right">
            Olvidaste tu{" "}
            <Link className="a-forgot" onClick={btnForgot}>
              contraseña?
            </Link>
          </p>
        </form>
      </div>
      <img src={ImgPersonas} className="miImg2" />
    </div>
  );
};

export default Sesion;
