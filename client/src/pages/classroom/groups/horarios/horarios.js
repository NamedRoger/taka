import React, { useState, useEffect, useCallback } from 'react';
import { Col, Row, Container } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import TablaHorario from './tabla';
import ModalClase from './modal-clase';

import * as periodosService from '../../../../services/periodos';
import * as grupoService from '../../../../services/grupos';
import * as horarioService from '../../../../services/horarios';


const getPeriodos = async () => {
    let periodos = [];
    try {
        periodos = await periodosService.getPeriodos();
    } catch (e) {
    }
    return periodos;
}

const getHorario = (idGrupo, idPeriodo) => {
    return grupoService.getHorario(idGrupo, idPeriodo);
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
        idHorario: 0
    }

    const [periodos, setPeriodos] = useState([]);
    const [periodo, setPeriodo] = useState(initPeriodo);
    const [showModal, setShowModal] = useState(false);

    const [clases, setClases] = useState([]);
    const [clase, setClase] = useState(initClase);

    const [horario, setHorario] = useState({});

    useEffect(() => {
        (async () => {
            setPeriodos(await getPeriodos());
        })();
    }, [setPeriodos]);

    const getClases = useCallback((idHorario) => {
        horarioService.getClases(idHorario).then(res => {
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
            getHorario(idGrupo, idPeriodo).then(res => {
                setHorario(res.data);
                setClase({
                    ...clase,
                    idHorario: res.data.idHorario
                });
                getClases(res.data.idHorario);
            })
                .catch(err => {
                    const { response } = err;
                    if (response.status === 404) {
                        setHorario(null);
                        setClase(initClase);
                    } else {
                        alert('Ocurrió un error');
                    }
                });
        }
    }

    const AddHorario = useCallback(() => {
        grupoService.addHorario(idGrupo, periodo.idPeriodo).then(res => {
            getHorario(idGrupo, periodo.idPeriodo).then(res => setHorario(res.data));
        })
            .catch(err => {
                alert("No se pudo agregar el horario");
                setHorario(null);
            });
    }, [idGrupo, periodo]);

    const onHide = useCallback(() => {
        setShowModal(false);
        setClase({
            ...clase,
            idMaestro: 0,
            idCalse: 0,
            idMateria: 0
        })
    }, [setClase, setShowModal, clase])

    const onSubmitAddClass = useCallback((e) => {
        e.preventDefault();
        if (clase.idCalse === 0) {
            horarioService.addClase(horario.idHorario, clase).then(res => {
                getClases(horario.idHorario);
                onHide();
            });

        } else {
            console.log(clase);
            horarioService.updateClase(horario.idHorario, clase.idClase, clase).then(res => {
                getClases(horario.idHorario);
                onHide();
            });
        }

    }, [horario, clase, getClases, onHide]);

    const handleEditClass = (id) => {
        const foundClase = clases.find(c => c.idClase === id);
        setClase(foundClase);
        setShowModal(true);
    }

    const AgregarHorarioMateria = (props) => {
        const { horaio } = props;
        return (
            <div className="mt-3">
                {
                    horaio ?
                        <button className="btn btn-sm btn-success" onClick={() => {
                            setShowModal(true);
                        }}>
                            Agregar Clase
                        </button>
                        :
                        <button className="btn btn-sm btn-success" onClick={() => {
                            AddHorario();
                        }}>
                            Agregar Horario
                        </button>
                }
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
                                    <AgregarHorarioMateria horaio={horario}></AgregarHorarioMateria>
                            }


                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="mt-4">
                        {
                            periodo.idPeriodo === 0 ?
                                <span>Selecciona un periodo</span>
                                : <TablaHorario horario={horario} data={clases}  handleEdit={handleEditClass}></TablaHorario>
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
                        idHorario: horario.idHorario
                    });
                }}
                ></ModalClase>
        </Container>
    );
}

export default Horarios;