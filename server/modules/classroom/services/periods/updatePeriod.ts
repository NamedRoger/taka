import database from '../../../../database/database.ts';
import { IPeriod } from '../../models/period.ts';

const table = "periodos";
const query = `
UPDATE ${table} SET nombre = ?, codigo =? , fecha_inicio = ?, fecha_fin = ?
WHERE idPeriod = ?
`;

export default async ({code,finishDate,initDate,name,idPeriod}:IPeriod) => {
    const result = await database.execute(query,[name,code,initDate,finishDate,idPeriod]);
}