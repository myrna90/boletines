import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "../Componentes-principales/Login";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        Login() && restricted ? (
          <Redirect to="/Vista/Dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
