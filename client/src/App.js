import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DefaulyLayout from './components/default-layout';
import Navbar from './components/navbar';
import PeridosIndex from './pages/periodos';

const App = () => {
    return(
        <>
            <Navbar></Navbar>
            <DefaulyLayout>
                <Switch>
                    <Route path="/periodos" component={PeridosIndex}></Route>
                    <Route path="/materias" component={}></Route>
                    {/* <Route path="/carreras" component={}></Route>
                    <Route path="/maestros" component={}></Route>
                    <Route path="/alumnos" component={}></Route>
                    <Route path="/usuarios" component={}></Route>
                    <Route path="/grupos/:clave/clases/alumnos" component={}></Route>
                    <Route path="/grupos/:clave/clases" component={}></Route>
                    <Route path="/grupos" component={}></Route> */}
                </Switch>
            </DefaulyLayout>
        </>
        
    );
}

export default App;