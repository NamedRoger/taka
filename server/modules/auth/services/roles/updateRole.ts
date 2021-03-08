import database from '../../../../database/database.ts';
import { Role} from '../../models/index.ts';
import {roles} from '../../consts.ts'

const query = ({code,name,idRole}:Role) => `
UPDATE ${roles.table} SET nombre = '${name}', codigo = '${code}' WHERE id_rol = ${idRole}
`;

export default async ({name,code,active,idRole}:Role) => {
    const res = await database.execute(query({name,code,active,idRole}));
    return res;
}