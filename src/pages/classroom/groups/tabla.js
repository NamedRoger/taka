
import React from 'react';
import Pagination from '../../../components/Pagination';
import PropTypes from 'prop-types';
import {Table} from '@themesberg/react-bootstrap'
import { withRouter } from 'react-router-dom';
import { Routes } from "../../../routes";

const TablaGrupos = (props) => {
    const {data,onClick, history} = props; 
    const totalRows = data.length;

    const handleClick = ({id,operation}) => {
        onClick({id,operation});
    }
    
    const TableRow = (props) => {
        const {grupo} = props;
        const linkTo = Routes.Grupos.children.horarios.replace(/:idGrupo/,grupo.idGrupo);
        return(
            <tr>
                <td>{grupo.nombre}</td>
                <td>{grupo.codigo}</td>
                <td>{grupo.especialidad.nombre}</td>
                <td>
                    <button className="btn-primary" onClick={() => handleClick({
                        id:grupo.idGrupo,
                        operation:'edit'
                    })}>
                        editar
                    </button>
                    <button 
                    className="btn-secondary"
                    onClick={() => history.push(linkTo)}>
                        horarios
                    </button>
                    <button className="btn-danger" onClick={() => handleClick({
                        id:grupo.idGrupo,
                        operation:'delete'
                    })}>
                        borrar
                    </button>
                </td>
            </tr>
        );
    }

    return (
    <>
        <Table responsive> 
            <thead>
                <tr>
                    <td>Grupo</td>
                    <td>Código</td>
                    <td>Especialidad</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {data.map(d => <TableRow key={d.idGrupo} grupo={d}></TableRow>)}
            </tbody>
        </Table>
        <Pagination totalRecords={totalRows} pageLimit={1}  pageNeighbours={1}/>
    </>
    );
    
}

TablaGrupos.prototype = {
    data: PropTypes.array
}

export default withRouter(TablaGrupos);