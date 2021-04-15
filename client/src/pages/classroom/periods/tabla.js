
import React from 'react';
import Pagination from '../../../components/Pagination';
import PropTypes from 'prop-types';
import {Table} from '@themesberg/react-bootstrap'
import dayjs from 'dayjs';

const TablaPeriodos = (props) => {
    const {data,onClick} = props; 

    const totalRows = data.length;

    const handleClick = ({id,operation}) => {
        onClick({id,operation});
    }
    
    const TableRow = (props) => {
        const {periodo} = props;
        return(
            <tr>
                <td>{periodo.nombre}</td>
                <td>{dayjs(`${periodo.fechaInicio?periodo.fechaInicio:null}`).format('DD/MM/YY')}</td>
                <td>{dayjs(`${periodo.fechaFin?periodo.fechaFin:null}`).format('DD/MM/YY')}</td>
                <td>
                    <button className="btn-primary" onClick={() => handleClick({
                        id:periodo.idPeriodo,
                        operation:'edit'
                    })}>
                        editar
                    </button>
                    <button className="btn-danger" onClick={() => handleClick({
                        id:periodo.idPeriodo,
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
                    <td>Periodo</td>
                    <td>Fecha Inicio</td>
                    <td>Fecha Fin</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {data.map(d => <TableRow key={d.idPeriodo} periodo={d}></TableRow>)}
            </tbody>
        </Table>
        <Pagination totalRecords={totalRows} pageLimit={1}  pageNeighbours={1}/>
    </>
    );
    
}

TablaPeriodos.prototype = {
    data: PropTypes.array
}

export default TablaPeriodos;