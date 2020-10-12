import React from 'react';
import Titulo from './Titulo';
import Sesion from './Sesion';

const Login = (props) => {
  return (
    /*Contenedor general*/

    <div className='container-general-login'>
      <div className='row row-login'>
        <Titulo />
        <Sesion />
      </div>
      <div className='footer'>
        <footer> Telenet de México S.A.de C.V. </footer>
      </div>
    </div>
  );
};

export default Login;
