
import database from '../../../database/database.ts';
import {Login} from '../models/mod.ts';

const queryLogin = ({username,password}:Login) => `
SELECT 
    u.id_usuario as idUsuario,
    u.password as password,
    u.username,
    u.nombre as name,
    u.id_role as idRole,
    r.nombre as role
FROM usuarios as u
INNER JOIN roles as r ON r.id_rol = u.id_role
WHERE u.username = '${username}'`

export const getUserLogin = async (login:Login) => {
    const res = await database.query(queryLogin(login));
    return res[0];
}
