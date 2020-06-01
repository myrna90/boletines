import React from "react";
import { Route, Redirect } from "react-router-dom";
//COMENTAR SOLAMENTE EL CONTENIDO DE LA FUNCION PARA NO GENERAR ERRORES

const PrivateRoute = ({ component: Component, auth }) => (
  <Route
    render={(props) =>
      auth === true ? (
        <Component auth={auth} {...props} />
      ) : (
        <Redirect to={{ pathname: "/Vista/Dashboard" }} />
      )
    }
  />
);

export default PrivateRoute;
