import React from 'react';
import Pagination from '../../../components/Pagination';
import PropTypes from 'prop-types';

const TablaEspecialidad = (props) => {
    const {data} = props; 
    const TableRow = ({column}) => {
        if (column==='encabezado'){
            return(
                <tr>
                    <td>Especialidad</td>
                    <td>Acciones</td>
                </tr>
                );
        }
        else {
            return(
                <tr>
                    <td>Informatica</td>
                    <td>Agregar</td>
                </tr>
                );
        }
    }

    return (
    <>
        <table className="table">
            <thead>
                <TableRow column="encabezado"/>
            </thead>
            <tbody>
                <TableRow />
            </tbody>
        </table>
        <Pagination totalRecors={30} pageLimit={20}  pageNeighbours={1}/>
    </>
    );
    
}

TablaEspecialidad.prototype = {
    data: PropTypes.array
}

export default TablaEspecialidad;