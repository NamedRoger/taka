import database from '../../../../database/database.ts';

const table = "materias";
const query = `
SELECT id_materia as idTopic, 
    nombre as name,
    codigo as code,
    activo as active
FROM ${table}
WHERE activo = ${true}`;

export default async () => {
    const result = await database.query(query);
    return result;
}