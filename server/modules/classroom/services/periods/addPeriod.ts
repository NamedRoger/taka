import database from '../../../../database/database.ts';
import { IPeriod } from '../../models/period.ts';

const table = "periodos";

const query = ({name,finishDate,initDate,active}:IPeriod) => `
INSERT INTO ${table} (nombre,fecha_inicio,fecha_fin,activo) 
VALUES ('${name}','${initDate}','${finishDate}',${true})
`;

export default async ({finishDate,initDate,name,active}:IPeriod) => {
    const result = await database.execute(query({name,finishDate,initDate,active}));
    if(result.affectedRows === 0) throw Error("No se insertó ningun registro");
    return result;
}