import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../routes";

// pages
import Signin from "./auth/Signin";
import ForgotPassword from "./examples/ForgotPassword";
import ResetPassword from "./examples/ResetPassword";
import Lock from "./examples/Lock";
import NotFoundPage from "./examples/NotFound";
import ServerError from "./examples/ServerError";
import Especialidad from './classroom/especialidades/Especialidad';
import Materias from './classroom/materias/Materias';

// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";


import Periodos from './classroom/periods/periods';
import Grupos from './classroom/groups/grupos';
import Horarios from './classroom/groups/horarios/horarios';
import { Container } from '@themesberg/react-bootstrap';

import { UserContext } from '../contexts/UserContext';
import useUser from '../hooks/useUser';
import Usuarios from './admin/usuarios/usuarios';
import Clase from './classroom/groups/clase/clase';
import Tablero from './dashboard/tablero';
import ClaseTablero from './dashboard/clase/clase';

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => (<> <Preloader show={loaded ? false : true} /> <Component {...props} /> </>)} />
  );
};

const RouteWithSidebar = ({ component: Component, roles, ...rest }) => {
  const [loaded, setLoaded] = useState(false);
  const { isLogged, role } = useUser();
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem('settingsVisible') === 'false' ? false : true
  }

  const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem('settingsVisible', !showSettings);
  }

  return (
    <Route {...rest} render={props => {
      if (!isLogged) {
        return <Redirect to="/login"></Redirect>
      }

      if (roles && roles.indexOf(role) === -1) {
        return <Redirect to="/"></Redirect>
      }

      return (
        <>
          <Preloader show={loaded ? false : true} />
          <Sidebar />

          <main className="content">
            <Navbar />
            <Component {...props} />
            <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
          </main>
        </>
      );

    }} />
  );
};


const Home = () => {
  return (
    <Container>
      <h1>Bienvendio </h1>
    </Container>
  );
}

export default () => (
  <UserContext>
    <Switch>
      <RouteWithLoader exact path={Routes.Signin.path} component={Signin} />
      <RouteWithLoader exact path={Routes.ForgotPassword.path} component={ForgotPassword} />
      <RouteWithLoader exact path={Routes.ResetPassword.path} component={ResetPassword} />
      <RouteWithLoader exact path={Routes.Lock.path} component={Lock} />
      <RouteWithLoader exact path={Routes.NotFound.path} component={NotFoundPage} />
      <RouteWithLoader exact path={Routes.ServerError.path} component={ServerError} />

      <RouteWithSidebar exact path={Routes.Presentation.path} component={Home} roles="Administrador,Maestro,Alumno" />

      <RouteWithSidebar exact path={Routes.DashboardOverview.path} component={Tablero} roles="Maestro,Alumno" />
      <RouteWithSidebar exact path={Routes.DashboardOverview.children.clase} component={ClaseTablero} roles="Maestro,Alumno" />

      {/* pages */}
      <RouteWithSidebar exact path={Routes.Especialidad.path} component={Especialidad} roles={["Administrador"]} />
      <RouteWithSidebar exact path={Routes.Materias.path} component={Materias} roles={["Administrador"]} />

      {/* documentation */}
      <RouteWithSidebar exact path={Routes.Periodos.path} component={Periodos} roles="Administrador" />
      <RouteWithSidebar exact path={Routes.Grupos.path} component={Grupos} roles={["Administrador"]} />
      <RouteWithSidebar exact path={Routes.Grupos.children.horarios} component={Horarios} roles={["Administrador"]} />
      <RouteWithSidebar exact path={Routes.Grupos.children.clase} component={Clase} roles={["Administrador"]} />
      <RouteWithSidebar exact path={Routes.Usuarios.path} component={Usuarios} roles={["Administrador"]} />


      <Redirect to={Routes.NotFound.path} />
    </Switch>
  </UserContext>

);
