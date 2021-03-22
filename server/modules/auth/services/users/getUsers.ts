import database from '../../../../database/database.ts';
import {users} from '../../consts.ts'


const query = () => `
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
WHERE u.activo = ${true}
`;

export default  async () => {
    const res = await database.query(query());
    return res;
}

