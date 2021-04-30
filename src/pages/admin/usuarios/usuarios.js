import { Col, Container, Row } from '@themesberg/react-bootstrap';
import React, { useCallback, useEffect, useState } from 'react';
import HeaderPage from '../../../components/HeaderPage';
import FormUsuario from './form';
import * as userService from '../../../services/usuarios';
import TablaUsuarios from './tabla';

const addUsuario = async () => {

}

const updateUsuario = async () => {

}

const deleteUsuario = async () => {

}


const Usuarios = () => {
    const userInit = {

    };

    const [usuarios,setUsuarios] = useState([]);
    const [usuario,setUsuario] = useState(userInit);

    const usersCallback = useCallback(() => {
        userService.getUsuarios().then(res => {
            setUsuarios(res.data);
        }).catch(err => console.log(err));
    },[setUsuarios]);

    useEffect(() => {
        usersCallback();
    },[usersCallback]);

    const onSubmit = () => {

    }

    const onReset = () => {
        setUsuario(userInit);
    }

    const setInput = () => {

    }
    return(
        <Container>
            <HeaderPage title={"Usuarios"}></HeaderPage>
            <Row>
                <Col>
                    <FormUsuario data={usuario} onSubmit={onSubmit} onChage={setInput} onReset={onReset}></FormUsuario>
                </Col>
            </Row>
            <div className="mt-4">
                <TablaUsuarios data={usuarios}></TablaUsuarios>
                {/* <TablaGrupos data={grupos} onClick={onSelect}></TablaGrupos> */}
            </div>
        </Container>
    );
}

export default Usuarios;