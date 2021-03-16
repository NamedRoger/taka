import database from '../../../../database/database.ts';
import {users} from '../../consts.ts'


const query = () => `
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
WHERE activo = ${true}
`;

export default  async () => {
    const res = await database.query(query());
    return res;
}

