import React,{useState,useEffect} from 'react';
import { Col, Row, Container } from '@themesberg/react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import TablaHorario from './tabla';
import * as periodosService from '../../../../services/periodos';

const getPeriodos = async () => {
    let periodos = [];
    try{
        periodos = await periodosService.getPeriodos();
    }catch(e){
        console.log(e);
    }
    return periodos;
}

const getHorarios = (idGrupo,idPeriodo) => {

}

// const getGrupos = async () => {
//     let grupos = [];
//     try{
//         grupos = await serviceGrupos.getGrupos();
//         return grupos;
//     }catch(e){
//         return grupos;
//     }
// }

const Horarios = ({match}) => {
    const {idGrupo} = match.params;

    const initPeriodo = {
        idPeriodo:0,
        nombre:'',
        fechaInicio:'',
        fechaFin:''
    }

    const [periodos,setPeriodos] = useState([]);
    const [periodo,setPeriodo] = useState(initPeriodo);

    useEffect(() =>{
        (async() => {
            setPeriodos(await getPeriodos());
        })();
    },[]);
    
    const [horario,setHorario] = useState({});

    const [materias,setMaterias] = useState([]);

    const onSelect = ({id,operation}) => {
        switch(operation){
            case 'delete':
                // onDeletePeriodo(id);
                break;
            case 'edit':
                // onEdtiGrupo(id);
                break;
            default:
                break;
        }
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(grupo);
    // }

    
    // const setValue = (input)  => {
    //     const key = input.name;
    //     setGrupo({
    //         ...grupo,
    //         [key]:input.value
    //     });
    // }

    // const onReset = () => {
    //     setGrupo(initGrupo);
    // }


    return(
        <Container>
            
            <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
                <Col className="d-block mb-4 mb-md-0">
                    <h1 className="h2">
                        <Link to="/classroom/grupos">
                            <FontAwesomeIcon icon={faArrowAltCircleLeft} color="#2FA1E7" size="1x"></FontAwesomeIcon>
                        </Link>
                        Horarios
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    {/* <FormGrupos data={grupo} onSubmit={handleSubmit} onChage={setValue} onReset={onReset}></FormGrupos> */}
                </Col>
            </Row>
            <Row>
                <Col xs="12">
                    <div className="mt-4">
                        <div className="col">
                            Periodo:
                            <select className="" value={periodo.idPeriodo}  onChange={(e) => {
                                setPeriodo({
                                    ...periodo,
                                    idPeriodo: Number(e.target.value)
                                });
                            }}>
                                    <option value={initPeriodo.idPeriod} >-- Selecciona el periodo --</option>
                                    {periodos.map( p => <option key={p.idPeriodo} value={p.idPeriodo}>{p.nombre}</option>)}
                            </select>
                            {
                                !(periodo.idPeriodo) ? 
                                null
                                :
                                <button className="btn btn-sm btn-success">
                                    Agregar
                                </button>
                            }
                           
                
                        </div>
                    </div>
                </Col>
                <Col>
                <div className="mt-4">
                    {
                        periodo.idPeriodo !== 0 ? 
                        <TablaHorario data={materias} onClick={onSelect}></TablaHorario>
                        :
                        <span>Selecciona un periodo</span>
                    }
                </div>
               
                   
                </Col>
            </Row>
        </Container>
    );
}

export default Horarios;