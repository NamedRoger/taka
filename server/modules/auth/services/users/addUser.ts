import database from '../../../../database/database.ts'
import {User} from '../../models/index.ts';
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
    pLastname,
    password}:User) => `
    INSERT INTO ${users.table} (idRole,
        name,
        username,
        active,
        curp,
        email,
        idUser,
        mLastname,
        matricula,
        pLastname,
        password) VALUES ('${name}','${username}',${active}, '${curp}','${email}','${idUser}','${mLastname}','${matricula}','${pLastname}',
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
    