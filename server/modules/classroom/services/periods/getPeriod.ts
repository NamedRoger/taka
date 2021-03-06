import database from '../../../../database/database.ts';
const table = 'periodos';

const queryById = (idPeriod:number) => `
SELECT
    id_periodo as idPeriod,
    nombre as name,
    fecha_fin as finishDate,
    fecha_inicio as initDate,
    activo as active
FROM ${table}
WHERE id_periodo = ${idPeriod}
`;



export const getPeriodById = async (idPeriod:number) => {
    const period = await database.query(queryById(idPeriod));
    return period[0];
}
