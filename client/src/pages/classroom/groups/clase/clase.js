import React, { useCallback, useEffect, useState } from 'react';
import { Col, Row, Container } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import TablaAlumnos from './tabla-alumnos';
import * as clasesService from '../../../../services/clases';


const Clase = ({ match }) => {
    const { idGrupo,idClase } = match.params;
    const [data,setData] = useState([]);

    const getAlumnos = useCallback(() => {
        clasesService.getAlumnos(idClase).then(res => setData(res.data.claseAlumnos));
    },[idClase]);

    useEffect(() => {
        getAlumnos();
    },[getAlumnos]);
    return (
        <Container>
            <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
                <Col className="d-block mb-4 mb-md-0">
                    <h1 className="h2">
                        <Link to={`/classroom/grupos/${idGrupo}/horarios`}>
                            <FontAwesomeIcon icon={faArrowAltCircleLeft} color="#2FA1E7" size="1x"></FontAwesomeIcon>
                        </Link>
                        Clases
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <TablaAlumnos data={data}></TablaAlumnos>
                </Col>
            </Row>
        </Container>

    );
}

export default Clase;