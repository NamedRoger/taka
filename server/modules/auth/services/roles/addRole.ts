import database from '../../../../database/database.ts';
import { Role} from '../../models/index.ts';
import {roles} from '../../consts.ts'

const query = ({code,name,active}:Role) => `
INSERT INTO ${roles.table} (nombre,codigo,activo) VALUES ('${name}','${code}',${active})
`;

export default async ({name,code,active}:Role) => {
    const res = await database.execute(query({name,code,active}));
    if(res.affectedRows === 0) throw new Error("no se insteró un registro");
    return res;
}