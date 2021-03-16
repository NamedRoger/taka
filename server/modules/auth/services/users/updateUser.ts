import database from '../../../../database/database.ts';
import { User} from '../../models/index.ts';
import {users} from '../../consts.ts'

const query = ({idRole,
    name,
    username,
    active,
    curp,
    email,
    idUser,
    mLastname,
    matricula,
    pLastname}:User) => `
UPDATE ${users.table} SET nombre = '${name}', username = '${username}', activo '${active}',
curp = '${curp}', email  = '${email}', idUuario = '${idUser}', apellido_materno = '${mLastname}', apellido_paterno = '${pLastname}' WHERE idUsuario = ${idUser}
`;

export default async ({idRole,
    name,
    username,
    active,
    curp,
    email,
    idUser,
    mLastname,
    matricula,
    pLastname}:User) => {
    const res = await database.execute(query({idRole,
        name,
        username,
        active,
        curp,
        email,
        idUser,
        mLastname,
        matricula,
        pLastname}));
    return res;
}

