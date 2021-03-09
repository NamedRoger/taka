import database from '../../../../database/database.ts';

const table = "clase";
const query  = `
SELECT
    id_clase as idClass,
    nombre as name,
    id_materia as idTopuc,
    id_maestro as idTeacher,
    id_horario as idSchedule,
    activo as active
FROM ${table}
WHERE activo = ${true}
`;

export default async () => {
    const result = await database.query(query);
    return result;
}
