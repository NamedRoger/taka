import database from '../../../../database/database.ts';
import {users} from '../../consts.ts'
import {Login} from '../../models/index.ts';


const query = (idUser:number) => `
SELECT 
    u.nombre as name, 
    u.username as username, 
    u.activo as active, 
    u.curp as curp, 
    u.email as email, 
    u.id_usuario as idUser, 
    u.apellido_materno as mLastname,
    u.matricula as matricula,
    u.apellido_paterno as pLastname,
    r.nombre as rol ,
    u.id_role as idRole
FROM usuarios as u 
INNER JOIN roles as r ON r.id_rol = u.id_role 
WHERE u.id_usuario = ${idUser}
`;

export const getUserById =  async (idUser:number) => {
    const res = await database.query(query(idUser));
    return res[0];
}

const queryLogin = ({username,password}:Login) => `
SELECT 
    u.id_usuario as idUsuario,
    u.password as password,
    u.username,
    u.nombre as name,
    u.id_role as idRole,
    r.nombre as role,
FROM ${users.table}
INNER JOIN roles as r ON r.id_rol = u.id_role
WHERE u.username = '${username}'`

export const getUserLogin = async (login:Login) => {
    const res = await database.query(queryLogin(login));
    return res[0];
}
