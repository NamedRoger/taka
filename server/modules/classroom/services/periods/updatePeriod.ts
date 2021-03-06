import database from '../../../../database/database.ts';
import { IPeriod } from '../../models/period.ts';

const table = "periodos";
const query = ({name,finishDate,initDate,idPeriod}:IPeriod) =>`
UPDATE ${table} SET nombre = '${name}', fecha_inicio = '${initDate}', fecha_fin = '${finishDate}'
WHERE id_periodo = ${idPeriod}
`;

export default async ({finishDate,initDate,name,idPeriod}:IPeriod) => {
    const result = await database.execute(query({name,finishDate,initDate,idPeriod}));
    return result;
}