import BtnLogin from "../Componentes-login/ButtonLogin";
import ImgPersonas from "../imgs/img-login.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { userService } from "./services/user.service";

const Sesion = (props) => {
  userService.logout();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, password, value } = e.target;
    setName({ [name]: value });
    setPassword({[password]: value});
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setSubmitted({ submitted: true });
    const { name, password, returnUrl } = useState;

    // Deténgase aquí si la forma es inválida
    if (!(name && password)) {
      return;
    }

    setLoading({ loading: true });
    userService.login(name, password).then(
      (user) => {
        const { from } = props.location.useState || { from: { pathname: "/" } };
        props.history.push(from);
      },
      (error) => setError({ error, loading: false })
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
        <form className="form" onSubmit={() => handleFormSubmit()}>
          {/*div para introducir email */}
          <div
            className={
              "form-group conten-inputs" +
              (submitted && !name ? " has-error" : "")
            }
          >
            <label className="text-login text-user" htmlFor="user">
              Nombre de usuario:
            </label>
            <input
              required
              type="text"
              className="input-login"
              name="user"
              placeholder="Myrna Mares"
              valueDefault={name}
              onChange={(e) => handleChange(e)}
            />
            {submitted && !name && (
              <div className="help-block">El nombre es requerido</div>
            )}
            <div className="img-correo">
              <span className="material-icons md-25">email</span>
            </div>
          </div>

          {/*div para introducir password */}
          <div
            className={
              "form-group conten-inputs" +
              (submitted && !password ? " has-error" : "")
            }
          >
            <label className="text-login text-passw" htmlFor="password">
              Contraseña:{" "}
            </label>
            <input
              className="input-login"
              type="password"
              name="password"
              placeholder="**********"
              valueDefault={password}
              onChange={(e) => handleChange(e)}
            />
            {submitted && !password && (
              <div className="help-block">La contraseña es requerida</div>
            )}
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
          {error && <div className={"alert alert-danger"}>{error}</div>}
        </form>
      </div>
      <img src={ImgPersonas} className="miImg2" />
    </div>
  );
};

export default Sesion;
