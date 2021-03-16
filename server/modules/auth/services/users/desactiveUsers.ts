import database from '../../../../database/database.ts';
import {users} from '../../consts.ts'

const query = (idUser:number) => `
UPDATE ${users.table} SET activo = ${false} WHERE id_user = ${idUser}
`;

export default async (idUser:number) => {
    const res = await database.execute(query(idUser));
    if(res.affectedRows === 0) throw new Error("no se pudo borrar el registro");
    return res;
}
