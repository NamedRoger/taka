import React,{useState,useEffect} from 'react';
import { Col, Row, Container } from '@themesberg/react-bootstrap';
import HeaderPage from '../../../components/HeaderPage';
import FormGrupos from './form';
import TablaGrupos from './tabla';
import * as serviceGrupos  from '../../../services/grupos.js';

const getGrupos = async () => {
    let grupos = [];
    try{
        grupos = await serviceGrupos.getGrupos();
        return grupos;
    }catch(e){
        return grupos;
    }
}

const Grupos = () => {
    const initGrupo = {
        idGroup:0,
        name:'',
        idSpeciality:0
    }
    const [grupo,setGrupo] = useState(initGrupo);
    const [grupos,setGrupos] = useState([]);

    const onEdtiGrupo = async (id) => {
        const grupo = grupos.find(p => p.idGroup === id);
        setGrupo({
            ...grupo
        });
    }

    useEffect(() => {
        (async() => setGrupos(await getGrupos()))();
    },[]);

    const onSelect = ({id,operation}) => {
        switch(operation){
            case 'delete':
                // onDeletePeriodo(id);
                break;
            case 'edit':
                onEdtiGrupo(id);
                break;
            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(grupo);
    }

    
    const setValue = (input)  => {
        const key = input.name;
        setGrupo({
            ...grupo,
            [key]:input.value
        });
    }

    const onReset = () => {
        setGrupo(initGrupo);
    }


    return(
        <Container>
            <HeaderPage title={"Grupos"}></HeaderPage>
            <Row>
                <Col>
                    <FormGrupos data={grupo} onSubmit={handleSubmit} onChage={setValue} onReset={onReset}></FormGrupos>
                </Col>
            </Row>
            <div className="mt-4">
                <TablaGrupos data={grupos} onClick={onSelect}></TablaGrupos>
            </div>
        </Container>
    );
}

export default Grupos;