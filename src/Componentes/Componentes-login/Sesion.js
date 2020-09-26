import BtnLogin from "../Componentes-login/ButtonLogin";
import ImgPersonas from "../imgs/img-login.png";
import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";
import AuthService from "./service/auth.service";

const Sesion = (props) => {

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

  const onChangeemail = (e) => {
    const email = e.target.value;
    setemail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    //form.current.validateAll();
      AuthService.login(email, password).then(
        () => {
          props.history.push("/MiPerfil");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.res &&
              error.res.data &&
              error.res.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
  };

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
        <form className="form" onSubmit={handleLogin}>
          {/*div para introducir email */}
          <div className="form-group conten-inputs">
            <label className="text-login text-user" htmlFor="user">
              Nombre de usuario:
            </label>
            <input
              required
              type="text"
              className="input-login"
              name="user"
              placeholder="Myrna Mares"
              value={email}
              onChange={onChangeemail}
              validations={[required]}
            />
            <div className="img-correo">
              <span className="material-icons md-25">email</span>
            </div>
          </div>

          {/*div para introducir password */}
          <div className="form-group conten-inputs">
            <label className="text-login text-passw" htmlFor="password">
              Contraseña:{" "}
            </label>
            <input
              className="input-login"
              type="password"
              name="password"
              placeholder="**********"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
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
          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <BtnLogin/>
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
