import database from '../../../../database/database.ts';

const table = "grupos";
const query = `
SELECT
    g.id_grupo as idGroup,
    g.nombre as name,
    g.codigo as code,
    g.id_especialidad as idSpeciality,
    es.nombre as speciality
FROM ${table} as g
INNER JOIN especialidades as es ON es.id_especialidad = g.id_especialidad
WHERE g.activo = ${true} AND es.activo = ${true}
`;

export default async () => {
    const result = await database.query(query);
    return result;
}
