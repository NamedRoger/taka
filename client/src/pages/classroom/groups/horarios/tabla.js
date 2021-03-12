
import React from 'react';
import Pagination from '../../../components/Pagination';
import PropTypes from 'prop-types';
import {Table} from '@themesberg/react-bootstrap'
import { Link, Redirect,withRouter } from 'react-router-dom';
// import { Routes } from "../../../routes";

const TablaHorario = (props) => {
    const {data,onClick, history} = props; 
    const totalRows = data.length;

    const handleClick = ({id,operation}) => {
        onClick({id,operation});
    }
    
    const TableRow = (props) => {
        const {grupo} = props;
        // const linkTo = Routes.Grupos.children.horarios.replace(/:idGrupo/,grupo.idGroup);
        return(
            <tr>
                <td>{grupo.name}</td>
                <td>{grupo.code}</td>
                <td>{grupo.speciality}</td>
                <td>
                    <button className="btn-primary" onClick={() => handleClick({
                        id:grupo.idGroup,
                        operation:'edit'
                    })}>
                        editar
                    </button>
                    {/* <button 
                    className="btn-secondary"
                    onClick={() => history.push(linkTo)}>
                        horarios
                    </button> */}
                    <button className="btn-danger" onClick={() => handleClick({
                        id:grupo.idGroup,
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
                    <td>Materia</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {/* {data.map(d => <TableRow key={d.idGroup} grupo={d}></TableRow>)} */}
            </tbody>
        </Table>
    </>
    );
    
}

TablaHorario.prototype = {
    data: PropTypes.array
}

export default withRouter(TablaHorario);