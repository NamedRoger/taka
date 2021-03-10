
import React from 'react';
import Pagination from '../../../components/Pagination';
import PropTypes from 'prop-types';
import {Table} from '@themesberg/react-bootstrap'

const TablaGrupos = (props) => {
    const {data,onClick} = props; 

    const totalRows = data.length;

    const handleClick = ({id,operation}) => {
        onClick({id,operation});
    }
    
    const TableRow = (props) => {
        const {grupo} = props;
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
                    <button className="btn-secondary" onClick={() => handleClick({
                        id:grupo.idGroup,
                        operation:'edit'
                    })}>
                        horarios
                    </button>
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
                    <td>Grupo</td>
                    <td>Código</td>
                    <td>Especialidad</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {data.map(d => <TableRow key={d.idGroup} grupo={d}></TableRow>)}
            </tbody>
        </Table>
        <Pagination totalRecords={totalRows} pageLimit={1}  pageNeighbours={1}/>
    </>
    );
    
}

TablaGrupos.prototype = {
    data: PropTypes.array
}

export default TablaGrupos;