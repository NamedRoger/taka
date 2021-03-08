import database from '../../../../database/database.ts';
import {roles} from '../../consts.ts'

const query = (idRole:number) => `
UPDATE ${roles.table} SET activo = ${false} WHERE id_rol = ${idRole}
`;

export default async (idRole:number) => {
    const res = await database.execute(query(idRole));
    if(res.affectedRows === 0) throw new Error("no se pudo borrar el registro");
    return res;
}