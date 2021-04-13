import React, { useEffect, useState} from 'react';
import { Col, Row, Container } from '@themesberg/react-bootstrap';
import HeaderPage from '../../../components/HeaderPage';
import TablaMaterias from './TablaMaterias';
import FormMaterias from './Form';
import * as serviceMaterias  from '../../../services/materias.js';

const getMaterias = async () => {
    let materias = [];
    try{
        materias = await serviceMaterias.getMaterias();
        return materias;
    }catch(e){
        return materias;
    }
}


export default function Materias() {
    const initMateria = {
        idTopic:0,
        name:''
    }
    const [materias, setMaterias] = useState([]);
    const [materia, setMateria] = useState(initMateria);

    useEffect(() => {
        (async() => {
            setMaterias(await getMaterias());
        })();
    },[]);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        let res;
        if(materia.idTopic === 0){
            res = await serviceMaterias.addMateria(materia);
        }else{
            res = await serviceMaterias.updateMateria(materia.idTopic, materia);
        }

        if(res.status === 200 || res.status === 201 || res.status === 204 ){
            setMaterias(await getMaterias());
            reset();
        }else{
            alert('Ocurrio un error');
        }
    }

    
    const setValue = (input)  => {
        const key = input.name;
        setMateria({
            ...materia,
            [key]:input.value
        });
    }

    const reset = () => {
        setMateria(initMateria);
    }

    const onDeleteMateria = async (id) => {
        const res = await serviceMaterias.desactiveMateria(id);
        if(res.status === 204){
            setMaterias(await getMaterias());
            reset();
        }else{
            alert('Ocurrió un error');
        }
    }

    const onEdtiMateria = async (id) => {
        console.log(id);
        const materia = materias.find(p => p.idTopic === id);
        setMateria({
            idTopic:materia.idTopic,
            name:materia.name
        });

    }

    const onSelect = ({id,operation}) => {
        switch(operation){
            case 'delete':
                onDeleteMateria(id);
                break;
            case 'edit':
                onEdtiMateria(id);
                break;
            default:
                break;
        }
    }

  
    return (
        <>
        <Container>
            <HeaderPage title={"Materias"}></HeaderPage>
            <Row>
                <Col>
                    <FormMaterias data={materia}  onChange={setValue} onSubmit={handleSubmit} onReset={reset}/>
                </Col>
            </Row>
            <div className="mt-4">
            <TablaMaterias data={materias} onSelect={onSelect}/>
            </div>
        </Container>
        </>
    )
}