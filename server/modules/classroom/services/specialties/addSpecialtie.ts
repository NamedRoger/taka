import database from '../../../../database/database.ts';
import {Specialty} from '../../models/specialty.ts';

const table = "especialidades";

const query = `
INSERT INTO ${table} (nombre,codigo,activo) 
VALUES (?,?,?)
`;

export default async ({code,name,active}:Specialty) => {
    const result = await database.execute(query,[name,code,active]);
    if(result.affectedRows === 0) throw Error("No se insertó ningun registro");
    return result;
}
