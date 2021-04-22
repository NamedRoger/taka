import React, { useState, useEffect, useCallback } from 'react';
import { Col, Row, Container } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import TablaHorario from './tabla';
import ModalClase from './modal-clase';

import * as periodosService from '../../../../services/periodos';
import * as horarioService from '../../../../services/horarios';


const getPeriodos = async () => {
    let periodos = [];
    try {
        periodos = await periodosService.getPeriodos();
    } catch (e) {
    }
    return periodos;
}

const Horarios = ({ match }) => {
    const { idGrupo } = match.params;

    const initPeriodo = {
        idPeriodo: 0,
        nombre: '',
        fechaInicio: '',
        fechaFin: ''
    }

    const initClase = {
        idCalse: 0,
        idMateria: 0,
        idMaestro: 0,
        idGrupo:0,
        idPeriodo:0
    }

    const [periodos, setPeriodos] = useState([]);
    const [periodo, setPeriodo] = useState(initPeriodo);
    const [showModal, setShowModal] = useState(false);

    const [clases, setClases] = useState([]);
    const [clase, setClase] = useState(initClase);

    useEffect(() => {
        (async () => {
            setPeriodos(await getPeriodos());
        })();
    }, [setPeriodos]);

    const getHorario = useCallback((idGrupo, idPeriodo) => {
        horarioService.getClases(idGrupo, idPeriodo).then(res => {
            setClases(res.data);
        })
    }, []);

    const selectPeriodo = (e) => {
        const idPeriodo = Number(e.target.value);
        setPeriodo({
            ...periodo,
            idPeriodo
        });

        if (idPeriodo !== 0) {
            getHorario(Number(idGrupo), idPeriodo);
        }
    }

    const onHide = useCallback(() => {
        setShowModal(false);
        setClase({
            ...initClase,
            idGrupo: Number(idGrupo),
            idPeriodo: periodo.idPeriodo  
        })
    }, [initClase, idGrupo, periodo.idPeriodo])

    const onSubmitAddClass =(e) => {
        e.preventDefault();
        if (clase.idCalse === 0) {
            horarioService.addClase(Number(idGrupo), periodo.idPeriodo, clase).then(res => {
                getHorario(Number(idGrupo), periodo.idPeriodo);
                onHide();
            });

        } else {
            horarioService.updateClase(Number(idGrupo), periodo.idPeriodo, clase.idClase, clase).then(res => {
                getHorario(Number(idGrupo), periodo.idPeriodo);
                onHide();
            });
        }

    };

    const handleEditClass = (id) => {
        const foundClase = clases.find(c => c.idClase === id);
        setClase(foundClase);
        setShowModal(true);
    }

    const AgregarHorarioMateria = (props) => {
        return (
            <div className="mt-3">
                <button className="btn btn-sm btn-success" onClick={() => {
                    setShowModal(true);
                }}>
                    Agregar Clase
                        </button>
            </div>
        );
    }

    return (
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
                <Col xs="12">
                    <div className="mt-4">
                        <div className="col">
                            Periodo:
                            <select className="" value={periodo.idPeriodo} onChange={selectPeriodo}>
                                <option value={initPeriodo.idPeriodo} >-- Selecciona el periodo --</option>
                                {periodos.map(p => <option key={p.idPeriodo} value={p.idPeriodo}>{p.nombre}</option>)}
                            </select>
                            {
                                !(periodo.idPeriodo) ?
                                    <></>
                                    :
                                    <AgregarHorarioMateria></AgregarHorarioMateria>
                            }


                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="mt-4">
                        {
                            periodo.idPeriodo === 0 ?
                                <span>Selecciona un periodo</span>
                                : <TablaHorario data={clases} handleEdit={handleEditClass}></TablaHorario>
                        }
                    </div>
                </Col>
            </Row>
            <ModalClase show={showModal}
                clase={clase}
                onSubmit={onSubmitAddClass}
                onHide={onHide}
                onChange={(e) => {
                    const { name, value } = e.target;
                    setClase({
                        ...clase,
                        [name]: value,
                        idGrupo: Number(idGrupo),
                        idPeriodo: periodo.idPeriodo
                    });
                }}
            ></ModalClase>
        </Container>
    );
}

export default Horarios;