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
    const initPeriodo = {
        idPeriodo:0,
        nombre:'',
        fechaInicio:'',
        fechaFin:''
    }
    const [periodos,setPeriodos] = useState([]);
    const [periodo,setPeriodo] = useState(initPeriodo);


    const onEdtiPeriodo = async (id) => {
        const periodo = periodos.find(p => p.idPeriodo === id);
        setPeriodo({
            ...periodo,
            fechaFin:periodo.fechaFin?dayjs(periodo.fechaFin).format('YYYY-MM-DD'):'',
            fechaInicio:periodo.fechaInicio?dayjs(periodo.fechaInicio).format('YYYY-MM-DD'):''
        });
    }
    
    const onDeletePeriodo = async (id) => {
        const res = await servicePeriodos.deletePeriodo(id);
        console.log(id);
        if(res.status === 204){
            setPeriodos(await getPeriodos());
            onReset();
        }
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        let res;
        try{
            if(periodo.idPeriodo === 0){
                res = await servicePeriodos.addPeriod(periodo);
            }else {
                res = await servicePeriodos.updatePeriodo(periodo.idPeriodo,periodo);
            }
            
            if(res.status === 200 || res.status === 201 || res.status === 204 ){
                setPeriodos(await getPeriodos());
                onReset();
            }else{
                alert('Ocurrio un error');
            }
        }catch(e){
            alert(e.message);
        }
       
    }

    
    const setValue = (input)  => {
        const key = input.name;
        setPeriodo({
            ...periodo,
            [key]:input.value
        });
    }

    const onReset = () => {
        setPeriodo(initPeriodo);
    }

    return (
        <Container>
            <HeaderPage title={"Periodos"}></HeaderPage>
            <Row>
                <Col>
                    <FormPeriodos data={periodo} onSubmit={handleSubmit} onChage={setValue} onReset={onReset}></FormPeriodos>
                </Col>
            </Row>
            <div className="mt-4">
                <TablaPeriodos data={periodos} onClick={onSelect}></TablaPeriodos>
            </div>
        </Container>

    );
}

export default Periodos;