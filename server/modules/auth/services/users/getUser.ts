import database from '../../../../database/database.ts';
import {users} from '../../consts.ts'
import {Login} from '../../models/index.ts';


const query = (idUser:number) => `
SELECT 
name as nombre,
username as username,
active as activo,
curp as curp,
email as email,
idUser as idUsuario,
mLastname as apellido_materno,
matricula as matricula,
pLastname as apellido_paterno,
password as password
FROM ${users.table}
WHERE id_user = ${idUser}
`;

export const getUserById =  async (idUser:number) => {
    const res = await database.query(query(idUser));
    return res[0];
}

const queryLogin = ({username,password}:Login) => `
SELECT 
    u.id_usuario as idUsuario,
    u.password as password,
    u.id_role as idRole,
    r.nombre as role
FROM ${users.table}
INNER JOIN roles as r ON r.id_rol = u.id_role
WHERE u.username = '${username}'`

export const getUserLogin = async (login:Login) => {
    const res = await database.query(queryLogin(login));
    return res[0];
}
