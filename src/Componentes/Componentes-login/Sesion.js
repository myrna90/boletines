import BtnLogin from '../Componentes-login/ButtonLogin';
import ImgPersonas from '../imgs/img-login.png';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import AuthService from './service/auth.service';
import history from '../../history';
import Loader from 'react-loader-spinner';

const Sesion = (props) => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

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
    setMessage('');
    setLoading(true);
    //form.current.validateAll();
    AuthService.login(email, password).then((res) => {
      console.log(res);
      if (res.status === 401) {
        const resMessage = 'El usuario y/o contraseña no valido';
        setLoading(false);
        setMessage(resMessage);
      } else if (res === 'ERR_CONNECTION_REFUSE') {
        const resMessage = 'El servidor no está disponible, intente mas tarde';
        setLoading(false);
        setMessage(resMessage);
      } else {
        history.push('/vista/dashboard');
        window.location.reload();
      }
    });
  };

  const btnForgot = () => {
    return alert('favor de comunicarse con soporte técnico');
  };

  return (
    <div className='container-sesion'>
      {loading ? (
        <div className='loading-container'>
          <Loader type='Grid' color='#ffffff' height={30} width={30} />
          <br />
          <span>Iniciando sesión</span>
        </div>
      ) : null}
      <div className='text-inicio'>
        <h2 className='text-conten'>Inicie sesión ahora...</h2>
        <p className='p-conten'>
          Su cuenta esta vinculada con el dominio, puede acceder al sistema
          usando las mismas credenciales.
        </p>
      </div>
      <div className='login'>
        <form className='form' onSubmit={handleLogin}>
          {/*div para introducir email */}
          <div className='form-group conten-inputs'>
            <label className='text-login text-user' htmlFor='user'>
              Email:
            </label>
            <input
              type='email'
              className='input-login'
              name='user'
              placeholder='usuario@telenetdemexico.com'
              value={email}
              onChange={onChangeemail}
              disabled={loading}
            />
            <div className='img-correo'>
              <span className='material-icons md-25'>email</span>
            </div>
          </div>

          {/*div para introducir password */}
          <div className='form-group conten-inputs'>
            <label className='text-login text-passw' htmlFor='password'>
              Contraseña:{' '}
            </label>
            <input
              required
              className='input-login'
              type='password'
              name='password'
              placeholder='**********'
              value={password}
              onChange={onChangePassword}
              disabled={loading}
            />

            <div className='img-contraseña'>
              <span className='material-icons md-25'>https</span>
            </div>
          </div>

          {/*div para recordar usuario */}

          {/*<div className="custom-control custom-checkbox">
            <input
              type="submit"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Recordarme
            </label>
          </div>*/}
          {message && (
            <div className='form-group'>
              <div className='alert alert-danger ' role='alert'>
                {message}
              </div>
            </div>
          )}
          <BtnLogin />
          <p className='forgot-password text-right'>
            Olvidaste tu{' '}
            <Link className='a-forgot' onClick={btnForgot}>
              contraseña?
            </Link>
          </p>
        </form>
      </div>
      <img src={ImgPersonas} className='miImg2' />
    </div>
  );
};

export default Sesion;
