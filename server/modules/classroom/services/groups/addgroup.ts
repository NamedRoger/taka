import database from '../../../../database/database.ts';
import { Group } from '../../models/group.ts';

const table = "grupos";

const query = ({name,code,idSpeciality}:Group) => `
INSERT INTO ${table} (nombre, codigo,id_especialidad) 
VALUES ('${name}','${code}',${idSpeciality})
`;

export default async ({name,code,idSpeciality}:Group) => {
    const result = await database.execute(query({name,code,idSpeciality}));
    if(result.affectedRows === 0) throw Error("No se insertó ningun registro");
    return result;
}
