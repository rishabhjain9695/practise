import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { updateAuthToken } from "Shared/Axios";
import AppHOC from "Components/HOC/AppHOC";
import { AUTH_ROUTES } from "./AuthRoutes";
import { PUBLIC_ROUTES } from "./PublicRoutes";
import { PRIVATE_ROUTES } from "./PrivateRoutes";
const RootRouter = () => {
  const token = useSelector((state) => state.auth.token);
  updateAuthToken(token);
  const baseName = process.env.REACT_APP_BASE_NAME;
  return (
    <BrowserRouter basename={baseName}>
      <AppHOC>
        <Switch>
          {PUBLIC_ROUTES.concat(token ? PRIVATE_ROUTES : AUTH_ROUTES).map((route) => (
            <Route path={route.path} component={route.Component} key={route.path}></Route>
          ))}
          <Route path={"/"} /> {/* handle as per your need*/}
          <Redirect from="*" to={"/"} />
        </Switch>
      </AppHOC>
    </BrowserRouter>
  );
};

export default RootRouter;
