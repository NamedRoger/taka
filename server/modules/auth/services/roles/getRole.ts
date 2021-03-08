import database from '../../../../database/database.ts';
import {roles} from '../../consts.ts'


const query = (idRole:number) => `
SELECT 
    id_rol as idRole,
    nombre as name,
    codigo as code,
    activo as active
FROM ${roles.table}
WHERE id_rol = ${idRole}
`;

export const getRoleById =  async (idRole:number) => {
    const res = await database.query(query(idRole));
    return res[0];
}