import database from '../../../../database/database.ts';
import {Specialty} from '../../models/specialty.ts';

const table = "especialidades";

const query = ({name,code,active}:Specialty) => `
INSERT INTO ${table} (nombre,codigo,activo) 
VALUES ('${name}','${code}',${active})
`;

export default async ({name,code,active}:Specialty) => {
    const result = await database.execute(query({name,code,active}));
    if(result.affectedRows === 0) throw Error("No se insertó ningun registro");
    return result;
}
