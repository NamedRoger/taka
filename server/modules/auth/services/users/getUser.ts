import database from '../../../../database/database.ts';
import {users} from '../../consts.ts'



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

const queryLogin = (idUser: number, password: String) => `
SELECT 
idUser as idUsuario
password as password
FROM ${users.table}
WHERE id_user = ${password}`

export const getUserLogin = async (idUser:number, password: string) => {
    const res = await database.query(queryLogin(idUser,password));
    return res[0];
}
