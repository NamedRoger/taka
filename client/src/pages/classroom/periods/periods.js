import React, {useEffect, useState} from 'react';
import FormPeriodos from './form';
import TablaPeriodos from './tabla';
import { Col, Row, Container } from '@themesberg/react-bootstrap';
import HeaderPage from '../../../components/HeaderPage';
import * as servicePeriodos  from '../../../services/periodos';

const getPeriodos = async () => {
    let periodos;
    try{
        periodos = await servicePeriodos.getPeriodos();
    }catch(e){
        periodos = [];
    }
    return periodos;
}
const Periodos = () => {
    const [periodos,setPeriodos] = useState([]);

    getPeriodos();

    useEffect(() => {
        (async () => setPeriodos(await getPeriodos()))();
    },[]);

    return (
        <Container>
            <HeaderPage title={"Periodos"}></HeaderPage>
            <Row>
                <Col>
                    <FormPeriodos></FormPeriodos>
                </Col>
            </Row>
            <div className="mt-4">
                <TablaPeriodos data={periodos}></TablaPeriodos>
            </div>
        </Container>

    );
}

export default Periodos;