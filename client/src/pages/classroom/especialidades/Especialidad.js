import React, { useState} from 'react';
import { Col, Row, Container } from '@themesberg/react-bootstrap';
import HeaderPage from '../../../components/HeaderPage';
import TablaEspecialidad from './TablaEspecialidad';
import FormEspecialidad from './Form';

export default function Especialidad() {
    const [especialidad, setEspecialidad] = useState([]);
    const [nuevo, setNuevo] = useState('');

    const handleChange = (e) => {
        setNuevo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nuevo);
    }
    const Props = {
        nuevo,
        handleChange,
        handleSubmit
    }
    return (
        <>
        <Container>
            <HeaderPage title={"Especialidad"}></HeaderPage>
            <Row>
                <Col>
                    <FormEspecialidad {...Props} />
                </Col>
            </Row>
            <div className="mt-4">
            <TablaEspecialidad data={especialidad} />
            </div>
        </Container>
        </>
    )
}
