import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../Componentes/Dashboard';
import Boletines from '../Componentes/Componentes-boletines/Boletines';
import MiPerfil from '../Componentes/MiPerfil';
import BoletinesView from '../Componentes/Componentes-secundarios/BoletinesView';
import Listado from '../Componentes/Componentes-Listado/ListadoBoletines';
import Admin from './Componentes-Admin/Admin';
import AuthService from './Componentes-login/service/auth.service';

function Navegacion() {
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if(user) {
      setCurrentUser(user);
      setShowAdminBoard(user.user.includes(user.isAdmin));
    }
    console.log('user', user.user.isAdmin);
  }, []);

  // function roleRestric(user){
  //   if(user.user.isAdmin.includes(true || 'true')){
  //     return true
  //   }
  // }
  return (
    <Switch>
      {/**/}
      <Route exact path='/vista/dashboard' component={Dashboard} />
      <Route path='/vista/boletines' component={Boletines} />
      <Route path='/vista/listado' component={Listado} />

      <Route path='/vista/view/:id' component={BoletinesView} />
      <Route path='/vista/miperfil' component={MiPerfil} />
     {setShowAdminBoard && (<Route path='/vista/admin' component={Admin} />)} 
      {/*<Route component={PageNotFound}/>*/}
    </Switch>
  );
}

export default Navegacion;
