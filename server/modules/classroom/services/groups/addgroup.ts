import database from '../../../../database/database.ts';
import { Group } from '../../models/groups.ts';

const table = "grupos";

const query = ({name,code}:Group) => `
INSERT INTO ${table} (nombre, codigo) 
VALUES ('${name}','${code}')
`;

export default async ({name,code}:Group) => {
    const result = await database.execute(query({name,code}));
    if(result.affectedRows === 0) throw Error("No se insertó ningun registro");
    return result;
}
