import database from '../../../../database/database.ts';
const table = 'clase';

const queryById = (idClase:number) => `
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
WHERE id_clase = ${idClase}
`;



export const getClassById = async (idClase:number) => {
    const Class = await database.query(queryById(idClase));
    return Class[0];
}
