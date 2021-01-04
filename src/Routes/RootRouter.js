import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { updateAuthToken } from "Shared/Axios";
import AppHOC from "Components/HOC/AppHOC";
import { AUTH_ROUTES } from "./AuthRoutes";
import { PUBLIC_ROUTES } from "./PublicRoutes";
import { PRIVATE_ROUTES } from "./PrivateRoutes";
import DocumentTitle from "./DocumentTitle";
import PublicLayout from "Components/HOC/PublicLayout";
import PrivateLayout from "Components/HOC/PrivateLayout";
import RenderRoutes from "./RenderRoutes";

const DEFAULT_AUTHENTICATED_ROUTE = "/dashboard";
const DEFAULT_GUEST_ROUTE = "/login";

const GuestRoutes = () => {
  return (
    <Switch>
      <Route path={AUTH_ROUTES.map((route) => route.path)}>
        <RenderRoutes routes={AUTH_ROUTES} />
      </Route>
      <Route exact path={PUBLIC_ROUTES.map((route) => route.path)}>
        <PublicLayout>
          <RenderRoutes routes={PUBLIC_ROUTES} />
        </PublicLayout>
      </Route>
      <Redirect from="*" to={DEFAULT_GUEST_ROUTE} />
    </Switch>
  );
};

const AuthenticatedRoutes = () => {
  const routes = PUBLIC_ROUTES.concat(PRIVATE_ROUTES);
  return (
    <PrivateLayout>
      <Switch>
        <Route path={routes.map((route) => route.path)}>
          <RenderRoutes routes={routes} />
        </Route>
        <Redirect from="*" to={DEFAULT_AUTHENTICATED_ROUTE} />
      </Switch>
    </PrivateLayout>
  );
};

const RootRouter = () => {
  const token = useSelector((state) => state.auth.token);
  updateAuthToken(token);
  const baseName = process.env.REACT_APP_BASE_NAME;
  return (
    <BrowserRouter basename={baseName}>
      <DocumentTitle isAuthenticated={!!token} />
      <AppHOC>{token ? <AuthenticatedRoutes /> : <GuestRoutes />}</AppHOC>
    </BrowserRouter>
  );
};

export default RootRouter;
