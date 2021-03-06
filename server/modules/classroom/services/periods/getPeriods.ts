import database from '../../../../database/database.ts';

const table = "periodos";
const query = `
SELECT id_periodo, nombre, fecha_inicio, fecha_fin, activo
FROM ${table}
WHERE active = ${true}
ORDER BY DESC
`;

export default async () => {
    const result = await database.query(query);
    return result;
}