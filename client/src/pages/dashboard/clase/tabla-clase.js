import React from 'react';

const TablaClase = (props) => {
    const {data} = props;
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Actividad</th>
                    <th>Ponderación</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Parcial 1</td>
                    <td>{data.parcial1}</td>
                </tr>
                <tr>
                    <td>Parcial 2</td>
                    <td>{data.parcial2}</td>
                </tr>
                <tr>
                    <td>Parcial 3</td>
                    <td>{data.parcial3}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>Promedio</td>
                    <td>{data.calificacion}</td>
                </tr>
            </tfoot>
        </table>
    );
}

export default TablaClase;