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
        idEspecialidad:0,
        nombre:'',
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(especialidad.idEspecialidad === 0){
            const res = await serviceEspecialidades.addEspecialidad(especialidad);
            if(res.status === 201 || res.status === 200 || res.status === 204) {
                await setEspecialidades(await getEspecialidades());
                onReset();
            }
            else alert('Ocurrio un error');
        }else{
            const res = await serviceEspecialidades.updateEspecialidad(especialidad.idEspecialidad,especialidad);
            if(res.status === 204) {
                await setEspecialidades(await getEspecialidades())
                onReset();
            }
            else alert('Ocurrio un error');
        }
    }

    const onReset = () => {
        setEspecialidad(initEspecialidad);
    }

    
    const onEdtiEspecialidad = async (id) => {
        const especialidad = especialidades.find(p => p.idEspecialidad === id);
        setEspecialidad({
            ...especialidad
        });

    }

    const onSelect =({id,operation}) => {
        switch(operation){
            case 'delete':
                serviceEspecialidades.deleteEspecialidad(id).then(
                    res => {
                        if(res.status === 204){
                            getEspecialidades().then(res => setEspecialidades(res))
                            onReset();
                        }
                        else alert('Ocurrio un error');
                    },
                    err => console.log(err)
                );
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
