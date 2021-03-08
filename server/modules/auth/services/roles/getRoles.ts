import database from '../../../../database/database.ts';
import {roles} from '../../consts.ts'


const query = () => `
SELECT 
    id_rol as idRole,
    nombre as name,
    codigo as code,
    activo as active
FROM ${roles.table}
WHERE activo = ${true}
`;

export default  async () => {
    const res = await database.query(query());
    return res;
}