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
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(materia);
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
                // onDeletePeriodo(id);
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