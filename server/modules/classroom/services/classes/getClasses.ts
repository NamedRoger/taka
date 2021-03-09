import database from '../../../../database/database.ts';

const table = "clase";
const query  = `
SELECT
    id_clase as idClase,
    nombre as name,
    id_materia as materia,
    id_maestro as idTeacher,
    fecha_fin as finishDate,
    fecha_inicio as initDate,
    id_horario as schedule,
    activo as active
FROM ${table}
WHERE activo = ${true}
`;

export default async () => {
    const result = await database.query(query);
    return result;
}
