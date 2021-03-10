import React, {useEffect, useState} from 'react';
import FormPeriodos from './form';
import TablaPeriodos from './tabla';
import { Col, Row, Container } from '@themesberg/react-bootstrap';
import HeaderPage from '../../../components/HeaderPage';
import * as servicePeriodos  from '../../../services/periodos';
import dayjs from 'dayjs';

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
    const [periodo,setPeriodo] = useState({
        idPeriod:0,
        name:'',
        initDate:'',
        finishDate:''
    });

    getPeriodos();

    const onEdtiPeriodo = async (id) => {
        const periodo = periodos.find(p => p.idPeriod === id);
        setPeriodo({
            ...periodo,
            finishDate:periodo.finishDate?dayjs(periodo.finishDate).format('YYYY-MM-DD'):'',
            initDate:periodo.initDate?dayjs(periodo.initDate).format('YYYY-MM-DD'):''
        });
    }
    
    const onDeletePeriodo = async (id) => {
        const periodo = periodos.find(p => p.idPeriod === id);
        console.log(periodo);
    }

    useEffect(() => {
        (async () => setPeriodos(await getPeriodos()))();
    },[]);

    const onSelect = ({id,operation}) => {
        switch(operation){
            case 'delete':
                onDeletePeriodo(id);
                break;
            case 'edit':
                onEdtiPeriodo(id);
                break;
            default:
                break;
        }
    }

    const handleSubmit = (periodo) => {
        console.log(periodo);
    }

    return (
        <Container>
            <HeaderPage title={"Periodos"}></HeaderPage>
            <Row>
                <Col>
                    <FormPeriodos data={periodo} onSubmit={handleSubmit}></FormPeriodos>
                </Col>
            </Row>
            <div className="mt-4">
                <TablaPeriodos data={periodos} onClick={onSelect}></TablaPeriodos>
            </div>
        </Container>

    );
}

export default Periodos;