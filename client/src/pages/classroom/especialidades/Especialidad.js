import React, { useState,useEffect} from 'react';
import { Col, Row, Container } from '@themesberg/react-bootstrap';
import HeaderPage from '../../../components/HeaderPage';
import TablaEspecialidad from './TablaEspecialidad';
import FormEspecialidad from './Form';
import * as serviceEspecialidades  from '../../../services/especialidades.js';

const getEspecialidades = async () => {
    let especialidades = [];
    try{
        especialidades = await serviceEspecialidades.getEspecialidades();
        return especialidades;
    }catch(e){
        return especialidades;
    }
}


export default function Especialidad() {
    const initEspecialidad = {
        idSpecialty:0,
        name:'',
    }
    const [especialidades, setEspecialidades] = useState([]);
    const [especialidad, setEspecialidad] = useState(initEspecialidad);

    useEffect(() => {
        (async () => {
            await setEspecialidades(await getEspecialidades());
        })();
    },[]);

    const setValue = (input)  => {
        const key = input.name;
        setEspecialidad({
            ...especialidad,
            [key]:input.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(especialidad);
    }

    const onReset = () => {
        setEspecialidad(initEspecialidad);
    }

    
    const onEdtiEspecialidad = async (id) => {
        const especialidad = especialidades.find(p => p.idSpecialty === id);
        setEspecialidad({
            ...especialidad
        });

    }

    const onSelect = ({id,operation}) => {
        switch(operation){
            case 'delete':
                // onDeletePeriodo(id);
                break;
            case 'edit':
                onEdtiEspecialidad(id);
                break;
            default:
                break;
        }
    }


    return (
        <>
        <Container>
            <HeaderPage title={"Especialidad"}></HeaderPage>
            <Row>
                <Col>
                    <FormEspecialidad data={especialidad} onChange={setValue} onSubmit={handleSubmit} onReset={onReset}/>
                </Col>
            </Row>
            <div className="mt-4">
            <TablaEspecialidad data={especialidades} onSelect={onSelect}/>
            </div>
        </Container>
        </>
    )
}
