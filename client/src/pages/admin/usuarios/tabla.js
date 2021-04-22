import React from 'react';

const TablaUsuarios = (props) => {
    const {data} = props;

    const TableRow = (props) => {
        const {usuario} = props ;

        console.log(usuario);
        return(
            <tr>
                <td>{usuario.nombre}</td>
                <td>{usuario.email}</td>
                <td>{usuario.role.nombre}</td>
                <td></td>
            </tr>
        );
    }
    return(
        <table class="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Usuario</th>
                    <th>Role</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
            {data && data.length > 0?
                data.map(u => <TableRow key={u.idUsuario} usuario={u}></TableRow>)
                :
                <></>
            }
            </tbody>
        </table>
    );
}

export default TablaUsuarios;