import React from 'react';

const TablaAlumnos = ({data}) => {

    const TableRow = ({alumnoClase}) => {
        let {alumno,parcial1,parcial2,parcial3,calificacion} = alumnoClase;
        let bgColor = {
            color:'#FFF',
            bg: 'green'
        };
        calificacion = calificacion?calificacion :0;
        if(calificacion < 7 && calificacion > 5) bgColor = {
            bg:'yellow',
            color:'#000'
        };;
        if(calificacion < 5) bgColor = {
            bg:'red',
            color:'#000'
        };

        return(
            <tr style={{backgroundColor:bgColor.bg,color:bgColor.color}}>
                <td>{alumno.matricula}</td>
                <td>
                    {`${alumno.nombre} ${alumno.apellidoPaterno?alumno.apellidoPaterno:''} ${alumno.apellidoMaterno?alumno.apellidoMaterno:''}`}
                </td>
                <td style={{textAlign:'center'}}>{parcial1 ? parcial1:0}</td>
                <td style={{textAlign:'center'}}>{parcial2 ? parcial2:0}</td>
                <td style={{textAlign:'center'}}>{parcial3 ? parcial3:0}</td>
                <td style={{textAlign:'center'}}>{calificacion ? calificacion:0}</td>
            </tr>
        );
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Matricula</th>
                    <th>Nombre</th>
                    <th>Parcial 1</th>
                    <th>Parcial 2</th>
                    <th>Parcial 3</th>
                    <th>Calificacion</th>
                </tr>
            </thead>
            <tbody>
                {data.map((d,key) => <TableRow key={key}  alumnoClase={d}></TableRow>)}
            </tbody>
        </table>
    );
}

export default TablaAlumnos;
