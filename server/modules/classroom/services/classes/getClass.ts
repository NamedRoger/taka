import database from '../../../../database/database.ts';
const table = 'clase';

const queryById = (idClase:number) => `
SELECT
    id_clase as idClass,
    nombre as name,
    id_materia as idTopuc,
    id_maestro as idTeacher,
    id_horario as idSchedule,
    activo as active
FROM ${table}
WHERE id_clase = ${idClase}
`;



export const getClassById = async (idClase:number) => {
    const Class = await database.query(queryById(idClase));
    return Class[0];
}
