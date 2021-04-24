import React, { useCallback, useEffect, useState } from 'react';
import {Container,Row, Col} from '@themesberg/react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import useUser from '../../../hooks/useUser';
import TablaAlumnos from '../../../components/tabla-alumnos';
import { ROLES } from '../../../consts';
import * as maestrosService from '../../../services/maestros';
import * as claseService from '../../../services/clases';
import TablaClase from './tabla-clase';

const Clase = ({match}) => {
    const {idClase,idPeriodo} = match.params;
    const {primarysid,role} = useUser();
    const [data,setData] = useState([]);
    const [clase,setClase] = useState(null);
    const getClase = useCallback(() => {
        if(role === ROLES.Maestro){
            maestrosService.getClase(Number(primarysid),idPeriodo,idClase).then(res => setData(res.data.claseAlumnos));
        }else{
            claseService.getClase(idPeriodo,Number(primarysid),idClase).then(res => setClase(res.data));
        }
    },[idClase, idPeriodo, primarysid, role]);

    useEffect(() => {
        getClase();
    },[getClase]);

    return(
        <Container>
             <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
                <Col className="d-block mb-4 mb-md-0">
                    <h1 className="h2">
                        <Link to={`/tablero`}>
                            <FontAwesomeIcon icon={faArrowAltCircleLeft} color="#2FA1E7" size="1x"></FontAwesomeIcon>
                        </Link>
                        Clase 
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    {role === ROLES.Maestro ?
                        <TablaAlumnos data={data}></TablaAlumnos>
                        :clase?<TablaClase data={clase.claseAlumnos[0]}></TablaClase>:<></>
                    }
                </Col>
            </Row>
    </Container>
    );
}

export default Clase;