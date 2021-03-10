import React, { useState} from 'react';
import { Col, Row, Container } from '@themesberg/react-bootstrap';
import HeaderPage from '../../../components/HeaderPage';
import TablaMaterias from './TablaMaterias';
import FormMaterias from './Form';

export default function Especialidad() {
    const [materias, setMaterias] = useState([]);
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
            <HeaderPage title={"Materias"}></HeaderPage>
            <Row>
                <Col>
                    <FormMaterias {...Props} />
                </Col>
            </Row>
            <div className="mt-4">
            <TablaMaterias data={materias} />
            </div>
        </Container>
        </>
    )
}