import database from '../../../../database/database.ts';
import { IPeriod } from '../../models/period.ts';

const table = "periodos";

const query = `
INSERT INTO ${table} (nombre,codigo,fecha_inicio,fecha_fin,activo) 
VALUES (?,?,?,?,?,?)
`;

export default async ({code,finishDate,initDate,name,active}:IPeriod) => {
    const result = await database.execute(query,[name,code,initDate,finishDate,active]);
    if(result.affectedRows === 0) throw Error("No se insertó ningun registro");
    return result;
}