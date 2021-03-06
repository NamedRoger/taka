import database from '../../../../database/database.ts';

const table = "periodos";
const query = `
SELECT id_periodo as idPeriod, 
    nombre as name,
    codigo as code,
    fecha_inicio as initDate, 
    fecha_fin as finishDate, 
    activo as active
FROM ${table}
WHERE active = ${true}
ORDER BY DESC
`;

export default async () => {
    const result = await database.query(query);
    return result;
}