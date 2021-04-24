import React, { useCallback,useState, useEffect } from 'react';
import {Container,Row, Col} from '@themesberg/react-bootstrap'
import * as maestrosService from '../../services/maestros';
import useUser from '../../hooks/useUser';
import { ROLES } from '../../consts';
import HeaderPage from '../../components/HeaderPage';
import * as periodosService from '../../services/periodos';
import CardClase from '../../components/CardClase';
import * as claseService from '../../services/clases';

const Tablero = () => {
    const {primarysid,role} = useUser();
    const [periodos,setPeriodos] = useState([]);
    const [idPeriodo,setIdPeriodo] = useState(0);
    const [clases,setClases] = useState([]);

    const getPeriodos = () => {
        periodosService.getPeriodos().then(res => setPeriodos(res));
    }

    const getClasesAlumno = useCallback(() => {
        claseService.getClases(idPeriodo,Number(primarysid)).then(res => setClases(res.data));
    },[idPeriodo, primarysid]);

    const getClasesMaestro = useCallback(() => {
        const idMaestro = Number(primarysid);
        maestrosService.getClases(idMaestro,idPeriodo).then(res => setClases(res.data));
    },[idPeriodo, primarysid])

    const getClases = useCallback(() => {
        if(role === ROLES.Maestro){
            getClasesMaestro();
        }else{
            getClasesAlumno();
        }
    },[getClasesAlumno, getClasesMaestro, role]);

    useEffect(() => {
        getPeriodos();
        if(idPeriodo){
            getClases()
        }else{
            setClases([])
        }
    },[getClases, idPeriodo])
    return (
        <Container>
            <HeaderPage title="Tablero"></HeaderPage>
            <Row>
                <Col>
                    <label>Periodo: </label>
                    <select value={idPeriodo} onChange={(e) => setIdPeriodo(Number(e.target.value))}>
                        <option value={0}>-- Selecciona el Periodo --</option>
                        {periodos.map(p => <option key={p.idPeriodo} value={p.idPeriodo}>{p.nombre}</option>)}
                    </select>
                </Col>
            </Row>
            <Row className="mt-3">
                {clases.map(c => 
                    <CardClase key={c.idClase} 
                    clase={c.nombre}
                    grupo={c.grupo.nombre}
                    maestro={`${c.maestro.nombre} ${c.maestro.apellidoPaterno} ${c.maestro.apellidoMaterno}`} 
                    className="m-2"
                    href={`/tablero/periodo/${idPeriodo}/clase/${c.idClase}`}></CardClase>
                )}
            </Row>
        </Container>
    );
}

export default Tablero;