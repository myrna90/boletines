import React, { useEffect, useState } from "react";
import Navegacion from "../Componentes/Navegacion";
import MenuToggle from "../Componentes/Componentes-secundarios/MenuToggle";
import AuthService from '../Componentes/Componentes-login/service/auth.service'

const Vista = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    
    if (user) {
      setCurrentUser(user);
      //setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  
    return (
      <div className="conteiner">
        {currentUser &&(
        <MenuToggle />
        
        )}
          {currentUser &&(
            <Navegacion />
          )}       
      </div>
    );
}
export default Vista;
