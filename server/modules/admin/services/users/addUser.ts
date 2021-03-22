import database from '../../../../database/database.ts'
import {User} from '../../models/types.ts';

const query = ({idRole,
    name,
    username,
    active,
    curp,
    email,
    idUser,
    mLastname,
    matricula,
    pLastname,
    password}:User) => `
    INSERT INTO usuarios (id_role,
        nombre,
        username,
        activo,
        curp,
        email,
        apellido_materno,
        matricula,
        apellido_paterno,
        password) 
        VALUES (${idRole},
            '${name}',
            '${username}',
            ${active}, 
            '${curp}',
            '${email}',
            '${mLastname}',
            '${matricula}',
            '${pLastname}',
            '${password}')
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
        pLastname,
        password}:User) => {
        const res = await database.execute(query({idRole,
            name,
            username,
            active,
            curp,
            email,
            idUser,
            mLastname,
            matricula,
            pLastname,
            password}));
        if(res.affectedRows === 0) throw new Error("no se insteró un registro");
        return res;
    }
    