import database from '../../../../database/database.ts';
import { IPeriod } from '../../models/period.ts';
const table = 'periodos';

const queryById = (idPeriod:number) => `
SELECT
    id_periodo as idPeriod,
    nombre as name,
    fecha_fin as finishDate,
    fecha_inicio as initDate,
    codigo as code,
    activo as active
FROM ${table}
WHERE idPeriod = ${idPeriod}
`;

const queryByCode = (code:string) => `
SELECT
    id_periodo as idPeriod,
    nombre as name,
    fecha_fin as finishDate,
    fecha_inicio as initDate,
    codigo as code,
    activo as active
FROM ${table}
WHERE code = ${code}
`;

export const getPeriodById = async (idPeriod:number) => {
    const period:IPeriod = await database.query(queryById(idPeriod));
    return period;
}

export const getPeriodByCode = async (code:string) => {
    const period:IPeriod = await database.query(queryByCode(code));
    return period;
}