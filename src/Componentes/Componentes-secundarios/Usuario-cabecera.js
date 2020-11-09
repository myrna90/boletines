import React from "react";
import AuthService from '../Componentes-login/service/auth.service';

function UsuarioCabecera(props) {

  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="conteiner-usuario">
      <i className="material-icons md-12">person</i>
      <p className="input-usuario">{currentUser.user.email}</p>
    </div>
  );
}


export default UsuarioCabecera;
